import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //vue.router安装过程:引入


Vue.config.productionTip = false

Vue.use(VueRouter) //vue.router安装过程:使用

// 1.引入路由组件
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import User from './components/User.vue'



// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const User = { template: '<div>user</div>' }
// const User = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }

//2.定义路由
const routes = [
  { path: '/foo/:id/:username', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User }
]
//3.创建router实例
const router = new VueRouter({ //（定义）
  mode: "hash",
  routes   //routes:routes
})


// 4. 创建和挂载根实例。
new Vue({
  router,  //（使用）
  render: h => h(App),
}).$mount('#app')

