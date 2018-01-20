import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    visibility: hidden;
    opacity: 0;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;

    &.modal-overlay-visible {
      visibility: visible;
      opacity: 1;
    }
}
`;

export default ModalOverlay;
