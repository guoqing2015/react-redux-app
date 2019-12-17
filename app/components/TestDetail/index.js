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
  detail = {    "id": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
  "examcode": "20171122001",
  "examname": "第一次雅思单词测试",
  "examlogo": null,
  "projectcode": "yasi",
  "projectname": "雅思",
  "categorycode": "cihui",
  "categoryname": "词汇",
  "itemcode": "ci",
  "itemname": "词",
  "subitemcode": "danci",
  "subitemname": "单词",
  "subjectnum": 10,
  "totalscore": 20,
  "totalminute": 40,
  "completedate": "0001-01-01 00:00:00",
  "remark": null,
  "status": 1,
  "createtime": "2017-11-22 15:20:16",
  "createuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
  "createusername": "管理员",
  "modifytime": "2017-11-22 15:20:21",
  "modifyuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
  "modifyusername": "管理员",
  "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
  "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
  "answerstatus": 1,
  "answerscore": 0.00,
  "answertime": "2017-12-05 08:48:42",
  "revisestatus": 1,
  "revisescore": 0.00,
  "revisetime": "2017-12-05 08:55:57",
  "completednum": 1,
  "uncompletenum": 2,
  "subjectinfo": [{
    "id": "abbc7c3d-f4f1-11e6-a355-507b9de727e3",
    "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "subjectid": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "parentsubjectid": null,
    "subjecttypecode": "O",
    "subjectcode": "B006674",
    "subjectname": " —_______ you _______free tomorrow?\n—No. I ______free the day after tomorrow.",
    "subjectchinese": null,
    "subjectpic": null,
    "subjectaudio": null,
    "subjectscore": 1.00,
    "answercode": "C",
    "answeranalysis": null,
    "remark": null,
    "status": 1,
    "createtime": "2017-11-22 18:18:39",
    "createuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "createusername": "管理员",
    "modifytime": "2017-11-22 18:18:42",
    "modifyuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "modifyusername": "管理员",
    "optioninfo": [{
      "id": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "optioncode": "A",
      "optioncontent": "Do",
      "optionpic": null,
      "iscorrect": false
    }, {
      "id": "22bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "optioncode": "B",
      "optioncontent": "Will",
      "optionpic": null,
      "iscorrect": false
    }, {
      "id": "32bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "optioncode": "C",
      "optioncontent": "Are",
      "optionpic": null,
      "iscorrect": true
    }],
    "subjectresult": {
      "id": "3b6cfe29-d801-11e7-a4f4-00163e004801",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
      "subjectid": "12bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectanswer": "A",
      "iscorrect": 0,
      "subjectscore": 0.00,
      "revsubjectanswer": "0",
      "reviscorrect": 0,
      "revsubjectscore": 0.0
    }
  }, {
    "id": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
    "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "subjectid": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
    "parentsubjectid": null,
    "subjecttypecode": "B",
    "subjectcode": "E002150",
    "subjectname": "He's lucky_____so many good friends. (have)",
    "subjectchinese": null,
    "subjectpic": null,
    "subjectaudio": null,
    "subjectscore": 4.00,
    "answercode": "AAA,BBB,CCC,DDD",
    "answeranalysis": null,
    "remark": null,
    "status": 1,
    "createtime": "2017-11-22 18:20:31",
    "createuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "createusername": "管理员",
    "modifytime": "2017-11-22 18:20:35",
    "modifyuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "modifyusername": "管理员",
    "optioninfo": [{
      "id": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
      "optioncode": "1",
      "optioncontent": "wash ",
      "optionpic": null,
      "iscorrect": true
    }, {
      "id": "d19f7dc5-4cff-4f68-ad65-000d637510f9",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
      "optioncode": "2",
      "optioncontent": null,
      "optionpic": null,
      "iscorrect": true
    }, {
      "id": "e19f7dc5-4cff-4f68-ad65-000d637510f9",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "subjectid": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
      "optioncode": "3",
      "optioncontent": "message",
      "optionpic": null,
      "iscorrect": true
    }],
    "subjectresult": {
      "id": "e798bcd1-d800-11e7-a4f4-00163e004801",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
      "subjectid": "c19f7dc5-4cff-4f68-ad65-000d637510f9",
      "subjectanswer": "123,134,125123",
      "iscorrect": 0,
      "subjectscore": 0.00,
      "revsubjectanswer": "0",
      "reviscorrect": 0,
      "revsubjectscore": 0.0
    }
  }]
}
  if (detail !== false) {
    var name = '', score = '';
    // if(page == 'examDetail') {
      name = detail.examname
    // } else  if(page == 'exerciseDetail') {
    //   name = detail.practicename
    // }
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
