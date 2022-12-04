import {createApp} from 'vue'
import App from './App.vue'

import 'styles/resets.css';
import 'styles/border.css';
import 'js/fastclick.js';
import 'js/common.js';

import {store} from './store/index.js'
import router from './router/index.js'

import MyUiComponents from './libs/jspp-ui/index.js'

// const app = createApp(App)  应用实例
/*
*应用实例
* createApp -> 创建APP -> 返回一个应用实例
* 应用实例主要是用来注册全局组件的
* */
const app = createApp(App)
    .use(MyUiComponents)
    .use(store)
    .use(router)
console.log(app)
/**
 * 应用实例暴露了很多方法
 * 大多数方法都会返回createApp创建出来的应用实例
 * 允许链式操作
 *
 * component: 全局注册组件
 * config：   应用配置
 * directive: 全局注册自定义指令
 * mixin: 全局注册混入器
 * mount: 挂载组件
 * provide: 注入全局跨组件层级的属性
 * use: 使用插件
 */


/*
* const appComponent = .mount('#app') 根组件
* mount方法执行返回的是根组件实例
* 根组件的本质就是一个对象
* 根组件是Vue渲染的起点
* 根元素是一个HTML元素
* createApp执行创建Vue应用数量是，需要一个HTML根元素
* <div id="app"></div>
*
* */
const vm1 = app.mount('#app');

/*
* 每个组件都有自己的组件实例
* 一个应用中所有的组件都共享一个应用实例
* 无论是根组件还是应用内其他组件
* 配置选项、组件行为都是一样的
* */
