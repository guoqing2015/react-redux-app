import styled from 'styled-components';
import Radio from '!file-loader?name=[name].[ext]!./img/radio.png';
import RadioSelected from '!file-loader?name=[name].[ext]!./img/radio_selected.png';
import Checkbox from '!file-loader?name=[name].[ext]!./img/checkbox.png';
import CheckboxChecked from '!file-loader?name=[name].[ext]!./img/checkbox_checked.png';


export const InputRadio = styled.input.attrs({
  type: 'radio',
})`
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  background-image: url(${Radio});
  background-position: center center;
  background-size: 100%;

  &:checked {
    background-image: url(${RadioSelected});
  }
	margin: ${props => props.margin};
	padding: ${props => props.padding};
`;


export const InputCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  background-image: url(${Checkbox});
  background-position: center center;
  background-size: 100%;

  &:checked {
    width: 0.85rem;
    height: 0.85rem;
    margin: 0 0.075rem;
    background-image: url(${CheckboxChecked});
  }
	margin: ${props => props.margin};
	padding: ${props => props.padding};
`;




const Input = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	/* here we use the dynamically computed props */
	margin: ${props => props.margin};
	padding: ${props => props.padding};
`;

export default Input;
