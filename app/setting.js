// http://yasiapp.sysstudio.com

export const app = {
  //url: "http://api.sysstudio.com",
  //resourceUrl: "http://api.sysstudio.com/api/cms/addcomment",
   url: "http://api.languagedu.cn",
   resourceUrl: "http://api.languagedu.cn/api/cms/addcomment",
  wechatAppid: "wx2d99c08880285503",
  wechatAppSecret: "698e147f9fec3e4d5f1c74294bc2cd89",
  accountid: "HEDV35FASG-DGW423A-34TGGW53AAD66",
  appid: '111',
  appsecret: '123',
  //indexUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d99c08880285503&redirect_uri=http%3A%2F%2Fyasiapp.sysstudio.com&response_type=code&scope=snsapi_base#wechat_redirect",
  indexUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d99c08880285503&redirect_uri=http%3A%2F%2Fwebapp.languagedu.cn&response_type=code&scope=snsapi_base#wechat_redirect",
}

// https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code




export const urls = {
  ACCESS_TOKEN_URL:  app.url + "/api/wechat/getaccesstoken",
  WXCONFIG_URL:  app.url + "/api/wechat/getwxconfig",

  AUTHENTICATE_URL: app.url + "/api/base/authenticate", //
  VALIDATION_CODE_URL: app.url + "/api/base/getverifycode", //发送验证码
  LOGIN_URL: app.url + "/api/user/login", //登录接口

  EXAM_LIST_URL: app.url + "/api/exam/examlist",
  EXAM_URL: app.url + "/api/exam/examdetail",
  EXAM_DETAIL_URL: app.url + "/api/exam/completeexamdetail",
  EXAM_SUBMIT_URL: app.url + "/api/exam/submitexam",
  REVISE_DETAIL_URL: app.url + "/api/exam/examdetail4revise",
  REVISE_SUBMIT_URL: app.url + "/api/exam/submitexam4revise",

  BUILD_PRACTICE_URL: app.url + "/api/practice/buildpractice",
  PRACTICE_URL: app.url + "/api/practice/practicedetail",
  PRACTICE_LIST_URL: app.url + "/api/practice/practicelist",
  PRACTICE_DETAIL_URL: app.url + "/api/practice/practicedetail",
  PRACTICE_SUBMIT_URL: app.url + "/api/practice/submitpractice",

  SUBJECT_DETAIL_URL: app.url + "/api/subject/subjectdetail",
  QUERY_COLLECT_URL: app.url + "/api/user/collectlist",
  TOGGLE_COLLECT_URL: app.url + "/api/user/collect",
  COLLECT_DETAIL_URL: app.url + "/api/user/collectdetail",

  QUERY_COMMENT_URL:  app.url + "/api/cms/commentlist",
  ADD_COMMENT_URL:  app.url + "/api/cms/addcomment",

  USER_INFO_URL: app.url + "/api/user/getbyid", //获取会员信息
  USER_INFO_UPDATE_URL: app.url + "/api/user/update", //更新会员信息

  NOTICE_LIST_URL:  app.url + "/api/user/messagelist", // 获取系统消息列表
  UPEATE_NOTICE_URL:  app.url + "/api/user/updatemessage", // 更新系统消息状态

  CMS_LIST_URL:  app.url + "/api/cms/cmslist",
  QUERY_DICT: app.url + "/api/base/getdict",
  QUERY_CATEGORY_ITEM: app.url + "/api/subjectitem/getitem",


  QUERY_ADDRESS:  app.url + "/api/app.customer/req_query_cust_address", //获取地址列表
  UPDATE_ADDRESS: app.url + "/api/app.customer/req_update_cust_address", //新增或编辑地址接口
  QUERY_AREA_URL:  app.url + "/api/base/getaddress", //获取地址列表

  ADLIST_URL: app.url + "/api/ad/adlist",
  QUERY_TARIFF_URL: app.url + "/api/tariff/getlist",
  USER_TARIFF_URL: app.url + "/api/user/usertariff",
  TARIFF_TRADE_URL: app.url + "/api/tariff/trade",
  TARIFF_QUERY_URL: app.url + "/api/tariff/tradequery",

  EXAM_ANALYSIS_URL: app.url + "/api/exam/examanalysis",
  PRACTICE_ANALYSIS_URL: app.url + "/api/practice/practiceanalysis",

  ERRANCY_LIST_URL: app.url + "/api/subject/errsubjectlist",
}
