import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ModalBox from './styles/ModalBox';
import ModalTitle from './styles/ModalTitle';
import ModalInner from './styles/ModalInner';
import ModalButtons from './styles/ModalButtons';
import ModalButton from './styles/ModalButton';
import ModalOverlay from './styles/ModalOverlay';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.isOpen,
      hideActive: false
    };

    this.modalOut = this.modalOut.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static PropTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
  }

  static defaultProps = {
    isOpen: false,
  }


  componentWillReceiveProps(newProps) {
    if(this.props.isOpen != newProps.isOpen) {
      this.setState({
        show: newProps.isOpen
      })
    }
  }


  modalOut() {
    this.setState({
      show: false,
      hideActive: true
    });

    setTimeout(() => {
      this.setState({
        hideActive: false
      });
    }, 300)
  }

  handleConfirm() {
    this.modalOut();
    this.props.onConfirm && this.props.onConfirm();
    this.props.close();
  }

  handleCancel() {
    this.modalOut();
    this.props.onCancel && this.props.onCancel();
    this.props.close();
  }

  render() {
    const {show, hideActive} = this.state;
    const {showCancel, title} = this.props;
    return (
      <div>
        <ModalBox className={cx({ 'modal-in': show, 'modal-out': !show && hideActive  })}>

          {
            title &&
            <ModalTitle>
              {title}
            </ModalTitle>
          }
          <ModalInner>
            {this.props.children}
          </ModalInner>
          <ModalButtons>
            {showCancel &&
              <ModalButton onClick={this.handleCancel}>取消</ModalButton>
            }
            <ModalButton onClick={this.handleConfirm}>确定</ModalButton>
          </ModalButtons>

        </ModalBox>
        <ModalOverlay className={cx({ 'modal-overlay-visible': show })}/>
      </div>
    );

  }

}
