import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Ul from './styles/Ul';
import Li from './styles/Li';
//import { Link } from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import Name from './styles/Name';
import Result from './styles/Result';
import Orange from './styles/Orange';
import Blue from './styles/Blue';
import Span from './styles/Span';
import FlexTextEllipsis from './styles/FlexTextEllipsis';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';


function ExamList({loading, error, list}) {
  if (list !== false) {
    return (<Wrapper>
      <Ul>
        {
          list.map((item, index) => (
            (<Li key={`item-${index}`} className="border-bottom" >
              <Link  to={`/exam-detail/${item.id}`}>
              <FlexBox>
                <FlexTextEllipsis>
                  <Name>题{index+1}：{item.subjectname}</Name>
                  <Result>
                    {/*<Span>正确：<Blue>10</Blue> 次</Span>*/}
                    <Span>错误：<Orange>{item.errnum}</Orange> 次</Span>
                    {/*<Span>正确率：<Orange>45.5%</Orange></Span>*/}
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
