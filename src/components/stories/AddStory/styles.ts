import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: fadeIn 0.5s forwards;
`;

const EditorBox = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Contents = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const TagsBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ThumbnailBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 2.2rem;
`;

export { Container, EditorBox, Contents, TagsBox, ThumbnailBox };
