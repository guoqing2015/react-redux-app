import React from 'react';
import PropTypes from 'prop-types';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Icon from 'components/Icon';

import Ul from './styles/Ul';
import Li from './styles/Li';
import IconWrap from './styles/IconWrap';
import SubjectName from './styles/SubjectName';


function SubjectListItem({item, index, toggleCollect, isCollect}) {
  return (
    <Li className="border-bottom">
      <SubjectName>{index + 1}. {item.subjectname}</SubjectName>

      {item.subjecttypecode == "O" &&
      <div>
        {
          item.optioninfo.map((option, i) => (
            <p key={`subject-option-${i}`}>{option.optioncode}. {option.optioncontent}</p>
          ))
        }
      </div>
      }
      <div>

        {
          item.subjectresult && item.subjectresult.subjectanswer &&
          <span>答案：{item.subjectresult.subjectanswer}</span>
        }
        <span>
                  <IconWrap onClick={() => {
                    toggleCollect(item, isCollect)
                  }}>
                    { !isCollect &&
                    <Icon className="iconfont icon-weishoucang" size="1.2rem"/>
                    }
                    { isCollect &&
                    <Icon className="iconfont icon-yishoucang" size="1.2rem" color="#26aaf2"/>
                    }
                  </IconWrap>
                  <span>正确答案：{item.answercode}</span>
                </span>
      </div>

      <div>
        解析：{item.answeranalysis}
      </div>
    </Li>
  )
}

SubjectListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  toggleCollect: PropTypes.func,
  isCollect: PropTypes.bool
};

export default SubjectListItem;
