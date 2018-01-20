import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Stylesheet {  //此种写样式的方法亦可实现css in js。但比较不便，推荐使用styles-component方式写样式
  get styles() {
    return {
      layerStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(157,157,157,.5)',
        zIndex: 9999
      },
      container: {
        display: 'table',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transition: '0.2s opacity linear',
        'WebkitTransition': '0.2s opacity linear',
        visibility: 'hidden',
        opacity: 0,
        'zIndex': 10000,
        transform: 'translate3d(-50%, -50%, 0)',
        'WebkitTransform': 'translate3d(-50%, -50%, 0)',
      },
      inner: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '0.5rem',
        maxWidth: '16rem',
        borderRadius: '0.2rem',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 0 0.5rem #999999',
        color: '#ffffff',
        wordWrap: 'break-word',
      },
      show: {
        opacity: 1,
        visibility: 'visible'
      },
      hide: {
        opacity: 0,
        visibility: 'hidden'
      }
    };
  }
}

let stylesheet = new Stylesheet();


export default class Toast extends Component {

  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string, PropTypes.element
    ]),
    timeout: PropTypes.number,
    type: PropTypes.string,
    closeToast: PropTypes.func
  };

  state = {
    containerStyle: Object.assign({}, stylesheet.styles.container, stylesheet.styles.hidden),
    layerStyle: stylesheet.styles.layerStyle
  };


  animateState(content, options) {
    let {styles} = stylesheet;

    // Show
    setTimeout(() => {
      this.updateStyle(styles.show);
    }, 0);

    if (this.props.timeout === -1) {
      return;
    }

    setTimeout(() => {
      // this.updateStyle(styles.hide);
      this.props.closeToast();
    }, this.props.timeout);
  }


  updateStyle(stateStyle) {
    this.setState({containerStyle: Object.assign({}, stylesheet.styles.container, stateStyle)});
  }

  componentDidMount() {
    this.animateState();
  }

  render() {
    let {containerStyle, layerStyle} = this.state;
    const { text, closeToast } = this.props;
    return (
      <div>
        <div style={containerStyle} onClick={closeToast}>
          <div style={stylesheet.styles.inner}>
            {text}
          </div>
        </div>
        <div style={layerStyle}></div>
      </div>
    );
  }

}
