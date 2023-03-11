import EditorTitle from '@/components/common/Editor/EditorTitle';
import EditorBody from '@/components/common/Editor/EditorBody';
import {
  Container,
  Contents,
  EditorBox,
  TagsBox,
  ThumbnailBox,
} from './styles';
import useAddStory from './useAddStory';
import useTags from './useTags';
import EditorFooter from '@/components/common/Editor/EditorFooter';
import TagBox from './TagBox';
import Thumbnail from './Thumbnail';

export default function AddStory() {
  const storyHooks = useAddStory();
  const tagsHooks = useTags({
    tags: storyHooks.tags,
    onChangeTags: storyHooks.onChangeTags,
  });

  return (
    <Container>
      <EditorBox>
        <Contents>
          <EditorTitle
            placeholder="제목을 입력하세요."
            value={storyHooks.title}
            onChange={storyHooks.onChangeTitle}
          />

          <TagsBox>
            <TagBox
              input={tagsHooks.input}
              localTags={tagsHooks.localTags}
              onRemoveTag={tagsHooks.onRemoveTag}
              onChangeText={tagsHooks.onChangeText}
              onSetTags={tagsHooks.onSetTags}
            />
          </TagsBox>

          <ThumbnailBox>
            {' '}
            <Thumbnail
              thumbnail={storyHooks.thumbnail}
              onUploadThumbnail={storyHooks.onUploadThumbnail}
            />
          </ThumbnailBox>

          <EditorBody
            body={storyHooks.body}
            onChangeBody={storyHooks.onChangeBody}
          />
        </Contents>

        <EditorFooter
          onBack={storyHooks.onBack}
          onSubmit={storyHooks.onAddStory}
        />
      </EditorBox>
    </Container>
  );
}
