import styled from 'styled-components';
import { media } from '@/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  font-family: '윤고딕320', sans-serif;
  ${media.small} {
    padding-left: 20px;
    padding-right: 20px;
  }
  .concul {
    margin-top: 1.4rem;
    text-align: center;
    color: #777;
    text-decoration: underline;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 300;
  color: #777;
  word-break: keep-all;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  .date {
    font-size: 0.9rem;
    margin-left: auto;
    margin-bottom: 1.5rem;
  }
`;

const Hr = styled.hr`
  width: 100%;
  background: rgba(0, 0, 0, 0.06);
  border: 0;
  height: 1px;
  margin: 22px 0;
`;

const Footer = styled.div`
  margin-top: 1.4rem;
  text-align: center;
  color: #777;
  text-decoration: underline;
`;

export { Container, Header, Hr, Footer };
