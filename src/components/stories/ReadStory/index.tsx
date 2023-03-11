import Image from 'next/image';
import AdminButtons from '@/components/common/AdminButtons';
import Markdown from '@/components/common/Markdown';
import { Container, FlexBox } from './styles';
import useReadStory from './useReadStory';
import StoryTitle from './StoryTitle';
import StoryDate from './StoryDate';

export default function ReadStory() {
  const storyHooks = useReadStory();

  return storyHooks.story ? (
    <Container>
      <FlexBox>
        <Image
          src={storyHooks.story.thumbnail}
          alt={storyHooks.story.title}
          width={1110}
          height={1110}
          priority
        />
      </FlexBox>

      {storyHooks.isAdmin && (
        <AdminButtons
          modal={storyHooks.removeClick}
          onRemoveClick={storyHooks.onRemoveClick}
          onConfirm={storyHooks.onConfirm}
          onCancel={storyHooks.onCancel}
          onUpdate={storyHooks.onUpdateStory}
        />
      )}

      <FlexBox>
        <StoryDate date={storyHooks.story.createdAt.toString()} />
        <StoryTitle
          title={storyHooks.story.title}
          tags={storyHooks.story.tags}
          onClickTag={storyHooks.onClickTag}
        />
      </FlexBox>

      <FlexBox>
        <Markdown markdown={storyHooks.story.body} />
      </FlexBox>
    </Container>
  ) : null;
}
