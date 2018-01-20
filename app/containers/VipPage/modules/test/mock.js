import { urls } from 'setting';



var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "userid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
    "curtariffid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
    "curtariffname": "VIP套餐（一年）",
    "startdate": "2017-06-01",
    "enddate": "2018-06-01",
    "traderecords": [
      {
        "id": "28f47ad2-88a8-11e7-9349-507b9de727e3",
        "tradeno": "28012012120102112",
        "tariffname": "VIP套餐（一年）",
        "tradetime": "2016-4-30 12:00",
        "startdate": "2017-11-01",
        "enddate": "2017-11-30",
        "tradetype": "01",
        "tradeprice": 99,
        "status": 1,
        "createtime": "2017-08-24 16:30:48",
        "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "createusername": "18012627759",
        "modifytime": "2017-08-24 16:30:48",
        "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
        "modifyusername": "18012627759"
      }
    ]
  }
};


mock.onPost(urls.USER_TARIFF_URL).reply(200, data);
