import styled from 'styled-components';

 const UiMask = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 998;
    display: ${props => props.isShow ? 'block' : 'none'};
`;

export default UiMask;
