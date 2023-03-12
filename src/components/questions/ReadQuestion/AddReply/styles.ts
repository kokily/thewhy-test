import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  textarea {
    border-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export { Container, Box, ButtonBox };
