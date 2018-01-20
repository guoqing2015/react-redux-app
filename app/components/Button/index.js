/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './styles/A';
import StyleButton from './styles/StyleButton';
import Wrapper from './styles/Wrapper';

function Button(props) {
  // Render an anchor tag
  // let button = (
  //   <A href={props.href} onClick={props.onClick}>
  //     {Children.toArray(props.children)}
  //   </A>
  // );
  //
  // // If the Button has a handleRoute prop, we want to render a button
  // if (props.handleRoute) {
  //   button = (
  //     <Button onClick={props.handleRoute}>
  //       {Children.toArray(props.children)}
  //     </Button>
  //   );
  // }

  return (
    <Wrapper>
		   <StyleButton onClick={props.onClick}>
        {Children.toArray(props.children)}
      </StyleButton>
    </Wrapper>
  );
}

Button.propTypes = {
  // handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
