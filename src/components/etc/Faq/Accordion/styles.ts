import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  margin: 10px;
`;

const Header = styled.div`
  color: #0088cc;
`;

const Title = styled.div`
  display: flex;
  min-width: 260px;
  border-left: 3px solid #f7f7f7;
  background: #f7f7f7;
  border-radius: 5px;
  border-left-color: #0088cc;
  border-right-color: #0088cc;
  font-weight: 600;
  padding: 12px 20px 12px 15px;
  cursor: pointer;
  user-select: none;
  span {
    margin-left: auto;
  }
`;

const Contents = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.15s ease, background-color 0.15s ease;
`;

const Content = styled.div`
  padding: 0.1px;
`;

export { Container, Header, Title, Contents, Content };
