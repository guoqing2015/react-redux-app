import styled, { css } from 'styled-components';

export const SectionBoxCss = css`
  height: 2.2rem;
  line-height: 2.2rem;
  float: left;
  width: 100%;
  background: #ffffff;
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
`;

export const SectionBoxActiveCss = css`
  background-color: #f5f5f5;
`;


export default styled.div`
  ${SectionBoxCss}


`;

