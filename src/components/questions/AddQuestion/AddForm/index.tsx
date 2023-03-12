import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdSubtitles } from 'react-icons/md';
import Button from '@/components/common/Button';
import useAddQuestion from '../useAddQuestion';
import Checkbox from './Checkbox';
import Input from './Input';
import Textarea from './Textarea';
import { ButtonBox, Container, Info, InputGroup } from './styles';

export default function AddForm() {
  const questionHooks = useAddQuestion();

  return (
    <Container>
      <InputGroup>
        <label>
          이름 <span>*</span>
        </label>
        <AiOutlineUser size={20} color="#0c89d1" />
        <Input
          type="text"
          name="username"
          value={questionHooks.username}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <InputGroup>
        <label>
          비밀번호 <span>*</span>
        </label>
        <HiOutlineKey size={20} color="#0c89d1" />
        <Input
          type="password"
          name="password"
          value={questionHooks.password}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <InputGroup>
        <label>연락처</label>
        <IoIosPhonePortrait size={20} color="#0c89d1" />
        <Input
          type="text"
          name="phone"
          value={questionHooks.phone}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <InputGroup>
        <label>이메일</label>
        <HiOutlineMail size={20} color="#0c89d1" />
        <Input
          type="text"
          name="email"
          value={questionHooks.email}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <InputGroup>
        <label>
          제목 <span>*</span>
        </label>
        <MdSubtitles size={20} color="#0c89d1" />
        <Input
          type="text"
          name="title"
          value={questionHooks.title}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <InputGroup>
        <label>
          본문 <span>*</span>
        </label>
        <Textarea
          body={questionHooks.body}
          onChange={questionHooks.onChangeInput}
        />
      </InputGroup>

      <Checkbox
        agree={questionHooks.agree}
        onToggleAgree={questionHooks.onToggleAgree}
      />

      <Info>
        <pre>
          더와이컨설팅은 교육 문의, 서비스 신청 등을 위해 아래와 같이 개인
          정보를 수집, 활용하고 있습니다.
          <br />
          <br />
          1. 수집 항목 및 활용 목적
          <br />
          - 수집항목: 이름, 연락처(선택), 이메일(선택), 교육 주제 및 내용, 교육
          장소
          <br />
          - 활용목적: 서비스 제공, 계약 이행, 요금 결제, 고객 관리
          <br />
          <br />
          2. 보유 및 활용 기간
          <br />- 더와이컨설팅은 개인정보 수집 및 활용 목적이 달성된 후에는 즉시
          해당 정보를 파기합니다.
        </pre>
      </Info>

      <ButtonBox>
        <Button submit onClick={questionHooks.onAddQuestion}>
          전송하기
        </Button>
      </ButtonBox>
    </Container>
  );
}
