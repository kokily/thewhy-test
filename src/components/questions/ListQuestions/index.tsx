import Link from 'next/link';
import QuestionsTable from './QuestionTable';
import Search from '@/components/common/Search';
import { Button, Container, Contents, SearchBox } from './styles';
import useListQuestions from './useListQuestions';

export default function ListQuestions() {
  const questionHooks = useListQuestions();

  return (
    <Container>
      <Contents>
        <SearchBox small={questionHooks.isMobile}>
          {!questionHooks.isMobile && questionHooks.isAdmin && (
            <Link href="/questions/add">
              <Button>글 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={questionHooks.search}
            onChangeSearch={questionHooks.onChangeSearch}
            onSearch={questionHooks.onSearch}
            onKeyPress={questionHooks.onKeyPress}
          />
        </SearchBox>

        <QuestionsTable
          questions={questionHooks.questions}
          onReadQuestion={questionHooks.onReadQuestion}
        />
      </Contents>
    </Container>
  );
}
