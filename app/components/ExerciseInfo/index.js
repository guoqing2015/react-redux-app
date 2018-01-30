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
  console.log(detail);
  return (
    <div>

    <ExamUl className="clearfix">
      <ExamLi className="border-bottom">
        <ExamName>{detail.practicename}</ExamName>
      </ExamLi>
      {detail.remark &&
      <ExamLi className="border-bottom">
        <ExamBrief>{detail.remark}</ExamBrief>
      </ExamLi>
      }
      {
        (detail.projectname || detail.categoryname || detail.itemname || detail.subitemname) &&
          <ExamLi className="border-bottom">
            {detail.projectname && <SubjectTag>{detail.projectname}</SubjectTag>}
            {detail.categoryname && <SubjectTag>{detail.categoryname}</SubjectTag>}
            {detail.itemname && <SubjectTag>{detail.itemname}</SubjectTag>}
            {detail.subitemname && <SubjectTag>{detail.subitemname}</SubjectTag>}
          </ExamLi>
      }
      <ExamLi className="border-bottom">
        总分：{detail.totalscore} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;共{detail.subjectnum}题
      </ExamLi>
      {
        type == 1 &&  <ExamLi className="border-bottom">
          <FlexBoxAlignCenter>
            <Icon className="iconfont icon-shijian"/>
            <Flex>
              <ExamTime>
                {detail.completedate.substring(0,10)}
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
        已答卷：{detail.completednum}人&nbsp;&nbsp; 未答卷：{detail.uncompletenum}人
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
