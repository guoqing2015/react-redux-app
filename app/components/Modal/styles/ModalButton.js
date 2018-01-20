import styled from 'styled-components';

const ModalButton = styled.div`
    width: 100%;
    color: #099fde;
    font-size: 0.7rem;
    text-align: center;
    display: block;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-radius: 0.0625rem;

    &:nth-of-type(2) {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

export default ModalButton;
