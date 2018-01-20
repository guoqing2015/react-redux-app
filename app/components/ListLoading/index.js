import React, {Component} from 'react';
import PropTypes from 'prop-types';
import svg from './svg/loading-spokes.svg';
import './index.css';

export default class ListLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: props.isLoading,
    };
  }

  static PropTypes = {
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    isLoading: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading === this.props.isLoading) return;

    this.setState({isLoading: nextProps.isLoading})
  }

  render() {
    const {isLoading, ...containerProps} = this.props;
    // return <div
    //   dangerouslySetInnerHTML={
    //     { __html: svg }
    //   }
    // />

    // if (this.state.isLoading) {
    return (
      <div { ...containerProps } className="loading">
        <img src={svg} />
        <span>加载中</span>
      </div>
    );
    // } else {
    //   return null;
    // }

  }

}
