
//开发环境下模拟接口数据
//if (process.env.NODE_ENV === 'development') {
  //require('./tests/mock.test');
//}

var VConsole = require( './tests/vconsole.min');
var vConsole = new VConsole();



// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter  } from 'react-router-dom'; //教程：https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { HashRouter, Route, BrowserRouter } from 'react-keeper'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import {createHistory} from 'history'; //这里的history暂时用3.0.0版本，因为高版本已移除getCurrentLocation，会使得react-keeper报错。参考文档：https://zhuanlan.zhihu.com/p/20799258?refer=jscss
import createHistory from 'history/lib/createBrowserHistory'
import getRoutes from './routers';


import configureStore from './configureStore';

// Import i18n messages
// import { translationMessages } from './i18n';


//  自适应页面
import './utils/caculateRem';

// ajax配置
import './utils/ajax';


// Import CSS reset and Global Styles
import './global-styles';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// }, () => {
//   document.body.classList.remove('fontLoaded');
// });

// Create redux store with history
const initialState = {};
const history = createHistory();

// const history = useRouterHistory(createBrowserHistory)({
//   basename: '/base-path'
// })

const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store} >
        {/*<BrowserRouter history={history} basename="/test">*/}
      <BrowserRouter history={history}>
        {getRoutes(store, history)}
      </BrowserRouter>
    </Provider>,
    MOUNT_NODE
  );
};

render();


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
} else if (process.env.NODE_ENV === 'development') {
}

