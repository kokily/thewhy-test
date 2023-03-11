import type { ChangeEvent } from 'react';
import { useCallback, useState, useEffect } from 'react';

interface Props {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
}

export default function useTags({ tags, onChangeTags }: Props) {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const onAddTag = useCallback(
    (tag: string) => {
      // 중복 태그 검사
      if (!tag) return;
      if (localTags.includes(tag)) return;

      const nextTags = [...localTags, tag];

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onRemoveTag = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((text) => text !== tag);

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSetTags = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      onAddTag(input.trim());
      setInput('');
    },
    [input, onAddTag]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return {
    input,
    localTags,
    onRemoveTag,
    onChangeText,
    onSetTags,
  };
}
