import { urls } from 'setting';


mock.onPost(urls.VALIDATION_CODE_URL).reply(200, {
  "errcode": 7001,
  "errmsg": ""
});


mock.onPost(urls.LOGIN_URL).reply(200, {
  "errcode": "7001",
  "errmsg": "错误信息",
  "content": 1234
});
