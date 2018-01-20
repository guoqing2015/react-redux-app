import React from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';
import EventManager from "./util/EventManager";
import { SHOW_TOAST, HIDE_TOAST } from './constant';

export default class extends React.Component {
  static propTypes = {
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 1600,
  }

  state = {
    isNotifying: false
  }

  content = null

  componentDidMount() {
    EventManager
      .on(SHOW_TOAST, (content, options) => this.showToast(content, options))
      .on(HIDE_TOAST, () => this.hideToast());
  }

  componentWillUnmount() {
    //EventManager.off(SHOW_TOAST);
    //EventManager.off(HIDE_TOAST);
  }


  showToast(content, options) {
    if(this.state.isNotifying) return;


    const closeToast = () => this.hideToast(); //这里需要使用箭头函数，防止this指向出现问题

    const toastOptions = {
      timeout: options.timeout || this.props.timeout,
      text: content || this.props.text,
      closeToast: closeToast
    };


    this.content = this.makeToast(toastOptions)

    this.setState({
      isNotifying: true
    });


    // setTimeout(() => {
    //   this.hideToast();
    // }, toastOptions.timeout)

  }

  makeToast(options) {
    return (
      <Toast {...options} >
      </Toast>
    );
  }


  hideToast() {
    this.content = null;
    this.setState({
      isNotifying: false
    });
  }



  render() {
    const {isNotifying} = this.state;

    return (
      <div>
        { this.content }
      </div>
    );
  }
}
