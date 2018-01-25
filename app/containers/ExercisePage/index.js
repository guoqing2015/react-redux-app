import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import {urls} from 'setting';
import {fromJS, List} from 'immutable';
import moment from 'moment';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import getTimeDuration from '../../utils/getTimeDuration';

import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Button from 'components/Button';
import ExamInfo from 'components/ExamInfo';
import {InputRadio} from 'components/Input';
import Pagination from 'components/Pagination';

import Section from './styles/Section';
import ExamFooter from './styles/ExamFooter';
import ExamNext from './styles/ExamNext';
import ExamLast from './styles/ExamLast';
import ExamContent from './styles/ExamContent';
import ExamQuestion from './styles/ExamQuestion';
import ExamAnwsers from './styles/ExamAnwsers';
import ExamAnwser from './styles/ExamAnwser';
import ExamResult from './styles/ExamResult';
import Label from './styles/Label';
import Blue from './styles/Blue';
import Red from './styles/Red';
import Orange from './styles/Orange';
import Bold from './styles/Bold';
import ExamScore from './styles/ExamScore';
import ExamImg from './styles/ExamImg';
//import AnswerInput from './styles/AnswerInput';


import {queryDetail, buildPractice, submitAnswer} from './modules/actions';
import {makeSelectDetail, makeSelectDetailId, makeSelectLoading, makeSelectError, makeSelectExamResult} from './modules/selectors';
import reducer from './modules/reducer';
import saga from './modules/saga';
import Category from 'containers/Category';
import './index.scss';

import {app} from 'setting';

