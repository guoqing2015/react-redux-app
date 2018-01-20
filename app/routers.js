import React from 'react';
//import {Switch, IndexRoute, Route, Redirect, BrowserRouter  } from 'react-router-dom'; //教程：https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { HashRouter, BrowserRouter, MemoryRouter, Route, Control } from 'react-keeper'
//代替react-router  参考：https://zhuanlan.zhihu.com/p/26308250

import App from 'containers/App';
//import RegisterPage from 'containers/RegisterPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import MemberPage from 'containers/MemberPage/Loadable';
import NoticePage from 'containers/NoticePage/Loadable';
import UserInfoPage from 'containers/UserInfoPage/Loadable';
import AddressPage from 'containers/AddressPage/Loadable';
import ExamListPage from 'containers/ExamListPage/Loadable';
import ExamPage from 'containers/ExamPage/Loadable';
import ExamDetailPage from 'containers/ExamDetailPage/Loadable';
import RevisePage from 'containers/RevisePage/Loadable';
import ErrancyPage from 'containers/ErrancyPage/Loadable';
import TotalPage from 'containers/TotalPage/Loadable';
import FindPage from 'containers/FindPage/Loadable';
import VipPage from 'containers/VipPage/Loadable';
import RenewPage from 'containers/RenewPage/Loadable';
import ExercisePage from 'containers/ExercisePage/Loadable';
import ExerciseListPage from 'containers/ExerciseListPage/Loadable';
import ExerciseDetailPage from 'containers/ExerciseDetailPage/Loadable';
import CollectPage from 'containers/CollectPage/Loadable';
import CollectDetailPage from 'containers/CollectDetailPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import AreaPage from 'containers/AreaPage/Loadable';
import ChartPage from 'containers/ChartPage/Loadable';
import ReadListPage from 'containers/ReadListPage/Loadable';
import ReadDetailPage from 'containers/ReadDetailPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from 'containers/Home/Loadable';

import {makeSelectIsLoggedIn, makeSelectUser} from 'redux/modules/Auth/modules/selectors';


export default (store, history) => {
  /**
   * 检查是否登录,如果没登录，将直接跳转登录页
   * @param Component
   * @param rest
   * @returns {XML}
   * @constructor
   */
  const PrivateRoute = ({component: Component, path, ...rest}) => {
    //const isLoggedIn = makeSelectIsLoggedIn()(store.getState());
      const user = makeSelectUser()(store.getState());
    //if(path === '/') {
    //  //return history.push('find');
    //  return <Route exact {...rest}  user={user} component={Component} path={path} enterFilter={[loginFilter]} history={history} />
    //} else {
    if(path != '/login') {
      return <Route exact {...rest}  user={user} component={Component} path={path} enterFilter={[loginFilter]} history={history} />
    } else {
      return <Route exact {...rest}  user={user} component={Component} path={path} history={history} />
    }
    //}

    //return (
    //  <Route
    //    {...rest}
    //    render={(props) =>
    //    isLoggedIn === true
    //    ? <Component {...props} user={user} />
    //    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    //  />
    //)

  };


  const loginFilter = (callback, props) => {
    const isLoggedIn = makeSelectIsLoggedIn()(store.getState());
    // const user = makeSelectUser()(store.getState());
    if(isLoggedIn) {
      callback();
    } else {
      // alert('请先登录')
      Control.go('/login', null)
    }
  }


  /**
   * 路由顺序要按照字母表
   */
  return (
      <App >

        <PrivateRoute cache path="/" component={Home}/>
        <PrivateRoute cache path="/about" component={AboutPage}/>
        <PrivateRoute cache path="/address" component={AddressPage}/>
        <PrivateRoute path="/area" component={AreaPage}/>
        <PrivateRoute path="/chart" component={ChartPage}/>
        <PrivateRoute path="/collect" component={CollectPage}/>
        <PrivateRoute path="/collect-detail/:id" component={CollectDetailPage}/>
        <PrivateRoute cache path="/exam-list" component={ExamListPage}/>
        <PrivateRoute path="/exam/:id" component={ExamPage}/>
        <PrivateRoute path="/exam-detail/:id" component={ExamDetailPage}/>
        <PrivateRoute path="/revise/:id" component={RevisePage}/>
        <PrivateRoute path="/errancy" component={ErrancyPage}/>
        <PrivateRoute path="/exercise" component={ExercisePage}/>
        <PrivateRoute path="/exercise-list" component={ExerciseListPage}/>
        <PrivateRoute path="/exercise-detail/:id" component={ExerciseDetailPage}/>
        <PrivateRoute path="/find" component={FindPage}/>
        <PrivateRoute path="/login" component={LoginPage}/>
        <PrivateRoute path="/member" component={MemberPage}/>
        <PrivateRoute path="/notice" component={NoticePage}/>
        <PrivateRoute cache path="/read-list" component={ReadListPage}/>
        <PrivateRoute path="/read-detail/:id" component={ReadDetailPage}/>
        <PrivateRoute path="/renew" component={RenewPage}/>
        <PrivateRoute path="/total" component={TotalPage}/>
        <PrivateRoute path="/user-info" component={UserInfoPage}/>
        <PrivateRoute path="/vip" component={VipPage}/>
        {/*<Route path="*" component={NotFoundPage} status={404} />*/}
      </App >
  );
};
