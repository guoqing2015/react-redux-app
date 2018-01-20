import { urls } from 'setting';



mock.onPost(urls.QUERY_TARIFF_URL).reply(200, {
  "errcode": 7001,
  "errmsg": "",
  "content": [
    {
      "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
      "tariffname": "VIP套餐（一年）",
      "vailddays": 365,
      "primeprice": 150,
      "discountprice": 99,
      "latpoints": 100,
      "tariffdesc": "说明",
      "status": 1,
      "createtime": "2017-08-24 16:30:48",
      "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "createusername": "18012627759",
      "modifytime": "2017-08-24 16:30:48",
      "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "modifyusername": "18012627759"
    }
  ]
});


