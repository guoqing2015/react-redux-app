import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;}
body{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;width:100%;-webkit-overflow-scrolling: touch; }
article,aside,blockquote,body,button,code,dd,details,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul{margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box}
body,html{overflow-x:hidden}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
body,button,input,select,textarea{font-size: 0.7rem; font-family: -apple-system,Helvetica,Hiragino Sans GB W3,Microsoft YaHei,arial,sans-serif; color:#333;line-height:1.5}
input,select,textarea{font-size:100%}
table{border-collapse:collapse;border-spacing:0}
th{text-align:inherit}
fieldset,img{border:0}
del{text-decoration:line-through}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}
ol,ul{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}
q:after,q:before{content:''}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-.5em}
sub{bottom:-.25em}
a:active,a:hover{text-decoration:none}
a,ins{text-decoration:none}
button{overflow:visible;border:0 none;background-color:transparent}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
input,textarea{background:0 0;border:none}
input:focus,textarea:focus{-webkit-user-modify:read-write-plaintext-only}
input[type=password]{-webkit-text-security:disc}
button:focus,input:focus,textarea:focus{outline:0}


.clearfix {
	&:after,&:before{display:table;line-height:0;content:""}
  &:after{clear:both}
}
.border-bottom { border-bottom: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-bottom-width: 1px; }
.border-right { border-right: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-right-width: 1px; }
.border-left { border-left: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-left-width: 1px; }
.border-top { border-top: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-top-width: 1px; }
.border-top-bottom { border-top: 1px solid #EDEDED; border-bottom: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-top-width: 1px; border-bottom-width: 1px; }


html, body { height: 100%; }
#app {
	position: absolute;
  bottom: 0;
  width: 100%;
  top: 0;
  overflow-y: scroll;
  background: #EEEFF4;
}

.white-button-wrap {
    float: left;
    margin-top: 1rem;
    width: 100%;
    padding: 0 1rem;
}

.white-button {
    color: #000000;
    background-color: #F8F8F8;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    line-height: 2.55555556;
    border-radius: 5px;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
}

.white-button:after {
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 10px;
}

#__vconsole .vc-switch {
  right: 38%!important;
}


 
`;

import './iconfont/iconfont.css';
import './assets/css/react-tabs.css';
import "chartist/dist/scss/chartist.scss";
import './assets/css/flex.css';
