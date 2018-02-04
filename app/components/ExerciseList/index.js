import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';
//import { Link } from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import Name from './styles/Name';
import Result from './styles/Result';
import Red from './styles/Red';
import Blue from './styles/Blue';
import Gray from './styles/Gray';
import Span from './styles/Span';
import Left from './styles/Left';
import Right from './styles/Right';
import IconWrap from './styles/IconWrap';
import FlexTextEllipsis from './styles/FlexTextEllipsis';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Icon from 'components/Icon';
import SubjectTag from 'components/SubjectTag';

function ExamList({loading, error, list}) {



  //if (error !== false) {
  //  return (<div>网络异常</div>);
  //}

  if (list !== false) {
    // return <List items={shops} component={ShopListItem} />;
    return (<Wrapper>
      <Ul>
        {
          list.map((item, index) => (
            (<Li key={`item-${index}`} className="border-bottom">
              <Link to={`/exercise-detail/${item.id}`}>
                <FlexBox>
                  <FlexTextEllipsis>
                    <div className="clearfix">
                      <Name>{item.practicename}</Name>
                      <Gray>共 {item.subjectnum} 题</Gray>
                    </div>
                    <div className="clearfix">
                      {item.projectname && <SubjectTag>{item.projectname}</SubjectTag>}
                      {item.categoryname && <SubjectTag>{item.categoryname}</SubjectTag>}
                      {item.itemname && <SubjectTag>{item.itemname}</SubjectTag>}
                      {item.subitemname && <SubjectTag>{item.subitemname}</SubjectTag>}
                    </div>
                      <Result className="clearfix">
                        <Left>
                          <IconWrap>
                            <Icon className="iconfont icon-shijian" size="0.8rem"/>
                          </IconWrap>
                          {item.answertime}
                        </Left>
                        <Right>
                      <Span>总分:<Blue>{item.totalscore}</Blue></Span>
                          <Span>得分:<Red>{item.answerscore}</Red></Span>
                        </Right>
                      </Result>
                  </FlexTextEllipsis>
                </FlexBox>
              </Link>
            </Li>)
          ))
        }
      </Ul>
    </Wrapper>);
  }

  return null;
}

ExamList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  list: PropTypes.any,
};

export default ExamList;
