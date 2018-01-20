/**
 * 开发时页面按照375px的大小设置，1rem为20px；设计按750px的大小设计页面
 */
((doc, win) => {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if( clientWidth > 400 & clientWidth<=500){
        clientWidth = 400;
      }
      if( clientWidth > 500){
        // clientWidth = 500; //TODO 打开注释
      }
      var fontSize = 20 * (clientWidth / 375);
      docEl.style.fontSize = fontSize + 'px';

      var dpi =  window.devicePixelRatio;
      var viewport = document.querySelector('meta[name="viewport"]');

      docEl.setAttribute('data-dpi',dpi);
      var scale = 1/dpi;
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);
