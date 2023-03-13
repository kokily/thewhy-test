import Image from 'next/image';
import { Container, Row, Col, List, Item } from './styles';

interface Props {
  list: Array<ListType>;
}

export default function Body({ list }: Props) {
  return (
    <Container>
      {list.map((item, i) => (
        <Row key={i}>
          <Col>
            <Image
              src={`/images/education/${item.img}.png`}
              alt="서비스 커뮤니케이션"
              width={100}
              height={104}
              priority
            />
          </Col>

          <List className={item.end ? 'end' : undefined}>
            {item.list.map((data, j) => (
              <Item key={j}>{data}</Item>
            ))}
          </List>
        </Row>
      ))}
    </Container>
  );
}
