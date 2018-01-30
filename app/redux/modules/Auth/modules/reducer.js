/*var data = {
  "errcode": 7001,
  "errmsg": "",
  "content": {
    "userid": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
    "usertype": "02",
    "userlevel": 1,
    "account": "18020285885",
    "password": "eEvJ43dJ12VzKZ1QGgvgeA==",
    "mail": "971456243@qq.com",
    "mobile": "18020285885",
    "wallet": 0.00,
    "points": 0.00,
    "username": "郭清",
    "nickname": "郭清",
    "gender": 1,
    "headportrait": "http://www.qqzhi.com/uploadpic/2015-02-02/211841154.jpg",
    "telephone": null,
    "wechat": null,
    "openid": "odd69v33MQxUnChmQFoGHRh_EMJQ",
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
    "birthday": "1989-12-11",
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
    "createtime": "2017-12-02 21:30:58",
    "createuser": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
    "createusername": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
    "modifytime": "2017-12-02 21:30:58",
    "modifyuser": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e",
    "modifyusername": "7ee34cf9-35e8-48be-ad50-4ada6a8f809e"
  }
}*/


import { fromJS } from 'immutable';

import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
  SET_OPENID,
  GET_OPENID,
  GET_OPENID_SUCCESS,
  GET_OPENID_ERROR,
  LOGGIN,
  LOGOUT
} from './constants';


function checkIsLoggin(user) {
  if (user && user.mobile) return true;
  return false;

}


const initialState = fromJS({
  loading: false,
  error: false,
  openid: false,
  user: false,
  isLoggedIn: false,
  updateLoading: false,
  isUpdated: false

});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPENID:
      return state
        .set('openid', action.payload.openid)
    case GET_OPENID:
      return state
        .set('error', false)
        .set('loading', true)
    case GET_OPENID_SUCCESS:
      let content = JSON.parse(action.response.content);
      return state
        .set('loading', false)
        .set('error', false)
        .set('openid', content.openid)
    case GET_OPENID_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
    case GET_USER_INFO:
      return state
        .set('user', false)
        .set('loading', true)
        .set('error', false);
    case GET_USER_INFO_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.content)
        //.set('user', data.content) //TODO
        .set('isLoggedIn', checkIsLoggin(action.response.content))
    case GET_USER_INFO_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)

    case UPDATE_USER_INFO:
      return state
        .set('isUpdated', false)
        .set('updateLoading', true)
    case UPDATE_USER_INFO_SUCCESS:
      return state
        .set('updateLoading', false)
        .set('isUpdated', true)
        // .set('user', action.response.content)
    case UPDATE_USER_INFO_ERROR:
      return state;
      return state
        .set('isUpdated', false)
        .set('updateLoading', false)

    case LOGGIN:
      return state
        .set('isLoggedIn', true)
    case LOGOUT:
      return state
      // .set('user', false)
        .set('isLoggedIn', false)
    default:
      return state;
  }
}

export default authReducer;