export class ExercisePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: {},
      step: 1,
      answerinfo: [],
      currentSubjectIndex: 0,
      startTime: 0,
      endTime: 0,
    };

    this.handleRadioAnswerChange = this.handleRadioAnswerChange.bind(this);
    this.handleInputAnswerChange = this.handleInputAnswerChange.bind(this);
    //this.handleDispay = this.handleDispay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goPage = this.goPage.bind(this);
    this.goStep = this.goStep.bind(this);
    this.revise = this.revise.bind(this);

    this.getProjectcode = this.getProjectcode.bind(this);
    this.getCategorycode = this.getCategorycode.bind(this);
    this.getItemcode = this.getItemcode.bind(this);
    this.getSubitemcode = this.getSubitemcode.bind(this);

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.detail && nextProps.detail) {
      let arr = this.state.answerinfo
      const subjectinfo = nextProps.detail.subjectinfo;
      subjectinfo.forEach((item, index) => {
        arr.push({
          subjectid: item.subjectid,
          subjectanswer: "",
          display: index == this.state.currentSubjectIndex ? true : false //默认显示第一个
        });
      })
      this.setState({answerinfo: arr})
    }

    if (!this.props.error && nextProps.error) {
      this.setState({
        modal: {
          isOpen: true,
          children: nextProps.error.errmsg,
        }
      })
    }


    if (!this.props.examResult && nextProps.examResult) {
      this.goStep(4);
    }


    if(!this.props.detailId && nextProps.detailId) {
      this.props.queryDetail({
        practiceid: nextProps.detailId,
      });
    }

    if(!this.props.detail && nextProps.detail) {
      this.setState({
        startTime: new Date().getTime()
      });
      this.setState({
        step: 2
      });
    }

  }


  /**
   * 跳转到第几步
   */
  goStep(num) {
    if(num == 2 && !this.state.startTime) {
      this.props.buildPractice({
        "userid":this.props.user.userid,
        "projectcode": this.getProjectcode(),
        "categorycode": this.getCategorycode(),
        "itemcode": this.getItemcode(),
        "subitemcode": this.getSubitemcode(),
        "subjectnum": this.refs.exersiceSizeInput.value || 0
      });
      return;
    } else if(num == 3) {
      this.setState({
        endTime: new Date().getTime()
      });
    }
    this.setState({
      step: num
    });
  }

  /**
   * 提交答卷
   */
  handleSubmit() {
    const {answerinfo} = this.state;
    var hasNotAnswer = answerinfo.some((v) => (
      v.subjectanswer == ''
    ));


    if (hasNotAnswer) {
      this.setState({
        modal: {
          isOpen: true,
          children: "您还有未做题目，是否继续交卷？",
          showCancel: true,
          onConfirm: () => {
            this.props.submitAnswer({
              userid: this.props.user.userid,
              practiceid: this.props.detail.id,
              answerinfo,
              duration: this.state.endTime - this.state.startTime
            })
          }
        }
      })
    } else {
      this.props.submitAnswer({
        userid: this.props.user.userid,
        practiceid: this.props.detail.id,
        answerinfo,
        duration: this.state.endTime - this.state.startTime
      })
    }
  }

  /**
   * input radio设置value (注意防止状态突变)
   * @param e
   */
  handleRadioAnswerChange(event, questionIndex, answerIndex) {
    let answerinfoCopy = [...this.state.answerinfo];
    answerinfoCopy[questionIndex] = Object.assign({}, answerinfoCopy[questionIndex]);
    answerinfoCopy[questionIndex].subjectanswer = event.target.value;
    this.setState({answerinfo: answerinfoCopy});
  }


  /**
   * input输入框设置value (注意防止状态突变)
   * @param e
   */
  handleInputAnswerChange(event, questionIndex, answerIndex, len) {
    let answerinfoCopy = [...this.state.answerinfo];
    answerinfoCopy[questionIndex] = Object.assign({}, answerinfoCopy[questionIndex]);
    let answerArray = [];
    for (let i = 0; i < len; i++) {
      answerArray.push(this.refs[`answer-${questionIndex}-${i}`].value)
    }
    answerinfoCopy[questionIndex].subjectanswer = answerArray.join(",");
    this.setState({answerinfo: answerinfoCopy});
  }


  /**
   * 跳转到指定题目
   * @param pageNum
   */
  goPage(pageNum) {
    let {currentSubjectIndex} = this.state;
    let {detail} = this.props;
    let answerinfoCopy = [...this.state.answerinfo];
    answerinfoCopy[currentSubjectIndex] = Object.assign({}, answerinfoCopy[currentSubjectIndex]);

    const look = () => {
      answerinfoCopy[currentSubjectIndex].display = false;
      answerinfoCopy[pageNum].display = true;
      this.setState({
        currentSubjectIndex: pageNum
      });
    }

    look();
    this.setState({
      answerinfo: answerinfoCopy,
    });
  }

  /**
   * 跳转到订正页面
   */
  revise() {
    this.props.history.replace('/revise/' + this.props.params.id);
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

  render() {
    const {loading, detail, examResult, match} = this.props;
    const {modal, step, answerinfo, currentSubjectIndex, startTime, endTime} = this.state;
    const isShowLast = currentSubjectIndex != 0;
    const isShowNext = detail && currentSubjectIndex < (detail.subjectinfo.length - 1);

    return (
      <div>
        <Helmet>
          <title>练习</title>
          <meta name="description" content="练习"/>
        </Helmet>

        {/************************************第一步*******************************/}
        {step == 1 &&
        <Section>
          <Category ref="categoryComponent" />
          <div className="exercise-size">
            题数: <input ref="exersiceSizeInput" type="text" />
          </div>
          <Button onClick={()=> {this.goStep(2)}}>我已选好，立即练习</Button>
          {/*<ExamInfo detail={detail} type={1}></ExamInfo>*/}
        </Section>
        }

        {/************************************第二步*******************************/}
        {
          detail && step == 2 &&
          <Section>
            <Pagination pageCount={detail.subjectinfo.length} goPage={this.goPage} isShowLast={isShowLast} isShowNext={isShowNext} initialPage={currentSubjectIndex}></Pagination>
            <ExamContent>
              {
                detail.subjectinfo.map((question, questionIndex) => (
                  (<div key={`question-${questionIndex}`}
                        style={ {display: answerinfo[questionIndex].display ? 'block' : 'none'} }>
                    <ExamQuestion className="border-bottom">
                      <div>
                        {questionIndex + 1}. {question.subjectname}
                      </div>
                      {question.subjectpic &&
                      <div>
                        <ExamImg src={question.subjectpic} alt=""/>
                      </div>
                      }
                    </ExamQuestion>
                    <ExamAnwsers className="border-bottom">
                      {
                        question.subjecttypecode == "O" &&
                        question.optioninfo.map((answer, answerIndex) => (
                          <FlexBoxAlignCenter key={`answer-${answerIndex}`}>
                            <InputRadio
                              id={`answer-${questionIndex}-${answerIndex}`}
                              type="radio"
                              name={`answer-${questionIndex}`}
                              value={answer.optioncode}
                              checked={answerinfo[questionIndex].subjectanswer == answer.optioncode}
                              onChange={(event) => this.handleRadioAnswerChange(event, questionIndex, answerIndex)}
                            />
                            <Flex>
                              <Label htmlFor={`answer-${questionIndex}-${answerIndex}`}>
                                {answer.optioncode}.
                                {answer.optioncontent}

                                {
                                  answer.optionpic &&
                                  <ExamImg src={answer.optionpic} alt=""/>
                                }

                              </Label>
                            </Flex>
                          </FlexBoxAlignCenter>
                        ))
                      }


                      {
                        question.subjecttypecode == "B" &&
                        question.optioninfo.map((answer, answerIndex) => (
                          <FlexBoxAlignCenter key={`answer-${answerIndex}`}>
                            <div>({answerIndex + 1})&nbsp;</div>
                            <Flex>
                              <input className="answer-input"
                                     id={`answer-${questionIndex}-${answerIndex}`}
                                     ref={`answer-${questionIndex}-${answerIndex}`} type="text"
                                     onChange={(e) => {this.handleInputAnswerChange(e,questionIndex, answerIndex, question.optioninfo.length)}}
                              />
                            </Flex>
                          </FlexBoxAlignCenter>
                        ))
                      }

                    </ExamAnwsers>
                    <ExamAnwser>
                      我的答案: {answerinfo[questionIndex].subjectanswer || ''}
                    </ExamAnwser>
                  </div>)
                ))
              }
            </ExamContent>

            <ExamFooter className="border-top">
              <FlexBoxAlignCenter>
                <Flex>
                  {
                    <ExamNext onClick={()=> {this.goStep(3)}}>确认，继续下一题</ExamNext>
                  }
                </Flex>
              </FlexBoxAlignCenter>
            </ExamFooter>


          </Section>
        }


        {/************************************第三步*******************************/}
        {
          detail && step == 3 &&
          <Section>
            {
              <ExamInfo detail={detail} type={2} duration={getTimeDuration(startTime, endTime)}></ExamInfo>
            }
            <ExamFooter className="border-top">
              <FlexBoxAlignCenter>
                {currentSubjectIndex != 0 &&
                <ExamLast onClick={()=> {this.goStep(2)}}>
                  返回上一题
                </ExamLast>}
                <div></div>
                <Flex>
                    <ExamNext onClick={this.handleSubmit}>
                      全部完成，立即交卷
                    </ExamNext>
                </Flex>
              </FlexBoxAlignCenter>
            </ExamFooter>
          </Section>
        }

        {/************************************第四步*******************************/}
        {
          detail && step == 4 &&
          <Section>
            <ExamInfo detail={detail} type={3}>
              <ExamResult>
                <div>
                  <ExamScore>{examResult.answerscore}</ExamScore>分
                </div>
                <p>（正确：<Bold>{examResult.correctnum}</Bold>题，错误：<Red>{examResult.errornum}</Red>题）</p>
                <p>试卷时间：{detail.totalminute}分钟，您本次测试花费：{getTimeDuration(startTime, endTime)}</p>
                {
                  examResult.answerscore < 60 &&
                  <Orange>不是很理想，需要再接再厉哦~</Orange>
                }
              </ExamResult>
            </ExamInfo>

            {
              /*
              examResult.answerscore != detail.totalscore &&
              <ExamFooter className="border-top">
                <FlexBoxAlignCenter>
                  <Flex>
                    <ExamNext onClick={this.revise}>
                      立即订正
                    </ExamNext>
                  </Flex>
                </FlexBoxAlignCenter>
              </ExamFooter>
              */
            }

          </Section>
        }

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

ExercisePage.propTypes = {
  detail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  examResult: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  queryDetail: PropTypes.func,
  submitAnswer: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  detail: makeSelectDetail(),
  detailId: makeSelectDetailId(),
  examResult: makeSelectExamResult(),
});


export function mapDispatchToProps(dispatch) {
  return {
    buildPractice: (param) => {
      dispatch(buildPractice(param))
    },
    queryDetail: (param) => {
      dispatch(queryDetail(param))
    },
    submitAnswer: (param) => {
      dispatch(submitAnswer(param))
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'exercise', reducer});
const withSaga = injectSaga({key: 'exercise', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExercisePage);
