import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addQuestionAPI,
  readQuestionAPI,
  updateQuestionAPI,
} from '../questionsApi';
import { toast } from 'react-toastify';

export default function useAddQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;

  // Variables
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    title: '',
    body: '',
    phone: '',
    email: '',
  });
  const { username, password, title, body, phone, email } = inputs;
  const [agree, setAgree] = useState(false);

  // Mutations
  const addQuestionMutate = useMutation(addQuestionAPI);
  const updateQuestionMutate = useMutation(updateQuestionAPI);

  // Data Fetching
  useQuery('updateQuestion', () => readQuestionAPI(id), {
    enabled: !!id,
    onSuccess: (data) => {
      setInputs({
        username: data.username,
        password: '',
        title: data.title,
        body: data.body,
        phone: data.phone,
        email: data.email,
      });
    },
    onError: () => {},
  });

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onToggleAgree = () => {
    setAgree((prev) => !prev);
  };

  const onAddQuestion = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      if ([username, password, title, body].includes('')) {
        toast.warning('* 표시는 전부 기록해 주세요.');
        return;
      }

      if (agree === false) {
        toast.warning('개인 정보 제공 동의를 해주셔야 합니다.');
        return;
      }

      if (!id) {
        // Add Question
        const response = await addQuestionMutate.mutateAsync({
          username,
          password,
          title,
          body,
          phone,
          email,
        });
        await queryClient.invalidateQueries(['questions', 'question']);
        router.replace(`/questions/${response.id}`);
      } else {
        // Update Question
        const response = await updateQuestionMutate.mutateAsync({
          id,
          payload: {
            username,
            password,
            title,
            body,
            phone,
            email,
          },
        });
        await queryClient.invalidateQueries(['questions', 'question']);
        router.replace(`/questions/${response.id}`);
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    username,
    password,
    title,
    body,
    phone,
    email,
    agree,
    onChangeInput,
    onToggleAgree,
    onAddQuestion,
  };
}
