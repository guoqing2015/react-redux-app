import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';


export class Home extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
    };


  }

  componentDidMount() {
    // this.props.history.replace('/user-info');
    // this.props.history.replace('/exercise');
    this.props.history.replace('find');
    // this.props.history.replace('chart');
    // this.props.history.replace('notice');
    // this.props.history.replace('exercise-list');
    // this.props.history.replace('renew');
    // this.props.history.replace('/exam/f6b59f4c-f90d-11e7-a098-00163e08ab65');
    // this.props.history.replace('/pay-success/149082436220180123204401364');
    // this.props.history.replace('/pay-error/333');
  }




  render() {

    return (
      <div>

      </div>
    );
  }
}

export default Home;
