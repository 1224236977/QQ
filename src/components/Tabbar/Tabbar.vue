<template>
  <div class="tabbar">
    <Tabbarwrap :sel="selected">
      <Tabbaritem txt="消息" mark="Home" @change="getVal">
        <img src="../../assets/images/home_tabbar_03.jpg" slot="normalImg">
        <img src="../../assets/images/home_tabbar_a_03.jpg" slot="activeImg">
      </Tabbaritem>
      <Tabbaritem txt="联系人" mark="Dynamic" @change="getVal">
        <img src="../../assets/images/dynamic_tabbar_03.jpg" slot="normalImg">
        <img src="../../assets/images/dynamic_tabbar_a_03.jpg" slot="activeImg">
      </Tabbaritem>
      <Tabbaritem txt="动态" mark="Contacts" @change="getVal">
        <img src="../../assets/images/contacts_tabbar_03.jpg" slot="normalImg">
        <img src="../../assets/images/contacts_tabbar_a_03.jpg" slot="activeImg">
      </Tabbaritem>
    </Tabbarwrap>
  </div>
</template>
<script>
  import Tabbarwrap from './Tabbarwrap.vue'
  import Tabbaritem from './Tabbaritem.vue'
  export default {
    data:function () {
      return{
        selected:"Home"
      }
    },
    methods:{
      getVal:function (val) {
        this.selected=val
      }
    },
    components:{
      Tabbarwrap,
      Tabbaritem
    }
  }
</script>
<style>
  .tabbar{position: fixed;bottom: 0;width: 100%;border-top: 1px solid #bfbfbf;color: #808080;font-size: 0.26rem;
    padding-top: 0.27rem;padding-bottom: 0.05rem;z-index: 100;background: #fff}
  .tabbar img{width: 0.74rem}
  .tabbaritem_ac{color: #14ade7}
</style>
