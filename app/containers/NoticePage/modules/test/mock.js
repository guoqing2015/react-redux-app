import { urls } from 'setting';



mock.onPost(urls.NOTICE_LIST_URL).reply(200, {
  "errcode": 7001,
  "errmsg": "",
  "content": [
    {
      "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
      "messagetitle": "北美电影票房年末形势喜人 《雷神3》功不可没",
      "messagedesc": " 尽管11月上映的进口大片《雷神3》、《正义联盟》、《东方快车谋杀案》来势汹汹，但国产片方面也同样阵容齐整，以多元化的类型和风格为观众提供了更加丰富的选择。",
      "status": 1,
      "createtime": "2017-08-2416: 30: 48",
      "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "createusername": "knight",
      "modifytime": "2017-08-2416: 30: 48",
      "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "modifyusername": "knight"
    }
  ]
});

mock.onPost(urls.UPEATE_NOTICE_URL).reply(200, {
  "errcode": 7001,
  "errmsg": "",
  "content": ""
});
