import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';

var data = {
  "errcode": 7001,
  "errmsg": "",
  content: {
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
    isCollect: 1,
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
}


mock.onGet(urls.COLLECT_DETAIL_URL).reply(200, data);
