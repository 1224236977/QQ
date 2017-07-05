<template>
  <div class="dynamic">
    <!--头部-->
    <Myheader>
      <h5 class="dynamic_tit">动态</h5>
      <a href="##" class="dynamic_right">更多</a>
    </Myheader>
    <Search :searchText="searchText"></Search>
    <Function :arr="Fnarr"></Function>
    <ContactsList class="magT_58" :arr="Listarr"></ContactsList>
    <ContactsList class="magT_58" :arr="Listarr2"></ContactsList>
  </div>
</template>
<script>
  import Myheader from '../../components/Header/Header.vue'
  import Search from '../../components/Search/Search.vue'
  import Function from '../../components/Function/Function.vue'
  import ContactsList from './ContactsList.vue'
  export default{
    components:{
      Myheader,
      Search,
      Function,
      ContactsList
    },
    data:function () {
      return{
        searchText:'搜索电影/音乐/商品...',
        Fnarr:[
            {url:require('../../assets/images/function_09.jpg'),des:'好友动态'},
            {url:require('../../assets/images/function_11.jpg'),des:'附近'},
            {url:require('../../assets/images/function_13.jpg'),des:'兴趣部落'},
        ],
        Listarr:[
            {url:require('../../assets/images/contacts_item_pic_03.jpg'),name:'游戏',bol:false},
            {url:require('../../assets/images/contacts_item_pic_01.jpg'),name:'日记',bol:false},
            {url:require('../../assets/images/contacts_item_pic_02.jpg'),name:'看点',bol:false},
            {url:require('../../assets/images/contacts_item_pic_04.jpg'),name:'京东购物',bol:false},
            {url:require('../../assets/images/contacts_item_pic_05.jpg'),name:'阅读',bol:false},
            {url:require('../../assets/images/contacts_item_pic_06.jpg'),name:'动漫',bol:false},
            {url:require('../../assets/images/contacts_item_pic_07.jpg'),name:'音乐',bol:false},
            {url:require('../../assets/images/contacts_item_pic_08.jpg'),name:'NOW直播',bol:false},
            {url:require('../../assets/images/contacts_item_pic_09.jpg'),name:'热门活动',bol:true},
        ],
        Listarr2:[
          {url:require('../../assets/images/contacts_item_pic_10.jpg'),name:'运动',bol:false},
          {url:require('../../assets/images/contacts_item_pic_01.jpg'),name:'日记',bol:false},
          {url:require('../../assets/images/contacts_item_pic_02.jpg'),name:'看点',bol:false},
          {url:require('../../assets/images/contacts_item_pic_04.jpg'),name:'京东购物',bol:true},
        ]
      }
    }
  }
</script>
<style>
  .dynamic{background-color: #f7f7f9}
  .dynamic_tit{font-size: 0.52rem;color: #fff;letter-spacing: 0.05rem;padding-top: 0.15rem;}
  .dynamic_right{font-size: 0.5rem;color: #fff;padding-top: 0.2rem;}
  .magT_58{margin-top: 0.58rem;}
</style>
