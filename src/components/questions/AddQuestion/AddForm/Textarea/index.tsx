import type { ChangeEvent } from 'react';
import { Container } from './styles';

interface Props {
  body: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Textarea({ body, onChange }: Props) {
  return <Container name="body" value={body} onChange={onChange} rows={10} />;
}
