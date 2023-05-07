// 该文件是整个项目的入口文件
// 引入 Vue
import Vue from 'vue'
// 引入 App.vue,它是所有组件的父组件
import App from './App.vue'
// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 关于不同版本的Vue:
// 1.vue.js与vue.runtime.xxx.js的区别：
// (1).vue.js是完整版的Vue,包含：核心功能+模板解析器。
// (2).vue.runtime.xxx.js是运行版的Vue,只包含：核心功能：没有模板解析器。
// 2.因为vue.runtime,xxx.js没有模板解析器，所以不能使用template配置项，需要使用
// render函数接收到的createElement函数去指定具体内容。

// 创建 Vue 实例对象 vm
new Vue({
    // 将 App 组件放入容器中，在原先写的是 components: { App }
    render: h => h(App),
    // 这个也可以写成 el: "#app"
}).$mount('#app')