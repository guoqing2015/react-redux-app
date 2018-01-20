import React from 'react';
import PropTypes from 'prop-types';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Button from 'components/Button';
import Icon from 'components/Icon';
import SubjectTag from 'components/SubjectTag';

import ExamName from './styles/ExamName';
import ExamBrief from './styles/ExamBrief';
import ExamUl from './styles/ExamUl';
import ExamLi from './styles/ExamLi';
import ExamUser from './styles/ExamUser';
import ExamTime from './styles/ExamTime';


function ExamInfo({detail, type, duration, children}) {
  if(!detail) {
    return null
  }
  return (
    <div>

    <ExamUl className="clearfix">
      <ExamLi className="border-bottom">
        <ExamName>{detail.examname}</ExamName>
      </ExamLi>
      {detail.remark &&
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
        总分：{detail.totalscore} &nbsp;&nbsp;&nbsp;&nbsp;时间：{detail.totalminute}分钟 &nbsp;&nbsp;&nbsp;&nbsp;共{detail.subjectnum}题
      </ExamLi>
      {
        type == 1 &&  <ExamLi className="border-bottom">
          <FlexBoxAlignCenter>
            <Icon className="iconfont icon-shijian"/>
            <Flex>
              <ExamTime>
                {detail.completedate}
              </ExamTime>
              <ExamUser>
                {detail.createusername}
              </ExamUser>
            </Flex>
          </FlexBoxAlignCenter>
        </ExamLi>
      }

      {
        type == 1 &&
        <ExamLi className="border-bottom">
        已答卷：20人&nbsp;&nbsp; 未答卷：20人
        </ExamLi>
      }

      {
        type == 2 &&
        <ExamLi className="border-bottom">
          <FlexBoxAlignCenter>
            <Icon className="iconfont icon-shijian"/>
            <Flex>
              <ExamTime>
                已完成全部试题：{detail.subjectinfo.length}题，共花费 {duration}
              </ExamTime>
            </Flex>
          </FlexBoxAlignCenter>
        </ExamLi>
      }
    </ExamUl>
      {children}
    </div>
  )
}

ExamInfo.propTypes = {
  detail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  type: PropTypes.number,
  duration: PropTypes.any
};

export default ExamInfo;
