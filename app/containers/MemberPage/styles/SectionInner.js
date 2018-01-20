import styled from 'styled-components';
import {SectionBoxActiveCss} from './SectionBox';

export default styled.div`
  width: 50%;
  float: left;
  text-align: center;
  position: relative;

   &:active {
    ${SectionBoxActiveCss}
  }
  
a {
  color: #333;
  }
`;

