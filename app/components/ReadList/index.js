import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';
//import {Link} from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import ExamImgWrapper from './styles/ExamImgWrapper';
import ExamImg from './styles/ExamImg';
import ExamName from './styles/ExamName';
import ExamTagWrap from './styles/ExamTagWrap';
import ExamTag from './styles/ExamTag';
import ExamTime from './styles/ExamTime';
import Button from './styles/Button';
import FlexTextEllipsis from './styles/FlexTextEllipsis';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import IconWrapLeftTime from './styles/IconWrapLeftTime';
import Left from './styles/Left';
import Right from './styles/Right';
import Result from './styles/Result';
import Green from './styles/Green';
import Red from './styles/Red';
import Revise from './styles/Revise';
import Icon from 'components/Icon';
import getTimeDuration from '../../utils/getTimeDuration';
import addImgPrefix from '../../utils/addImgPrefix';



export class ExamList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.getLeftTime = this.getLeftTime.bind(this)
    this.getLinkUrl = this.getLinkUrl.bind(this)
    this.getScoreResult = this.getScoreResult.bind(this)
  }

  static PropTypes = {
    loading: PropTypes.bool,
    error: PropTypes.any,
    exams: PropTypes.any,
    tabIndex: PropTypes.number,
  }


  getLeftTime (time) {
    var now = new Date().getTime();
    console.log(new Date().toLocaleDateString());
    var completeTime = new Date(time.replace(/-/g, '/')).getTime();
    return getTimeDuration(now, completeTime, 'examlist')
  }

  getLinkUrl (item, tabIndex) {
    if(tabIndex == 0) { //待完成
      return `/exam/${item.id}`;
    } else if(tabIndex == 1) { //已完成
      if(item.revisestatus == 0) { //需要订正
        return `/revise/${item.id}`;
      } else {
        return `/exam-detail/${item.id}`;
      }
    } else if(tabIndex == 2) {
      return `/exam-detail/${item.id}`;
    }
  }

  getScoreResult(item) {
    var score;
    if(item.revisestatus == 0) { //未订正
      score = parseFloat(item.answerscore);
    } else {
      score = parseFloat(item.revisescore);
    }

    if(score >= 60) {
      return (
        <div>
          <Icon className="iconfont icon-youxiu" size="1.15rem" color="#008000" margin="-0.2rem 0 0 0"/>
          <Green>{item.answerscore}</Green> 分
        </div>
      )
    } else {
      return (
        <div>
          <Icon className="iconfont icon-chaping" size="1rem" color="#E3010F" margin="-0.1rem 0 0 0"/>
          <Red>{item.answerscore}</Red> 分
        </div>
        )
    }

    //return (
    //  <Right>
    //    {
    //      parseInt(item.answerscore) >= 60 &&
    //      <div>
    //        <Icon className="iconfont icon-youxiu" size="1.15rem" color="#008000" margin="-0.2rem 0 0 0"/>
    //        <Green>{item.answerscore}</Green> 分
    //      </div>
    //    }
    //    {
    //      parseInt(item.answerscore) < 60 &&
    //      <div>
    //        <Icon className="iconfont icon-chaping" size="1rem" color="#E3010F" margin="-0.1rem 0 0 0"/>
    //        <Red>{item.answerscore}</Red> 分
    //      </div>
    //    }
    //  </Right>
    //)
  }


  render() {

    const {loading, error, list, tabIndex} = this.props;
    if(!list) return null;

      return (<Wrapper>
        <Ul>
          {
            list.map((item, index) => (
              (<Li key={`item-${index}`} className="border-bottom">
                <Link to={this.getLinkUrl(item, tabIndex)}>
                  <FlexBox>
                    <ExamImgWrapper>
                      {
                        item.examlogo &&
                        <ExamImg src={addImgPrefix(item.examlogo)}/>
                      }
                    </ExamImgWrapper>
                    <FlexTextEllipsis>
                      <ExamName>{item.examname}</ExamName>
                      <ExamTagWrap>
                        <ExamTag>{item.categoryname}</ExamTag>
                        <ExamTag>{item.projectname}</ExamTag>
                        <ExamTag>{item.itemname}</ExamTag>
                        <ExamTag>{item.subitemname}</ExamTag>
                      </ExamTagWrap>
                      <ExamTime>{item.createtime}</ExamTime>

                      {/*0:待完成 1:已完成 2:未完成*/}
                      {
                        tabIndex == 0 &&
                        <div className="clearfix">
                          <Button>立即答卷</Button>
                          <Right>
                            <IconWrapLeftTime>
                              <Icon className="iconfont icon-shijian" size="0.9rem"/>
                            </IconWrapLeftTime>
                            剩余{this.getLeftTime(item.completedate)}
                          </Right>
                        </div>
                      }

                      {
                        tabIndex == 1 &&
                        <Result className="clearfix">
                          <Right>
                            {this.getScoreResult(item)}
                          </Right>
                          {
                            item.revisestatus == 1 &&
                            <Revise>已订正</Revise>
                          }
                        </Result>
                      }



                      {
                        tabIndex == 2 &&
                        <Result className="clearfix">
                          <Right>
                            <Icon className="iconfont icon-chahao" size="0.9rem" color="#ED252C" margin="-0.1rem 0 0 0"/>
                            <Red>0</Red> 分
                          </Right>
                        </Result>
                      }


                    </FlexTextEllipsis>
                  </FlexBox>
                </Link>
              </Li>)
            ))
          }
        </Ul>
      </Wrapper>);
  }

}


export default ExamList;



