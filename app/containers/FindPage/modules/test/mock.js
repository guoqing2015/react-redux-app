import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { urls } from 'setting';



var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": [
    {
      "adid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
      "adname": "百度",
      "resourceurl": "//dimg04.c-ctrip.com/images/70040l000000d6vbnD079_750_284_191.jpg",
      "httplink": "https://www.baidu.com/",
      "adddesc": "暂无",
      "status": 1,
      "createtime": "2017-08-2416: 30: 48",
      "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "createusername": "knight",
      "modifytime": "2017-08-2416: 30: 48",
      "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "modifyusername": "knight"
    },
    {
      "adid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
      "adname": "QQ",
      "resourceurl": "//dimg04.c-ctrip.com/images/700k0l000000d7amhDE17_750_284_191.jpg",
      "httplink": "http://www.qq.com/",
      "adddesc": "暂无",
      "status": 1,
      "createtime": "2017-08-2416: 30: 48",
      "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "createusername": "knight",
      "modifytime": "2017-08-2416: 30: 48",
      "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "modifyusername": "knight"
    },
    {
      "adid": "28f47ad2-88a8-11e7-9349-507b9de727e3",
      "adname": "优酷",
      "resourceurl": "//dimg04.c-ctrip.com/images/700i0l000000d9qraDB71_750_284_191.jpg",
      "httplink": "http://youku.com/",
      "adddesc": "暂无",
      "status": 1,
      "createtime": "2017-08-2416: 30: 48",
      "createuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "createusername": "knight",
      "modifytime": "2017-08-2416: 30: 48",
      "modifyuser": "ca104318-42e9-4d6e-a47d-cd2f9c3283df",
      "modifyusername": "knight"
    }
  ]
}


mock.onPost(urls.ADLIST_URL).reply(200, data);
