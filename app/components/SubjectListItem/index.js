import React from 'react';
import PropTypes from 'prop-types';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Icon from 'components/Icon';

import Ul from './styles/Ul';
import Li from './styles/Li';
import IconWrap from './styles/IconWrap';
import SubjectName from './styles/SubjectName';


function SubjectListItem({item, index, toggleCollect, isCollect}) {
  const result = item.subjectresult || { subjectanswer: '',  iscorrect: 0}

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
              result.subjectanswer &&
              <span>答案：{result.subjectanswer}</span>
            }
            {result.iscorrect == 1 &&
            <Icon className="iconfont icon-shiliangzhinengduixiang" size="1.05rem" margin="0 0 0 0.2rem" color="#4FBD5E"/>
            }
            {result.iscorrect == 0 &&
                <span>
                      <Icon className="iconfont icon-chahao" size="1.2rem" margin="0 0 0 0.2rem" color="#ED252C"/>
                      <IconWrap onClick={()=>{toggleCollect(item, isCollect)}}>
                        { !isCollect &&
                        <Icon className="iconfont icon-weishoucang" size="1.2rem"/>
                        }
                        { isCollect &&
                        <Icon className="iconfont icon-yishoucang" size="1.2rem" color="#26aaf2"/>
                        }
                      </IconWrap>
                      <span>正确答案：{item.answercode}</span>
                </span>
            }
          </div>

          {result.iscorrect == 0 &&
          <div>
            解析：{item.answeranalysis}
          </div>
          }
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
