import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';
var data = {
  "errcode": 7001,
  "errmsg": "",
  "examinfo": {
    "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
    "practicecode": "20170901110",
    "practicename": "第339期测试：XXXXXXXXXXXXXXXXXXXX",
    "projectcode": "Yasi",
    "projectname": "雅思",
    "categorycode": "cihui",
    "categoryname": "词汇",
    "itemcode": "ci",
    "itemname": "词",
    "subitemcode": "mingci",
    "subitemname": "名词",
    "subjectnum": "50",
    "totalscore": "100",
    "remark": "33333333333333333333asdfasdf13333333333333333333asdfasdfa啊啊啊发生地方啊33asdfasdf13433333333333333333333asdfasdf1344",
    "status": 1,
    "createtime": "2017-08-2416: 30: 48",
    "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
    "createusername": "knight",
    "modifytime": "2017-08-2416: 30: 48",
    "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
    "modifyusername": "knight",
    "resultinfo": {
      "totalscore": "98",
      "answertime": "2017-08-2416: 30: 48"
    },
    "subjectinfo": [
      {
        "subjectid": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "subjecttypecode": "01",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "下半旗是把旗子下降到",
        "subjectpic": "",
        "subjectchinese": "",
        "subjectaudio": "",
        "subjectscore": "2",
        "answercode": "A",
        "answeranalysis": "XXXXXXXXXXXXXXXXXXXX",
        "remark": "XXXXXXXXXXXXXXXXXXXX",
        "optioninfo": [
          {
            "optioncode": "A",
            "optioncontent": "旗杆的一半处",
            "optionpic": "",
            "iscorrect": 1
          },
          {
            "optioncode": "B",
            "optioncontent": "下降1米",
            "optionpic": "",
            "iscorrect": 0
          },
          {
            "optioncode": "C",
            "optioncontent": "下降1．5米 ",
            "optionpic": "",
            "iscorrect": 0
          },
          {
            "optioncode": "D",
            "optioncontent": "距离杆顶的1/3处",
            "optionpic": "",
            "iscorrect": 0
          }
        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "0",
          "subjectscore": 0
        }
      },
      {
        "subjectid": "3222",
        "subjecttypecode": "01",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "下列哪项是人体的造血器官",
        "subjectpic": "",
        "subjectchinese": "",
        "subjectaudio": "",
        "subjectscore": "2",
        "answercode": "A",
        "answeranalysis": "XXXXXXXXXXXXXXXXXXXX",
        "remark": "XXXXXXXXXXXXXXXXXXXX",
        "optioninfo": [
          {
            "optioncode": "A",
            "optioncontent": "心脏",
            "optionpic": "",
            "iscorrect": 1
          },
          {
            "optioncode": "B",
            "optioncontent": "骨髓 ",
            "optionpic": "",
            "iscorrect": 0
          },
          {
            "optioncode": "C",
            "optioncontent": "肾脏",
            "optionpic": "",
            "iscorrect": 0
          },
          {
            "optioncode": "D",
            "optioncontent": "脾脏",
            "optionpic": "",
            "iscorrect": 0
          }
        ],
        "resultinfo": {
          "subjectanswer": "B",
          "iscorrect": "0",
          "subjectscore": 0
        }
      },
      {
        "subjectid": "4444",
        "subjecttypecode": "01",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "下列哪种邮件如果丢失了，邮局不负赔偿责任",
        "subjectpic": "",
        "subjectchinese": "",
        "subjectaudio": "",
        "subjectscore": "2",
        "answercode": "A",
        "answeranalysis": "XXXXXXXXXXXXXXXXXXXX",
        "remark": "XXXXXXXXXXXXXXXXXXXX",
        "optioninfo": [
          {
            "optioncode": "A",
            "optioncontent": "平信",
            "optionpic": "",
            "iscorrect": 1
          },
          {
            "optioncode": "B",
            "optioncontent": "挂号",
            "optionpic": "",
            "iscorrect": 0
          },
          {
            "optioncode": "A",
            "optioncontent": "非保价邮包",
            "optionpic": "",
            "iscorrect": 1
          },
          {
            "optioncode": "A",
            "optioncontent": "特快专递邮件",
            "optionpic": "",
            "iscorrect": 1
          },
        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "1",
          "subjectscore": 0
        }
      }
    ]
  }
}


mock.onGet(urls.PRACTICE_DETAIL_URL).reply(200, data);
