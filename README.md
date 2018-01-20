## 待更新

[demo](https://guoqing2013.github.io/react-redux-app/build)


Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, styled-components, redux-saga, FontFaceObserver


[styled-components github](https://github.com/styled-components/styled-components)

[styled-components使用说明](https://www.styled-components.com/docs/advanced)


CSS Module还是JS和CSS分离的写法，而styled components实际上是在JS上写CSS。

https://github.com/css-modules/css-modules
http://www.ruanyifeng.com/blog/2016/06/css_modules.html
CSS Modules 原理:
通过在每个 class 名后带一个独一无二 hash 值，这样就不有存在全局命名冲突的问题了。这样就相当于伪造了“局部”样式。

```
// 原始样式 styles.css
.title {
  color: red;
}

// 原始模板 demo.html
import styles from 'styles.css';

<h1 class={styles.title}>
  Hello World
</h1>


// 编译后的 styles.css
.title_3zyde {
  color: red;
}

// 编译后的 demo.html
<h1 class="title_3zyde">
  Hello World
</h1>
```





react: ui渲染
redux: 管理数据
react-router: 管理路由
immutable


参考文档：https://github.com/bailicangdu/react-pxq


字体图标

模拟数据： axios-mock-adapter
http://blog.csdn.net/zsl_955200/article/details/71268101


参考：[https://github.com/react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
