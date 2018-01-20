import styled from 'styled-components';

const Triangle = styled.i`
    font-size: 1rem;
    // color: #999;
    vertical-align: middle;
    font-family: iconfont!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.checked ? '#249ace' : '#999999'};
`;

/**
 * 向下的箭头
 */
export const TriangleDown = Triangle.extend`
  &:before {
        content: "\\e606"; 
    }
`;

/**
 * 向上的箭头
 */
export const TriangleUp = Triangle.extend`
  &:before {
        content: "\\e638"; 
    }
`;

