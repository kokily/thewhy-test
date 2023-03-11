import Search from '@/components/common/Search';
import Link from 'next/link';
import StoryCard from './StoryCard';
import { Button, Container, StoryHeader, SearchBox } from './styles';
import useListStories from './useListStories';

export default function ListStories() {
  const storiesHooks = useListStories();

  return (
    <Container>
      <StoryHeader>
        <SearchBox small={storiesHooks.isMobile} logged={storiesHooks.isAdmin}>
          {!storiesHooks.isMobile && storiesHooks.isAdmin && (
            <Link href="/stories/add">
              <Button>글 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={storiesHooks.search}
            onChangeSearch={storiesHooks.onChangeSearch}
            onKeyPress={storiesHooks.onKeyPress}
            onSearch={storiesHooks.onSearch}
          />
        </SearchBox>
      </StoryHeader>

      {storiesHooks.stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          onReadStory={storiesHooks.onReadStory}
          onClickTag={storiesHooks.onClickTag}
        />
      ))}
    </Container>
  );
}
