import styled from 'styled-components';
import NoNoticePic from '!file-loader?name=[name].[ext]!../img/no_notice.png';

export default styled.div`
  width: 5.8rem;
  height: 5.8rem;
  background: url(${NoNoticePic}) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0.3rem;
`;

