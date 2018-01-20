import styled from 'styled-components';


const StyleIcon = styled.i.attrs({

  // or we can define dynamic ones
  // font-size: props => props.size || '1em',
})`

  font-size: ${props => props.size || '1rem'};
	margin: ${props => props.margin || 0};
	padding: ${props => props.padding || 0};
	color: ${props => props.color || '#333'};
  vertical-align: middle;
`;

export default StyleIcon;
