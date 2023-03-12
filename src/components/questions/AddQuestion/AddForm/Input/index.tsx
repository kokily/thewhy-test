import type { ChangeEvent } from 'react';
import { Container } from './styles';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  require?: boolean;
}

export default function Input({ ...rest }: Props) {
  return (
    <Container
      type={rest.type}
      name={rest.name}
      value={rest.value}
      onChange={rest.onChange}
      required={rest.require}
    />
  );
}
