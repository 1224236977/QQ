<template>
  <div id="app">
    <router-view></router-view>
    <Tabber></Tabber>
  </div>
</template>

<script>
  import Tabber from './components/Tabbar/Tabbar.vue'
  export default {
    name: 'app',
    components:{
      Tabber
    },
    created:function () {
      this.$router.push('/Home')
    }
  }

  function windowSize() {
    // 1 获取html元素
    var dom=document.documentElement;

    // 2 获取设备宽度
    var w=dom.clientWidth;

    // 3 改变html字体大小
    dom.style.fontSize= w/12.42+"px";

  }

  windowSize()

  window.onresize=function(){
    windowSize()
  }
</script>

<style>
*{margin: 0;padding: 0}
li{list-style: none}
a{text-decoration: none}
img{width: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 1.92rem 0 1.48rem 0;
}
</style>
