import { urls } from 'setting';


mock.onPost(urls.QUERY_COLLECT_URL).reply(200,
  {
    "errcode": 7001,
    "errmsg": "",
    "content": {
      "sEcho": null,
      "iTotalRecords": 8,
      "iTotalDisplayRecords": 8,
      "aaData": [
        {
          "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
          "subjectid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
          "subjectname": "XXXXXXXXXXXXXXXXXXXXXXXX",
          "categorycode": "01",
          "categoryname": "雅思",
          "projectcode": "01",
          "projectname": "基础词汇",
          "levelcode": "01",
          "levelname": "等级一"
      }]
    }
  }
);


mock.onPost(urls.TOGGLE_COLLECT_URL).reply(200, {
  "errcode": 7001,
  "errmsg": "",
});









