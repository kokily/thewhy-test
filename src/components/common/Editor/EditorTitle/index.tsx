import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { TitleStyle } from './styles';

const EditorTitle = styled(TextareaAutosize)`
  ${TitleStyle}
`;

export default EditorTitle;
