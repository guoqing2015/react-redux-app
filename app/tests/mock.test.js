
//import '../containers/Auth/modules/test/mock';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { app, urls } from '../setting'

// window.mock = new MockAdapter(axios,  { delayResponse: 1000 });
window.mock = new MockAdapter(axios);

mock.onGet(`${urls.AUTHENTICATE_URL}/${app.appid}/${app.appsecret}`).reply(200, "GVXup/NsEUde79HWXQALyw==");

require('../redux/modules/Collect/modules/test/mock')
// require('../redux/modules/Cms/modules/test/mock')
require('../redux/modules/Chart/modules/test/mock')
require('../redux/modules/Category/modules/test/mock')
require('../redux/modules/Area/modules/test/mock')
// require('../containers/Cms/modules/test/mock')
// require('./modules/test/mock')
require('../containers/Auth/modules/test/mock')
require('../containers/AddressPage/modules/test/mock')
require('../containers/ReadListPage/modules/test/mock')
require('../containers/Collect/modules/test/mock')
require('../containers/CollectDetailPage/modules/test/mock')
// require('./modules/test/mock')
require('../containers/FindPage/modules/test/mock')
require('../containers/LoginPage/modules/test/mock')
require('../containers/RevisePage/modules/test/mock')
require('../containers/ExercisePage/modules/test/mock')
require('../containers/ExerciseListPage/modules/test/mock')
require('../containers/ExerciseDetailPage/modules/test/mock')
require('../containers/ExamListPage/modules/test/mock')
require('../containers/ExamPage/modules/test/mock')
require('../containers/ExamDetailPage/modules/test/mock')
require('../containers/NoticePage/modules/test/mock')
require('../containers/VipPage/modules/test/mock')
require('../containers/RenewPage/modules/test/mock')
require('../containers/NoticePage/modules/test/mock')
require('../containers/RevisePage/modules/test/mock')


