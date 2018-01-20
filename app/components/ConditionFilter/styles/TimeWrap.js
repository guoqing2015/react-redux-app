import styled from 'styled-components';

export default styled.div`
  padding: 0 1rem 0.5rem;
  
  .input-wrap {
      border: 1px solid #B7B7B7;
      border-radius: 0.2rem;
      position: relative;
      height: 1.75rem;
      line-height: 1.75rem;
      
      span {
        color: #C3C3C3;
        padding-left: 0.25rem;
      }
      
      input {
		    padding-left: 0.25rem;
        width: 100%;
        height: 100%;
        // background: green;
        position: absolute;
        top: 0;
        left: 0;
        right: 0
        bottom:0;
      }
  }
  
  .line {
    margin: 0 0.25rem;
    color: #B7B7B7;
  }
`;

