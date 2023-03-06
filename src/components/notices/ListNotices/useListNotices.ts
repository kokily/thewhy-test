import type { Notice } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent, KeyboardEvent } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useSession } from 'next-auth/react';
import useLocalStorage from 'use-local-storage';
import { listNoticesAPI } from '../noticesApi';
import useMobile from '@/libs/hooks/useMobile';
import useObserver from '@/libs/hooks/useObserver';

export default function useListNotices() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();
  const isMobile = useMobile();
  const [scrollY, setScrollY] = useLocalStorage('listNoticesScroll', 0);
  const [search, setSearch] = useState('');

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'notices',
    ({ pageParam }) => listNoticesAPI({ cursor: pageParam, title: search }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const notices = useMemo(() => {
    if (!data) return [];

    return ([] as Notice[]).concat(...data.pages);
  }, [data]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    await queryClient.clear();
    await refetch();
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & SyntheticEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadNotice = (id: number) => {
    setScrollY(window.scrollY);
    router.push(`/notices/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    notices,
    search,
    onChangeSearch,
    onSearch,
    onKeyPress,
    onReadNotice,
    setTarget,
    isMobile,
    isAdmin: status === 'authenticated',
  };
}
