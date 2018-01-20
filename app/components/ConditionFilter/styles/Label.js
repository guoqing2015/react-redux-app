import styled from 'styled-components';

export default styled.label`
display: inline-block;
float: left;
width: 22%;
background-color: #f0f1f2;
border-radius: 0.2rem;
// padding: .1rem .15rem 0;
margin: 0 .25rem .25rem 0;
height: 1.6rem;
line-height: 1.6rem;
text-align: center;
font-size: .6rem;

&.active {
	  background-color: #e6f7ff;
    color: #0ea3f5;
    border: 1px solid #26aaf2
}
`;

