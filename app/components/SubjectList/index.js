import React from 'react';
import PropTypes from 'prop-types';
import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Icon from 'components/Icon';
import SubjectListItem from 'components/SubjectListItem';

import Ul from './styles/Ul';
import Li from './styles/Li';
import IconWrap from './styles/IconWrap';
import SubjectName from './styles/SubjectName';



function SubjectList({list, collectList, toggleCollect}) {
  if (list) {
    return (
      <Ul className="clearfix">
        {
          list.map((item, index) => {
            var isCollect = false;
            if(collectList) {
              collectList.forEach((v) => {
                if(v.subjectid == item.subjectid) {
                  isCollect = true
                }
              })
            }
            return (
            <SubjectListItem key={`subject-item-${index}`} item={item} index={index} toggleCollect={toggleCollect} isCollect={isCollect}></SubjectListItem>
            )
          })
        }
      </Ul>
    );
  }
  return null;
}

SubjectList.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  collectList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  toggleCollect: PropTypes.func
};

export default SubjectList;
