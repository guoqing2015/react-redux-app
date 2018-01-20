import SectionBox from './SectionBox';
import {SectionBoxActiveCss} from './SectionBox';

export default SectionBox.extend`
  margin-top: 0.5rem;


  &:active {
    ${SectionBoxActiveCss}
  }
  
  a {
  color: #333;
  }
`;

