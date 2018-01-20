import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import SubjectTag from 'components/SubjectTag';

import './index.scss';


import {queryCms} from '../../redux/modules/Cms/modules/actions';
import { makeSelectCms, makeSelectLoading, makeSelectError } from '../../redux/modules/Cms/modules/selectors';



export class AboutPage extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.queryCms({
      "categorycode": "aboutus",
      "status": 4 //4：已发布
    });
  }

  componentWillReceiveProps(nextProps) {

  }



  render() {
    const {loading, cms} = this.props;

    return (
      <div>
        <Helmet>
          <title>关于</title>
          <meta name="description" content="关于"/>
        </Helmet>

        <Loader active={loading}/>

        <div className="about">
          {
            cms && cms[0] &&

              <div className="about__content">
                <div dangerouslySetInnerHTML={{ __html: cms[0].description }} />
              </div>
          }
        </div>



      </div>
    );
  }
}

AboutPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  cms: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  queryCms: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  cms: makeSelectCms()
});


export function mapDispatchToProps(dispatch) {
  return {
    queryCms: (param) => {
      dispatch(queryCms(param))
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);


