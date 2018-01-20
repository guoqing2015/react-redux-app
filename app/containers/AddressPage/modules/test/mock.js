import { urls } from 'setting';


mock.onPost(urls.QUERY_ADDRESS).reply(200,
  {
    "errcode": 7001,
    "errmsg": "",
    "content": {
      province: "安徽省",
      city: "安庆市",
      district: "迎江区",
      detail_address: "长风乡长风村",
      recipient_name: "郭清",
      postcode: "246008",
      mobile: "18020285885"
    }
  }
);

