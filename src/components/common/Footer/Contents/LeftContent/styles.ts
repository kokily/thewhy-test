import styled from 'styled-components';
import { media } from '@/styles';

// Styles
const LeftContainer = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  ${media.small} {
    display: inline-block;
    flex: none;
    max-width: 370px;
    margin-bottom: 1.25rem;
  }
`;

const LeftTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02rem;
  line-height: 18px;
  margin: 0 0 14px 0;
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  text-align: left;
`;

const LeftLead = styled.p`
  &.rep {
    font-size: 29px;
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 20px;
    color: #fff;
  }
  color: #777;
  margin: 0 0 10px;
  text-align: left;
`;

const LeftList = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;
`;

const LeftItem = styled.li`
  position: relative;
  line-height: 24px;
  margin-bottom: 0.25rem !important;
  padding-top: 5px;
  padding-left: 20px;
  svg {
    position: absolute;
    top: 10px;
    left: -2px;
  }
  p {
    word-break: keep-all;
  }
`;

const LeftIconsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    margin-right: 0.25rem;
  }
`;

const LeftIcon = styled.div`
  width: 36px;
  height: 36px;
  transition: 0.2s all;
  background-repeat: no-repeat;
  background-size: cover;
  &.youtube {
    background-image: url('/svg/Youtube_off.svg');
    &:hover {
      background-image: url('/svg/Youtube_on.svg');
    }
  }
  &.naver {
    background-image: url('/svg/Naver_off.svg');
    &:hover {
      background-image: url('/svg/Naver_on.svg');
    }
  }
`;

export {
  LeftContainer,
  LeftTitle,
  LeftLead,
  LeftList,
  LeftItem,
  LeftIconsBox,
  LeftIcon,
};
