import type { Story } from '@prisma/client';
import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { useSession } from 'next-auth/react';
import { listStoriesAPI } from '../storiesApi';
import useObserver from '@/libs/hooks/useObserver';
import useMobile from '@/libs/hooks/useMobile';

export default function useListStories() {
  const { status } = useSession();
  const isMobile = useMobile();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listStoriesScroll', 0);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  // Data Fetching
  const { data, fetchNextPage } = useInfiniteQuery(
    'stories',
    ({ pageParam }) =>
      listStoriesAPI({ cursor: pageParam, title: search, tag }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 12 ? data[data.length - 1].id : undefined,
    }
  );

  const stories = useMemo(() => {
    if (!data) return [];

    return ([] as Story[]).concat(...data.pages);
  }, [data]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries('stories');
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & SyntheticEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onReadStory = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/stories/${id}`);
  };

  const onClickTag = (tag: string) => {
    setTag(tag);
    queryClient.invalidateQueries('stories');
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    stories,
    search,
    onChangeSearch,
    onSearch,
    onKeyPress,
    onReadStory,
    onClickTag,
    setTarget,
    isMobile,
    isAdmin: status === 'authenticated',
  };
}
