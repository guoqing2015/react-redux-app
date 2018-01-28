import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import { Link, CacheLink, Control } from 'react-keeper';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import { app } from 'setting';

import {queryCms} from '../../redux/modules/Cms/modules/actions';
import { makeSelectCms, makeSelectLoading, makeSelectError } from '../../redux/modules/Cms/modules/selectors';

import './index.scss';

export class ReadListPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.detail = this.detail.bind(this);
  }

  componentDidMount() {
    this.props.queryCms({
      "categorycode": "reading",
      "status": 3
    });
  }

  detail(item) {
    sessionStorage.setItem('READ_DETAEL_'+item.contentid, JSON.stringify(item));
    this.props.history.push(
      {
        pathname: '/read-detail/' + item.contentid,
        //search: '?query=abc',
        state: { detail: item }
      }
      //'read-detail', {id: item.contentid}
    );

  }


  render() {
    const {loading, cms} = this.props;

    return (
      <div>
        <Helmet>
          <title>阅读</title>
          <meta name="description" content="阅读"/>
        </Helmet>

        <Loader active={loading}/>

        <section className="read ">
          <ul className="read__list clearfix">
            {
              cms &&
              cms.map((item, index) =>
                (
                    <li className="border-bottom d-flex" key={`read-list-item${index}`} onClick={() => {this.detail(item)}}>
                        <div className="read__img-wrap">
                          <img src={item.imageurl} alt=""/>
                        </div>
                        <div className="col align-self-center">
                          <h2>{item.contenttitle}</h2>
                          <time>{item.createtime}</time>
                          <div className="read__list-number">浏览：{item.hits}次</div>
                        </div>
                  </li>
                )
              )
            }
          </ul>
        </section>



      </div>
    );
  }
}

ReadListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  listCount: PropTypes.number,
  loadList: PropTypes.func,
  initList: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(ReadListPage);

//const withReducer = injectReducer({key: 'readList', reducer});
//const withSaga = injectSaga({key: 'readList', saga});
//
//export default compose(
//  withReducer,
//  withSaga,
//  withConnect
//)(ReadListPage);
