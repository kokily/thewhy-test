import type { ChangeEvent } from 'react';
import { memo } from 'react';
import {
  BoxContainer,
  Button,
  Form,
  TagItemContainer,
  TagsListContainer,
} from './styles';

const TagItem = memo(
  ({ tag, onRemove }: { tag: string; onRemove: (id: string) => void }) => (
    <TagItemContainer onClick={() => onRemove(tag)}>#{tag}</TagItemContainer>
  )
);

TagItem.displayName = 'TagItem';

const TagsList = memo(
  ({ tags, onRemove }: { tags: string[]; onRemove: (id: string) => void }) => (
    <TagsListContainer>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagsListContainer>
  )
);

TagsList.displayName = 'TagsList';

interface Props {
  input: string;
  localTags: string[];
  onRemoveTag: (tag: string) => void;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
}

export default function TagBox({ ...rest }: Props) {
  return (
    <BoxContainer>
      <p>태그 👉</p>

      <Form onSubmit={rest.onSetTags}>
        <input
          placeholder="엔터로 입력"
          value={rest.input}
          onChange={rest.onChangeText}
        />
        <Button type="submit">추가</Button>
      </Form>

      <TagsList tags={rest.localTags} onRemove={rest.onRemoveTag} />
    </BoxContainer>
  );
}
