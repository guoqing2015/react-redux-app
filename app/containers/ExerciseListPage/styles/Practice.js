import styled from 'styled-components';
import PracticePic from '!file-loader?name=[name].[ext]!../img/lianxi.png';

export default styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  background:#ffffff url(${PracticePic}) no-repeat;
  background-size: 100% 100%;
  border-radius: 2.4rem;
  
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  
`;

