import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';


var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": "{\"access_token\":\"4_XSexe6Bm644E7XZqCO1DvBwdQIq_O-uCp20xAzcllPfA5FxuA-Nh2Qe7vL5WXfQ_bcCevlmjBmWCAShmm6r8Iw\",\"expires_in\":7200,\"refresh_token\":\"4_fKKXq7pZZ2ePc94QuE9VkjhYxTHyPAzUoHm5n8te4-8lJwAUMj20JMg1D0c8-0bPvSZ4pOviqyiL1ZV4oshwUg\",\"openid\":\"odd69v33MQxUnChmQFoGHRh_EMJQ\",\"scope\":\"snsapi_base\"}"
}

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

    "provinceid": "",
    "provincename": "",
    "cityid": "",
    "cityname": "",
    "countyid": "",
    "countyname": "",
    "homeaddress": "",
    "zipcode": "",

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
