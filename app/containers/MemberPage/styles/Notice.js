import styled from 'styled-components';
import NoticePic from '!file-loader?name=[name].[ext]!../img/notice.png';


export default styled.div`
    display: inline-block;
    background: #010409 url(${NoticePic});
    background-size: 100% 100%;
    height: 0.771875rem;
    width: 0.95rem;
    position: absolute;
    top: 1rem;
    right: 0.75rem;

    // &:after {
    //   content: "";
    //   display: inline-block;
    //   width: 0.3rem;
    //   height: 0.3rem;
    //   border-radius: 0.3rem;
    //   background-color: #FF3B30;
    //   position: absolute;
    //   right: -0.2rem;
    //   top: -0.2rem;
    // }

`;

