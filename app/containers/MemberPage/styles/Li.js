import styled from 'styled-components';
import {SectionBoxCss, SectionBoxActiveCss} from './SectionBox';

export default styled.li`
  ${SectionBoxCss}
  // padding: 0 0.5rem 0 0.25rem;

  &:active {
    ${SectionBoxActiveCss}
  }

  a {
    color: #333;
  }
`;

