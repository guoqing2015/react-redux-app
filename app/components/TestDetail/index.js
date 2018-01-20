import React from 'react';
import PropTypes from 'prop-types';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import SubjectTag from 'components/SubjectTag';

import ExamName from './styles/ExamName';
import ExamBrief from './styles/ExamBrief';
import ExamUl from './styles/ExamUl';
import ExamLi from './styles/ExamLi';
import Orange from './styles/Orange';
import Red from './styles/Red';
import Bold from './styles/Bold';

function TestDetail({detail, page}) {
  if (detail !== false) {
    var name = '', score = '';
    if(page == 'examDetail') {
      name = detail.examname
    } else  if(page == 'exerciseDetail') {
      name = detail.practicename
    }
    return (
      <ExamUl className="clearfix">
        <ExamLi className="border-bottom">
          <ExamName>{name}</ExamName>
        </ExamLi>
        {
          detail.remark &&
          <ExamLi className="border-bottom">
            <ExamBrief>{detail.remark}</ExamBrief>
          </ExamLi>
        }
        <ExamLi className="border-bottom">
          <SubjectTag>{detail.projectname}</SubjectTag>
          <SubjectTag>{detail.categoryname}</SubjectTag>
          <SubjectTag>{detail.itemname}</SubjectTag>
          <SubjectTag>{detail.subitemname}</SubjectTag>
        </ExamLi>
        <ExamLi className="border-bottom">
          <p>成绩：<Orange>{detail.answerscore || 0}</Orange>分（共<Bold>{detail.subjectnum}</Bold>题，错误<Red>--</Red>题）</p>
          <p>试卷时长：共{detail.totalminute}分钟 &nbsp;&nbsp; 答卷时长：共--分钟</p>
          {detail.answertime &&
          <p>交卷时间：{detail.answertime}</p>
          }
        </ExamLi>
      </ExamUl>
    );
  }
  return null;
}

TestDetail.propTypes = {
  detail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  page: PropTypes.string
};

export default TestDetail;
