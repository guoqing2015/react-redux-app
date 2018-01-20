import styled from 'styled-components';

export const FlexBox = styled.div`
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


export const Flex = styled.div`
  -webkit-box-flex:1;
  -webkit-flex:1;
  -ms-flex:1;
  flex:1;
  position: relative;
`;


export default {
  FlexBox,
  FlexBoxAlignCenter,
  Flex
};
