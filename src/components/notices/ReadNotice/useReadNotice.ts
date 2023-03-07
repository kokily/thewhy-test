import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { readNoticeAPI, removeNoticeAPI } from '../noticesApi';

export default function useReadNotice() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [removeModal, setRemoveModal] = useState(false);

  // Data Mutations
  const removeNoticeMutate = useMutation(removeNoticeAPI);

  // Data Fetching
  const { data: notice } = useQuery('notice', () => readNoticeAPI(id), {
    enabled: true,
  });

  const onUpdateNotice = () => {
    router.push(`/notices/update/${id}`);
  };

  const onRemoveNotice = async () => {
    try {
      await removeNoticeMutate.mutateAsync(id);
      await queryClient.clear();
      toast.success('공지사항 삭제');
      router.replace('/notices');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveNoticeClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    setRemoveModal(false);
    onRemoveNotice();
  };

  const onCancel = () => {
    setRemoveModal(false);
  };

  return {
    notice,
    removeModal,
    onUpdateNotice,
    onRemoveNoticeClick,
    onConfirm,
    onCancel,
  };
}
