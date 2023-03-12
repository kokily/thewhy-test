import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addReplyAPI,
  readQuestionAPI,
  removeQuestionAPI,
  removeReplyAPI,
  validPasswordAPI,
} from '../questionsApi';
import { toast } from 'react-toastify';

export default function useReadQuestion() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;

  // 댓글창 toggle, 댓글 내용 reply
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState('');

  // 문의 글 questionRemoveModal, 댓글 replyRemoveModal
  const [questionRemoveModal, setQuestionRemoveModal] = useState(false);
  const [replyRemoveModal, setReplyRemoveModal] = useState(false);

  // Mutations
  const validPasswordMutate = useMutation(validPasswordAPI);
  const removeQuestionMutate = useMutation(removeQuestionAPI);
  const addReplyMutate = useMutation(addReplyAPI);
  const removeReplyMutate = useMutation(removeReplyAPI);

  // Data Fetching
  const { data } = useQuery('question', () => readQuestionAPI(id), {
    enabled: true,
  });

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  const onChangeReply = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const onRemoveQuestion = async () => {
    try {
      if (status === 'authenticated') {
        await removeQuestionMutate.mutateAsync({ id });
        await queryClient.invalidateQueries(['questions', 'question']);
        router.replace('/questions');
      } else {
        const password = window.prompt('작성 시 비밀번호를 입력해 주세요.');

        if (password) {
          await removeQuestionMutate.mutateAsync({ id, password });
          await queryClient.invalidateQueries(['questions', 'question']);
          router.replace('/questions');
        } else {
          return;
        }
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onUpdateQuestion = async () => {
    try {
      const password = await window.prompt('작성 시 비밀번호를 입력해 주세요.');

      if (password) {
        const valid = await validPasswordMutate.mutateAsync({
          id,
          password,
        });

        if (!valid) {
          toast.error('비밀번호가 틀렸습니다.');
          return;
        }

        router.push(`/questions/update/${id}`);
      } else {
        return;
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onAddReply = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      if ([reply].includes('')) {
        toast.error('댓글 내용을 작성하세요');
        return;
      }

      await addReplyMutate.mutateAsync({ body: reply, id });
      await queryClient.invalidateQueries('question');
      setReply('');
      setToggle(false);
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveReply = async () => {
    try {
      await removeReplyMutate.mutateAsync(id);
      await queryClient.invalidateQueries('question');
      setReply('');
      setToggle(false);
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onQuestionRemoveModalClick = () => {
    setQuestionRemoveModal(true);
  };

  const onQuestionRemoveConfirm = () => {
    setQuestionRemoveModal(false);
    onRemoveQuestion();
  };

  const onQuestionRemoveCancel = () => {
    setQuestionRemoveModal(false);
  };

  const onReplyRemoveModalClick = () => {
    setReplyRemoveModal(true);
  };

  const onReplyRemoveConfirm = () => {
    setReplyRemoveModal(false);
    onRemoveReply();
  };

  const onReplyRemoveCancel = () => {
    setReplyRemoveModal(false);
  };

  return {
    question: data,
    toggle,
    onToggle,
    reply,
    onChangeReply,
    questionRemoveModal,
    onQuestionRemoveModalClick,
    onQuestionRemoveConfirm,
    onQuestionRemoveCancel,
    replyRemoveModal,
    onReplyRemoveModalClick,
    onReplyRemoveConfirm,
    onReplyRemoveCancel,
    onAddReply,
    onUpdateQuestion,
    isAdmin: status === 'authenticated',
  };
}
