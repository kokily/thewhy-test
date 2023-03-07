import EditorBody from '@/components/common/Editor/EditorBody';
import EditorFooter from '@/components/common/Editor/EditorFooter';
import EditorTitle from '@/components/common/Editor/EditorTitle';
import { Container, EditorBox, Wrapper } from './styles';
import useAddNotice from './useAddNotice';

export default function AddNotice() {
  const addNoticeHooks = useAddNotice();

  return (
    <Container>
      <EditorBox>
        <Wrapper>
          <EditorTitle
            placeholder="제목을 입력하세요"
            value={addNoticeHooks.title}
            onChange={addNoticeHooks.onChangeTitle}
          />

          <EditorBody
            body={addNoticeHooks.body}
            onChangeBody={addNoticeHooks.onChangeBody}
          />
        </Wrapper>

        <EditorFooter
          onBack={addNoticeHooks.onBack}
          onSubmit={addNoticeHooks.onAddNotice}
        />
      </EditorBox>
    </Container>
  );
}
