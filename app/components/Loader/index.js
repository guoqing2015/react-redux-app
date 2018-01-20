import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoaderWrap from './styles/LoaderWrap';
import LoaderImg from './styles/LoaderImg';

export default class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isLoading: props.isLoading,
    };
  }

  static PropTypes = {
    active: PropTypes.bool,
    text: PropTypes.string
  }

  static defaultProps = {
    active: false,
    text: '正在加载...'
  }

  componentWillReceiveProps(nextProps) {
    //if (nextProps.isLoading === this.props.isLoading) return;
    //
    //this.setState({isLoading: nextProps.isLoading})
  }

  render() {
    const {active, text, ...containerProps} = this.props;
    // return <div
    //   dangerouslySetInnerHTML={
    //     { __html: svg }
    //   }
    // />

    if(active) {
      return (
        <LoaderWrap { ...containerProps }>
          <LoaderImg />
          {text}
          {this.props.children}
        </LoaderWrap>
      );
    } else {
      return null;
    }

  }

}
