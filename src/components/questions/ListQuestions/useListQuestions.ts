import type { Question } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent, KeyboardEvent } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import useMobile from '@/libs/hooks/useMobile';
import useObserver from '@/libs/hooks/useObserver';
import { listQuestionsAPI } from '../questionsApi';
import { useSession } from 'next-auth/react';

export default function useListQuestions() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listQuestionsScroll', 0);
  const [search, setSearch] = useState('');
  const isMobile = useMobile();

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'questions',
    ({ pageParam }) => listQuestionsAPI({ cursor: pageParam }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const questions = useMemo(() => {
    if (!data) return [];

    return ([] as Question[]).concat(...data.pages);
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

  const onReadQuestion = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/questions/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    questions,
    search,
    onChangeSearch,
    onSearch,
    onKeyPress,
    onReadQuestion,
    setTarget,
    isMobile,
    isAdmin: status === 'authenticated',
  };
}
