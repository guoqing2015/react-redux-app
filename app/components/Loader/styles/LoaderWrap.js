import styled from 'styled-components';

const LoadingWrap = styled.div`
    background: rgba(0,0,0,.7);
    text-align: center;
    min-height: 1.2rem;
    color: #fff;
    width: 5.5rem;
    position: absolute;
    left: 50%;
    margin-left: -2.75rem;
    top: 50%;
    margin-top: -0.6rem;
    z-index: 101;
    padding: 0.4rem;
    border-radius: 0.1rem;
    font-size: 0.7rem;
    line-height: 1.2rem;
`;

export default LoadingWrap;
