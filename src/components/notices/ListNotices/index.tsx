import Search from '@/components/common/Search';
import Link from 'next/link';
import NoticeContents from './NoticeContents';
import { Button, Container, Contents, SearchBox } from './styles';
import useListNotices from './useListNotices';

export default function ListNotices() {
  const noticesHooks = useListNotices();

  return (
    <Container>
      <Contents>
        <SearchBox small={noticesHooks.isMobile ? true : false}>
          {!noticesHooks.isMobile && noticesHooks.isAdmin && (
            <Link href="/notices/add" passHref={true}>
              <Button>공지 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={noticesHooks.search}
            onChangeSearch={noticesHooks.onChangeSearch}
            onKeyPress={noticesHooks.onKeyPress}
            onSearch={noticesHooks.onSearch}
          />
        </SearchBox>

        <NoticeContents
          notices={noticesHooks.notices}
          onReadNotice={noticesHooks.onReadNotice}
        />
      </Contents>

      <div ref={noticesHooks.setTarget} />
    </Container>
  );
}
