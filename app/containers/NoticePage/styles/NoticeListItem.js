import styled from 'styled-components';

export default styled.li`
  background: #ffffff;
  margin-top: 0.5rem;

  

   &.read h3, &.read div{
     color: #D5D5D8!important;
   }

   &.unread h3{
     padding-right: 1rem;
     position: relative;
   }

   &.unread h3:after{
    content: "";
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 0.3rem;
    background-color: #FF3B30;
    position: absolute;
    right: 0.4rem;
    top: 0.2rem;
   }
  
`;

