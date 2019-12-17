import styled from 'styled-components';

export default styled.div`
    position: absolute;
     bottom: -4.9rem;
    height: 6.4rem;
    
    
    // bottom: -1.9rem;
    // height: 2.4rem;
    // line-height: 2.4rem;
    vertical-align: middle;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 0.6rem 0.6rem 0 0;
    // padding-left: 5.15rem;
    overflow: hidden;

    &:before {
    position: absolute;
    left: 0.8rem;
    right: 0.8rem;
    bottom: 0;
    content: '';
    height: 0.05rem;
    background: #efefef;
    }
`;

