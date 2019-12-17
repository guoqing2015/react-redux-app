import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';


//01:待完成 02:已完成 03:未完成
var data1 = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "sEcho": null,
    "iTotalRecords": 1,
    "iTotalDisplayRecords": 1,
    "aaData": [
      {
        "id": "22bc7c3d-f4f1-11e6-a355-507b9de727e3",
        "examcode": "20171122002",
        "examname": "第二次托福单词测试",
        "examlogo": null,
        "projectcode": "tuofu",
        "projectname": "托福",
        "categorycode": "cihui",
        "categoryname": "词汇",
        "itemcode": "ci",
        "itemname": "词",
        "subitemcode": "danci",
        "subitemname": "单词",
        "subjectnum": 10,
        "totalscore": 20,
        "totalminute": 35,
        "completedate": "2017-12-31 00:00:00",
        "remark": null,
        "status": 1,
        "createtime": "2017-11-22 15:22:27",
        "createuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
        "createusername": "管理员",
        "modifytime": "2017-11-22 15:22:36",
        "modifyuser": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
        "modifyusername": "管理员",
        "examid": "22bc7c3d-f4f1-11e6-a355-507b9de727e3",
        "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
        "answerstatus": 0,
        "answerscore": null,
        "answertime": null,
        "revisestatus": null,
        "revisescore": null,
        "revisetime": null,
        "completednum": 0,
        "uncompletenum": 1,
        "subjectinfo": null
      }
    ]
  }
}

var data2 = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "sEcho": null,
    "iTotalRecords": 1,
    "iTotalDisplayRecords": 1,
    "aaData": [
      {
      "id": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
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
      "completedate": "2017-11-23 00:00:00",
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
      "answertime": "2017-12-03 23:28:09",
      "revisestatus": 1,
      "revisescore": 0.00,
      "revisetime": "2017-12-03 23:30:13",
      "completednum": 1,
      "uncompletenum": 2,
      "subjectinfo": null
    },
      {
        "id": "53bc7c3d-f4f1-11e6-a355-507b9de727e3",
        "examcode": "20171122001",
        "examname": "第三次雅思单词测试",
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
        "totalscore": 80,
        "totalminute": 40,
        "completedate": "2017-11-23 00:00:00",
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
        "answerscore": 90,
        "answertime": "2017-12-03 23:28:09",
        "revisestatus": 0,
        "revisescore": 70,
        "revisetime": "2017-12-03 23:30:13",
        "completednum": 1,
        "uncompletenum": 2,
        "subjectinfo": null
      }
    ]
  }
}


var data3 = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "sEcho": null,
    "iTotalRecords": 2,
    "iTotalDisplayRecords": 2,
    "aaData": [
      {
        "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
        "examcode": "20170901110",
        "examname": "第344期测试：aasdfasdf",
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
        "totalminute": "45",
        "remark": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "status": 3,
        "createtime": "2017-08-24 16: 30: 48",
        "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "createusername": "knight",
        "modifytime": "2017-08-24 16: 30: 48",
        "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "modifyusername": "knight"
      },
      {
        "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
        "examcode": "20170901110",
        "examname": "第345期测试：erfffffffff",
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
        "totalminute": "45",
        "remark": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "status": 3,
        "createtime": "2017-08-24 16: 30: 48",
        "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "createusername": "knight",
        "modifytime": "2017-08-24 16: 30: 48",
        "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "modifyusername": "knight"
      }
    ]
  }
};

mock.onPost(urls.EXAM_LIST_URL, {
  "answerstatus": "01",
  "userid": "484",
  "projectcode": "",
  "categorycode": "",
  "itemcode": "",
  "subitemcode": ""
}).reply(200, data1);

mock.onPost(urls.EXAM_LIST_URL, {
  "answerstatus": "02",
  "userid": "484",
  "projectcode": "",
  "categorycode": "",
  "itemcode": "",
  "subitemcode": ""
}).reply(200, data2);

mock.onPost(urls.EXAM_LIST_URL, {
  "answerstatus": "03",
  "userid": "484",
  "projectcode": "",
  "categorycode": "",
  "itemcode": "",
  "subitemcode": ""
}).reply(200, data3);


