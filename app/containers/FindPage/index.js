import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import Slider from 'react-slick';
import {createStructuredSelector} from 'reselect';
//import {Link} from 'react-router-dom';
import cx from 'classnames';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {isEmpty, isMobile, isZip} from 'utils/validation';

import Chartist from 'chartist';
import CopyRight from 'components/CopyRight';
import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Toggle from 'components/Toggle';

import PageContent from './styles/PageContent';
import MenuWrap from './styles/MenuWrap';
import Ul from './styles/Ul';
import Li from './styles/Li';
import MenuLink from './styles/MenuLink';
import IconWrap from './styles/IconWrap';
import Input from './styles/Input';


import {queryAdlist} from './modules/actions';
import {makeSelectLoading, makeSelectError, makeSelectAdList} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';

import {examAnalysis, practiceAnalysis} from '../../redux/modules/Chart/modules/actions';
import {makeSelectExamAnalysisData, makeSelectPracticeAnalysisData} from '../../redux/modules/Chart/modules/selectors';

import {app} from 'setting';

import './index.css'

export class FindPage extends React.PureComponent {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      userAddress: this.props.userAddress
    };

    this.renderAdList = this.renderAdList.bind(this);
    this.renderMenu = this.renderMenu.bind(this);

    this.analysis = this.analysis.bind(this);
    this.drawChart = this.drawChart.bind(this);

  }

  componentDidMount() {
    const {adList} = this.props;
    if(!adList) {
      this.props.queryAdlist();
    }

    // 获取类型
    this.analysis();
  }

  componentWillReceiveProps(nextProps) {
    if( !this.props.examAnalysisData && nextProps.examAnalysisData) {
      this.drawChart(nextProps.examAnalysisData);
    }
  }

  /**
   * 获取折线图数据 
   **/
  analysis() {
    const param = {
      "userid":this.props.user.userid,
      "projectcode": "",
      "categorycode": "",
      "itemcode": "",
      "subitemcode": "",
      "startdate": "",
      "enddate": "",
    };
    this.props.examAnalysis(param);
  }

  /**
   * 画折线图
   **/
  drawChart(data) {
    let content = data;
    let labels = [];
    let seriesValue = [];
    content.forEach((item, index) => {
      labels.push(index);
      seriesValue.push(item.answerscore);
    });
    new Chartist.Line('.find-ct-chart', {
      labels,
      series: [
        seriesValue
      ]
    }, {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    });
  }


  /**
   * 广告
   */
  renderAdList() {
    const {adList} = this.props;
    if (!adList || adList.length == 0) {
      return
    }

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: null,
      prevArrow: null
    }
    return (

        <Slider {...settings}>
          {

            adList.map((item, index) => (
              <div key={`ad-${index}`}>
                <a href={item.httplink}>
                  <img src={item.resourceurl} title={item.adname} />
                </a>
              </div>
            ))
          }
        </Slider>
    )

  }


  /**
   * 菜单
   */
  renderMenu() {
    return (
      <MenuWrap>
        <Ul>
          <Li>
            <MenuLink to={"/exam-list"}>
              <IconWrap>
                <Icon className="iconfont icon-ceshi" size="1.3rem" color="#3D98FF" />
              </IconWrap>
              <span>测试</span>
            </MenuLink>
          </Li>
          <Li>
            <MenuLink to={"/errancy"}>
              <IconWrap>
                <Icon className="iconfont icon-cuotikuicon" size="1.3rem" color="#3D98FF"  />
              </IconWrap>
              <span>错题库</span>
            </MenuLink>
          </Li>
          <Li>
            <MenuLink to={"/read-list"}>
              <IconWrap>
                <Icon className="iconfont icon-yuedu" size="1.3rem" color="#3D98FF"  />
              </IconWrap>
              <span>阅读</span>
            </MenuLink>
          </Li>
          <Li>
            <MenuLink to={"/chart"}>
              <IconWrap>
                <Icon className="iconfont icon-statistics" size="1.3rem" color="#3D98FF"  />
              </IconWrap>
              <span>统计</span>
            </MenuLink>
          </Li>
          <Li>
            <MenuLink to={"/member"}>
              <IconWrap>
                <Icon className="iconfont icon-wode1" size="1.5rem" color="#3D98FF" />
              </IconWrap>
              <span>我的</span>
            </MenuLink>
          </Li>
        </Ul>

      </MenuWrap>

    )
  }

  render() {
    const {loading, examAnalysisData} = this.props;
    const {modal, user, userAddress} = this.state;


    return (
      <div>
        <Helmet>
          <title>发现</title>
          <meta name="description" content="发现"/>
        </Helmet>
        <PageContent>
          {this.renderAdList()}
          {this.renderMenu()}

          {/*{examAnalysisData &&*/}
          <div className="find-ability">
            <h3>能力曲线</h3>
            <div className="find-ct-chart-box">
              <div className="find-ct-chart"></div>
            </div>
          </div>
          {/*}*/}

          <CopyRight>©2018 苏州悟本信息科技有限公司 版权所有</CopyRight>

        </PageContent>

        <ToastContainer />
        <Loader active={loading}/>
        <Modal {...modal} close={
          () => {
            this.setState({modal: {...this.state.modal, isOpen: false}})
          }
        }></Modal>

      </div>
    );
  }
}

FindPage.propTypes = {
  adList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  adList: makeSelectAdList(),
  examAnalysisData: makeSelectExamAnalysisData(),
  practiceAnalysisData: makeSelectPracticeAnalysisData(),
});


export function mapDispatchToProps(dispatch) {
  return {
    queryAdlist: () => {
      dispatch(queryAdlist());
    },
    examAnalysis: (param) => {
      dispatch(examAnalysis(param));
    },
    practiceAnalysis: (param) => {
      dispatch(practiceAnalysis(param));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'find', reducer});
const withSaga = injectSaga({key: 'find', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(FindPage);
