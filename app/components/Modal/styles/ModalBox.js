import styled from 'styled-components';

const ModalBox = styled.div`
  visibility: hidden;
  opacity: 0;
  display: block;
  background: #FFFDF9;
  width: 13.5rem;
  position: absolute;
  z-index: 11000;
  //margin-top: -2.8125rem;
  //margin-left: -6.75rem;
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 0.09375rem;
  -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
  transform: translate3d(-50%, -50%, 0) scale(1.185);
  -webkit-transition-property: -webkit-transform, opacity;
  transition-property: transform, opacity;


  &.modal-in {
    visibility: visible;
    opacity: 1;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
  }

  &.modal-out {
    visibility: visible;
    opacity: 0;
    z-index: 10999;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
`;

export default ModalBox;
