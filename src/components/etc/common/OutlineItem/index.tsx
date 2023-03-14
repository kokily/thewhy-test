import { FcCheckmark } from 'react-icons/fc';
import { FirstPane, Container, Title, SecondPane } from './styles';

interface Props {
  body: OutlineType;
}

export default function OutlineItem({ body }: Props) {
  return (
    <Container>
      <Title>{body.title}</Title>

      {body.first &&
        body.first.length > 0 &&
        body.first.map((obj) => (
          <FirstPane key={obj.id}>
            <span>
              <FcCheckmark /> <span>{obj.firstTitle}</span>
            </span>
            {obj.firstChild &&
              obj.firstChild.length > 0 &&
              obj.firstChild.map((second) => (
                <SecondPane key={second.secondTitle}>
                  <p className="second_title">{second.secondTitle}</p>
                  {second.secondChild &&
                    second.secondChild.length > 0 &&
                    second.secondChild.map((child) => (
                      <pre key={child} className="second_child">
                        {child}
                      </pre>
                    ))}
                </SecondPane>
              ))}
          </FirstPane>
        ))}
    </Container>
  );
}
