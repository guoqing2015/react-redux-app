import styled from 'styled-components';

const FlexBox = styled.div`
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex
`;


export const FlexBoxAlignCenter = FlexBox.extend`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

// export FlexBoxAlignCenter;

export default FlexBox;
