import type { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  submit?: boolean;
  back?: boolean;
  red?: boolean;
  onClick?: any;
  children: ReactNode;
}

export default function Button({ ...rest }: Props) {
  const htmlProps = rest as any;

  return (
    <Container
      submit={rest.submit}
      back={rest.back}
      red={rest.red}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {rest.children}
    </Container>
  );
}
