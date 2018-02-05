import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import Waypoint from 'react-waypoint';
import Chartist from 'chartist';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {InputCheckBox, InputRadio} from 'components/Input';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Inputs from 'components/HighOrderComponent/Inputs';
import Button from 'components/Button';
import Category from 'containers/Category';

//import {queryProject, querySecondCategory} from '../../redux/modules/Category/modules/actions';
//import {makeSelectFirstCategory, makeSelectSecondCategory} from '../../redux/modules/Category/modules/selectors';
import {examAnalysis, practiceAnalysis} from '../../redux/modules/Chart/modules/actions';
import {makeSelectExamAnalysisData, makeSelectPracticeAnalysisData, makeSelectLoading, makeSelectError} from '../../redux/modules/Chart/modules/selectors';

import './index.scss';
//import "chartist/_my-chartist-settings.scss";


class ChartPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      //startDate: "",
      //endDate: ""
    };

    this.analysis = this.analysis.bind(this);
    this.drawChart = this.drawChart.bind(this);
    this.getProjectcode = this.getProjectcode.bind(this);
    this.getCategorycode = this.getCategorycode.bind(this);
    this.getItemcode = this.getItemcode.bind(this);
    this.getSubitemcode = this.getSubitemcode.bind(this);
  }

  componentDidMount() {
    // 获取类型
    this.analysis();
  }

  componentWillReceiveProps(nextProps) {

    if( !this.props.examAnalysisData && nextProps.examAnalysisData) {
      this.drawChart(nextProps.examAnalysisData);
    }

    if( (!this.props.practiceAnalysis && nextProps.practiceAnalysis) ) {
      this.drawChart(nextProps.practiceAnalysis);
    }
  }


  getProjectcode() {
    const { firstCategory, secondCategory, thirdCategory, fourthCategory } = this.refs.categoryComponent.selector.props;
    if(!firstCategory) return "";
    let projectcode = [];
    firstCategory.forEach((v) => {
      if(v.checked) {
        projectcode.push(v.dictcode)
      }
    })
    return projectcode.join(',');
  }

  getCategorycode() {
    const { firstCategory, secondCategory, thirdCategory, fourthCategory } = this.refs.categoryComponent.selector.props;
    if(!secondCategory) return "";
    let categorycode = [];
    secondCategory.forEach((v) => {
      if(v.checked) {
        categorycode.push(v.dictcode)
      }
    })
    return categorycode.join(',');
  }

  getItemcode() {
    const { firstCategory, secondCategory, thirdCategory, fourthCategory } = this.refs.categoryComponent.selector.props;
    console.log(thirdCategory)
    if(!thirdCategory) return "";
    let itemcode = [];
    thirdCategory.forEach((v) => {
      if(v.checked) {
        itemcode.push(v.itemcode)
      }
    })
    return itemcode.join(',');
  }

  getSubitemcode() {
    const { firstCategory, secondCategory, thirdCategory, fourthCategory } = this.refs.categoryComponent.selector.props;
    if(!fourthCategory) return "";
    let subitemcode = [];
    fourthCategory.forEach((v) => {
      if(v.checked) {
        subitemcode.push(v.itemcode)
      }
    })
    return subitemcode.join(',');
  }


  /**
   * 获取折线图数据 
   **/
  analysis() {
    if(!this.props.inputs) return;
    const {startDate, endDate, chartType} = this.props.inputs;
    const param = {
      "userid":this.props.user.userid,
      "projectcode": this.getProjectcode(),
      "categorycode": this.getCategorycode(),
      "itemcode": this.getItemcode(),
      "subitemcode": this.getSubitemcode(),
      "startdate": startDate,
      "enddate": endDate
    };
    console.log(JSON.stringify(param,2,2));
    if (chartType == '1') {
      this.props.examAnalysis(param);
    } else if(chartType == '2') {
      this.props.practiceAnalysis(param);
    }
  }

  /**
   * 画折线图
   **/
  drawChart(data) {
    let content = data;
    let labels = [];
    let seriesValue = [];
    content.forEach((item, index) => {
      labels.push(index+1);
      seriesValue.push(item.scorerate);
    });
    new Chartist.Line('.ct-chart', {
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


  render() {
    const {loading, error, list, project, category,  inputs, handleChange} = this.props;
    //const {startDate, endDate} = this.state;

    //console.log(project);
    //console.log(inputs);

    const listProps = {
      loading,
      error,
      list,
    };

    return (
      <div>
        <Helmet>
          <title>统计</title>
          <meta name="description" content="统计"/>
        </Helmet>
        <section className="chart-page">


          <div className="chart-condition">
            <div className="chart-condition__item border-bottom">
              <FlexBoxAlignCenter>
                <div className="chart-condition__title hidden">类型：</div>
                <div className="chart-condition__content">
                  <FlexBoxAlignCenter>
                    <InputRadio id="chartType_ceshi" name="chartType" value="1" onChange={handleChange} checked={inputs.chartType == '1'}/>
                    <label htmlFor="chartType_ceshi" >测试</label>
                  </FlexBoxAlignCenter>
                </div>
                <div className="chart-condition__content">
                  <FlexBoxAlignCenter>
                    <InputRadio id="chartType_linaxi" name="chartType"  value="2" onChange={handleChange} checked={inputs.chartType == '2'}/>
                    <label htmlFor="chartType_linaxi">练习</label>
                  </FlexBoxAlignCenter>
                </div>
              </FlexBoxAlignCenter>
            </div>


            <Category ref="categoryComponent" />

            <div className="chart-condition__item border-bottom">
              <FlexBoxAlignCenter className="check-wrap">
                <div className="chart-condition__title">时间：</div>
                <Flex className="date-input-wrap">
                  {
                    !inputs.startDate && <span>选择开始时间</span>
                  }
                  <input type="date" name="startDate" placeholder="开始时间" value={inputs.startDate} onChange={handleChange} />
                </Flex>
                <div className="line">
                  ——
                </div>
                <Flex className="date-input-wrap">
                  {
                    !inputs.endDate && <span>选择结束时间</span>
                  }
                  <input type="date" name="endDate" placeholder="结束时间" value={inputs.endDate} onChange={handleChange} />
                </Flex>
              </FlexBoxAlignCenter>
            </div>
          </div>

          <div className="chart-search">
            <button  className="chart-search-btn" onClick={this.analysis}>生成曲线</button>
          </div>

          <div className="ct-chart-box">
            <div className="ct-chart"></div>
          </div>
        </section>
      </div>
    );
  }
}

ChartPage.propTypes = {
  //loading: PropTypes.bool,
  //error: PropTypes.oneOfType([
  //  PropTypes.object,
  //  PropTypes.bool,
  //]),
  examAnalysisData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  //project: makeSelectFirstCategory(),
  //category:makeSelectSecondCategory(),
  examAnalysisData: makeSelectExamAnalysisData(),
  practiceAnalysisData: makeSelectPracticeAnalysisData(),

});


export function mapDispatchToProps(dispatch) {
  return {
    //queryProject: (param) => {
    //  dispatch(queryProject(param));
    //},
    //querySecondCategory: (param) => {
    //  dispatch(querySecondCategory(param));
    //},
    examAnalysis: (param) => {
      dispatch(examAnalysis(param));
    },
    practiceAnalysis: (param) => {
      dispatch(practiceAnalysis(param));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  compose(
    Inputs
  )(ChartPage)
);

