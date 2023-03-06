import type { KeyboardEvent, SyntheticEvent, ChangeEvent } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Container, Input } from './styles';

interface Props {
  mode: string;
  search: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & SyntheticEvent) => void;
  onSearch: (e: SyntheticEvent) => void;
}

export default function Search({ ...rest }: Props) {
  return (
    <Container>
      <Input
        type="text"
        name="search"
        value={rest.search}
        onChange={rest.onChangeSearch}
        onKeyPress={rest.onKeyPress}
        placeholder={`${rest.mode} 검색`}
      />

      <a onClick={rest.onSearch}>
        <BiSearchAlt />
      </a>
    </Container>
  );
}
