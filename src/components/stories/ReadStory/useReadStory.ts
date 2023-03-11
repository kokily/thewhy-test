import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { readStoryAPI, removeStoryAPI } from '../storiesApi';
import { toast } from 'react-toastify';

export default function useReadStory() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [removeClick, setRemoveClick] = useState(false);

  // Mutations
  const removeStoryMutate = useMutation(removeStoryAPI);

  // Data Fetching
  const { data } = useQuery('story', () => readStoryAPI(id), {
    enabled: true,
  });

  const onUpdateStory = () => {
    router.push(`/stories/update/${id}`);
  };

  const onClickTag = (tag: string) => {
    router.push(`/stories?tag=${tag}`);
  };

  const onRemoveStory = async () => {
    try {
      await removeStoryMutate.mutateAsync(id);
      await queryClient.invalidateQueries(['stories', 'story']);
      toast.success('삭제 완료');
      router.replace('/stories');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveClick = () => {
    setRemoveClick(true);
  };

  const onConfirm = () => {
    setRemoveClick(false);
    onRemoveStory();
  };

  const onCancel = () => {
    setRemoveClick(false);
  };

  return {
    story: data,
    onUpdateStory,
    onClickTag,
    removeClick,
    onRemoveClick,
    onConfirm,
    onCancel,
    isAdmin: status === 'authenticated',
  };
}
