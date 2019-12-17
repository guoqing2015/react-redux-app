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
    let {loading, cms} = this.props;
    cms = [
      {
        contentid: 1,
        contenttitle: '官方通知：2020年雅思考试时间发布',
        createtime: '2018-01-01',
        hits: 20,
        summary: '雅思官网于2019年12月6日发布了2020年雅思考试、UKVI雅思考试日期，报名截止日期、准考证打印日期和成绩单寄送日期！对于要出国留学的同学们来说，关注新一年雅思考试时间尤为重要！接下来就让我们一起来看看2020年雅思考试具体时间安排吧！',
        description: `2020年雅思考试及用于英国签证及移民的雅思考试费用有所调整，如报考2020年1月1日后举行的考试，考生需按调整后的金额支付相关考试费用。调整后的考试费用如下：

        　　· 雅思考试费(含税金额)：2,170元人民币
        
        　　· 用于英国签证及移民的雅思考试费(含税金额)：2,220元人民币
        
        　　截至目前，雅思考试在中国大陆地区43个城市共设有94个考场，考生可登录中国教育部考试中心雅思报名网站IELTS.NEEA.CN 或 IELTS.NEEA.EDU.CN查看具体日期和考场安排，并进行在线报名。
        
        　　以上就是本站为大家同步分享的2020年雅思考试时间安排相关信息，了解更多雅思报考常见问题、雅思考试费用调整、雅思历年真题等内容，请及时关注智课网雅思考试频道！`
      }
    ]

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
