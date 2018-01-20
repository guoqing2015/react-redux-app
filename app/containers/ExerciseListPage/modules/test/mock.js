import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';





var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "sEcho": null,
    "iTotalRecords": 8,
    "iTotalDisplayRecords": 8,
    "aaData": [
      {
        "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
        "practicecode": "20170901110",
        "practicename": "第339期练习：XXXXXXXXXXXXXXXXXXXX",
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
        "remark": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
        }
      },
      {
        "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
        "practicecode": "20170901110",
        "practicename": "第400期练习：XXXXXXXXXXXXXXXXXXXX",
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
        "remark": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
        }
      }
    ]
  }
};
mock.onPost(urls.PRACTICE_LIST_URL).reply(200, data);


