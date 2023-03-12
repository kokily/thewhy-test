import styled from 'styled-components';
import { media } from '@/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    ${media.large} {
      max-width: 760px;
    }

    ${media.medium} {
      height: auto;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
`;

const Title = styled.h4`
  font-family: 윤고딕, sans-serif;
  font-size: 31px;
  font-weight: 600;
  color: rgb(70, 56, 132);
  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 3px solid rgb(51, 154, 240);
    margin: 20px auto;
  }
`;

export { Container, Bottom, Title };
