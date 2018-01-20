import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';

var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "id": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "examcode": "20171122001",
    "examname": "第二次雅思单词测试",
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
    "completedate": "2017-12-31 00:00:00",
    "remark": null,
    "status": 1,
    "createtime": "2017-11-22 15:20:16",
    "createuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "createusername": "管理员",
    "modifytime": "2017-11-22 15:20:21",
    "modifyuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
    "modifyusername": "管理员",
    "examid": null,
    "userid": null,
    "answerstatus": 0,
    "answerscore": null,
    "answertime": null,
    "revisestatus": null,
    "revisescore": null,
    "revisetime": null,
    "completednum": 1,
    "uncompletenum": 2,
    "subjectinfo": [

      {
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
        "subjectresult": null
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
        }
        ],
        "subjectresult": null
      },

      {
        "subjectid": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "subjecttypecode": "O",
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
        "subjecttypecode": "O",
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
        "subjecttypecode": "O",
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
      },


      {
        "subjectid": "4444",
        "subjecttypecode": "O",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "xxxx",
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

        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "1",
          "subjectscore": 0
        }
      },

      {
        "subjectid": "4444",
        "subjecttypecode": "O",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "xxxx",
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

        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "1",
          "subjectscore": 0
        }
      },

      {
        "subjectid": "4444",
        "subjecttypecode": "O",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "xxxx",
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

        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "1",
          "subjectscore": 0
        }
      },
      {
        "subjectid": "4444",
        "subjecttypecode": "O",
        "subjecttypename": "选择题",
        "subjectcode": "20121212",
        "subjectname": "xxxx",
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

        ],
        "resultinfo": {
          "subjectanswer": "C",
          "iscorrect": "1",
          "subjectscore": 0
        }
      },


    ]
  }
}


mock.onPost(urls.REVISE_DETAIL_URL, {
  examid: "53bc7c3d-f4f1-11e6-a355-507b9de727e3"
}).reply(200, data);

mock.onPost(urls.REVISE_DETAIL_URL, {
  examid: "22bc7c3d-f4f1-11e6-a355-507b9de727e3"
}).reply(200, data);


mock.onPost(urls.REVISE_SUBMIT_URL).reply(200,
  {
    "errcode": 7001,
    "errmsg": "",
    "content": {
      "id": "89b8dce4-d425-11e7-a1ed-507b9de727e3",
      "examid": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
      "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
      "answerstatus": 1,
      "answerscore": 0.00,
      "duration": 5597,
      "answertime": "2017-12-05 08:48:42",
      "revisestatus": 0,
      "revisescore": 0.00,
      "revisetime": "2017-12-03 23:30:13",
      "correctnum": 1,
      "errornum": 8,
      "examresultsubject": null
    }
  }
);
