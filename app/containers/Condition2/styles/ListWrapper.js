import styled, { keyframes } from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const fadeInDown = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0)
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
`;


const ListWrapper = styled.div`
     max-height: 80%;
     overflow-y: scroll;
     -webkit-overflow-scrolling: touch;
     position: fixed;
     top: 2.025rem;
     
     left: 0;
     right: 0;
     z-index: 999;
     display: -webkit-box;
     display: flex;
     -webkit-box-orient: vertical;
     flex-direction: column;
     box-shadow: 0 400px 0 400px rgba(0,0,0,.5);
     
     -webkit-animation-name: ${fadeInDown};
     animation-name:  ${fadeInDown};
	   -webkit-animation-duration: .35s;
     animation-duration: .25s;
     -webkit-animation-fill-mode: both;
     animation-fill-mode: both;
`;

export default ListWrapper;
