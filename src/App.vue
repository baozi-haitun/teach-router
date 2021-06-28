<template>
  <div id="app">
    <!-- 类似<a>,router-link组件导航，to属性指定链接 -->
    <router-link to="/foo">Go to Foo</router-link>
    <hr />
    <router-link to="/bar">Go to Bar</router-link>

    <hr />
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- （路由出口） -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  created() {
    setTimeout(() => {
      console.log("go");
      this.$router.push("/bar");
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
