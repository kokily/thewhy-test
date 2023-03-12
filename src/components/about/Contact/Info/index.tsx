import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { Container, FlexBox, Content, Title } from './styles';

export default function Info() {
  return (
    <Container>
      <FlexBox>
        <Title>
          <strong>우리</strong>에게 연락주세요
        </Title>

        <Content>
          <li>
            <IoLocationOutline />
            <strong>주소: </strong>
            경기도 남양주시 다산중앙로19번길 25-23, 에프508호
          </li>

          <li>
            <FaPhone />
            <strong>전화: </strong>
            050-5055-7221
          </li>

          <li>
            <MdEmail />
            <strong>이메일: </strong>
            thewhy@thewhy.kr
          </li>
        </Content>
      </FlexBox>

      <FlexBox>
        <Title>
          <strong>영업</strong> 시간
        </Title>

        <Content>
          <li>
            <BiTimeFive />
            월요일 ~ 금요일: 10:00 ~ 19:00
          </li>

          <li>
            <BiTimeFive />
            토/일/공휴일: 휴무
          </li>
        </Content>
      </FlexBox>
    </Container>
  );
}
