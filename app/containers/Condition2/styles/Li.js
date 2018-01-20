import styled from 'styled-components';

const Li = styled.li`
  background: #ffffff;
  text-align: left;
  padding: 0 0.75rem;
  min-height: 2.25rem;
  // line-height: 2.25rem;
  width: 100%;
  float: left;
  position: relative;
  
  & label:nth-child(4) {
    margin-right: 0;
  }
  
  &.filter-title {
    min-height: 1.75rem;
    line-height: 1.75rem;
  }
  
`;

export default Li;
