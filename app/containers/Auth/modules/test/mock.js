import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';





var data = {
"access_token":"ACCESS_TOKEN",
"expires_in":7200,
"refresh_token":"REFRESH_TOKEN",
"openid":"oIJ8ct_qGGnT42F7Kv28y0IHBfqE",
"scope":"SCOPE",
"unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
};
mock.onGet(urls.ACCESS_TOKEN_URL).reply(200, data);









var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "userid": "484", //vivo
    openid: "oIJ8ct_qGGnT42F7Kv28y0IHBfqE", //vivo
    //"userid": "124011", //vivotest
    "usertype": "02",
    "userlevel": 1,
    "account": "18012627759",
    "password": "e5aj1aKw4K1FwubejgTbRA==",
    "mail": null,
    "mobile": "18020285885",
    "wallet": 0,
    "points": 400,
    "username": "郭清",
    "nickname": "郭 清",
    "gender": null,
    "headportrait": "oIJ8ct_qGGnT42F7Kv28y0IHBfqE",
    "telephone": null,
    "wechat": null,
    "openid": "",
    "qqnumber": null,
    "blog": null,
    "provinceid": null,
    "provincename": null,
    "cityid": null,
    "cityname": null,
    "countyid": null,
    "countyname": null,
    "homeaddress": null,
    "zipcode": null,
    "birthday": null,
    "married": null,
    "profession": null,
    "idnumber": null,
    "orgid": null,
    "orgname": null,
    "question": "",
    "anwser": "",
    "remark": null,
    "status": null,
    "property1": "",
    "property2": "",
    "property3": "",
    "property4": "",
    "property5": "",
    "createtime": "2017-08-21 15:24:05",
    "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
    "createusername": "本人",
    "modifytime": "2017-08-21 15:24:05",
    "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
    "modifyusername": "本人"
  }
}


mock.onPost(urls.USER_INFO_URL).reply(200, data);
