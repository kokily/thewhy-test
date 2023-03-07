import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addNoticeAPI, readNoticeAPI, updateNoticesAPI } from '../noticesApi';
import { toast } from 'react-toastify';

export default function useAddNotice() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Data Mutations
  const addNoticeMutate = useMutation(addNoticeAPI);
  const updateNoticeMutate = useMutation(updateNoticesAPI);

  // Data Fetching for update
  useQuery('updateNotice', () => readNoticeAPI(id), {
    enabled: !!id,
    onSuccess: (data) => {
      setTitle(data.title);
      setBody(data.body);
    },
    onError: () => {},
  });

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onBack = () => {
    router.back();
  };

  const onAddNotice = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      toast.warning('빈 칸 없이 작성하세요!');
      return;
    }

    try {
      if (!id) {
        // Add Notice
        const response = await addNoticeMutate.mutateAsync({ title, body });
        await queryClient.clear();
        router.replace(`/notices/${response.id}`);
      } else {
        // Update Notice
        const response = await updateNoticeMutate.mutateAsync({
          id,
          payload: {
            title,
            body,
          },
        });
        await queryClient.clear();
        router.replace(`/notices/${response.id}`);
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onBack,
    onAddNotice,
  };
}
