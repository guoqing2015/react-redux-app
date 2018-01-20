import styled from 'styled-components';

const Li = styled.li`
  background: #ffffff;
  text-align: left;
  // padding-left: 0.75rem;
  height: 2.25rem;
  line-height: 2.25rem;
  width: 100%;
  float: left;
  position: relative;
  
  &.active {
    color: #249ace;
  }
  
  &.active:after {
    font-size: 1rem;
    font-family: iconfont;
    content: "\\e627";
    position: absolute;
    right: .5rem;
    top: 0;
    color: #249ace;
	}
	
	> div {
	  height: 100%;
	  padding-left: 0.75rem;
	}
	
	.margin15 {
		padding-left: 0;
	  margin-left: 1.5rem;
	}
`;

export default Li;
