import type { Question } from '@prisma/client';
import { FaUserAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { InfoContainer, InfoContents, InfoItem } from './styles';

interface Props {
  question: Question;
}

export default function QuestionInfo({ question }: Props) {
  return (
    <InfoContainer>
      <h3>작성자</h3>
      <InfoContents>
        <InfoItem>
          <FaUserAlt />
          이름 <span>{question.username} 님</span>
        </InfoItem>
        <InfoItem>
          <FaPhone />
          전화번호 <span>{question.phone}</span>
        </InfoItem>
        <InfoItem>
          <MdEmail />
          이메일 <span>{question.email}</span>
        </InfoItem>
      </InfoContents>
    </InfoContainer>
  );
}
