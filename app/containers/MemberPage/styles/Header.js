import styled from 'styled-components';
import headerBg from '!file-loader?name=[name].[ext]!../img/header_bg.png';


export default styled.div`
    background: #010409 url(${headerBg});
    background-size: 100% 100%;
    height: 7rem;
    width: 100%;
    float: left;
    position: relative;
`;

