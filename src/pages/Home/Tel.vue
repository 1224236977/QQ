<template>
  <div class="Tel">
      <!--头部-->
      <Myheader>
        <div class="header_text">
          <div class="information"><router-link to="/Home">消息</router-link></div>
          <div class="tel active">电话</div>
        </div>
        <div class="header_right"><img src="../../assets/images/header_right_03.jpg"></div>
      </Myheader>
      <Search :searchText="searchText"></Search>
      <Function :arr="Fnarr" class="borderN"></Function>
      <div class="call">消息记录</div>
      <TelList :arr="Telarr"></TelList>
  </div>
</template>
<script>
  import Myheader from '../../components/Header/Header.vue'
  import Search from '../../components/Search/Search.vue'
  import Function from '../../components/Function/Function.vue'
  import TelList from './TelList.vue'
  export default{
      components:{
          Myheader,
          Search,
          Function,
          TelList
      },
      data:function () {
          return{
            searchText:'搜索',
            Fnarr:[
              {url:require('../../assets/images/tel_03.jpg'),des:'电话黄页'},
              {url:require('../../assets/images/tel_05.jpg'),des:'专线电话'},
            ],
            Telarr:[
              {
                  url:require('../../assets/images/tel_avatar_13.jpg'),
                  name:"同学 汤波",
                  arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                  time:"06-10",
                  bol:true,
                  show:true
              },
              {
                url:require('../../assets/images/tel_avatar_15.jpg'),
                name:"VV酱",
                arrow:require('../../assets/images/tel_arrow_03.jpg'),
                time:"06-10",
                bol:false,
                show:false
              },
              {
                url:require('../../assets/images/tel_avatar_10.jpg'),
                name:"双风亚索",
                arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                time:"06-10",
                bol:true,
                show:true
              },
              {
                url:require('../../assets/images/tel_avatar_13.jpg'),
                name:"同学 汤波",
                arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                time:"06-10",
                bol:true,
                show:true
              },
              {
                url:require('../../assets/images/tel_avatar_15.jpg'),
                name:"VV酱",
                arrow:require('../../assets/images/tel_arrow_03.jpg'),
                time:"06-10",
                bol:false,
                show:false
              },
              {
                url:require('../../assets/images/tel_avatar_10.jpg'),
                name:"双风亚索",
                arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                time:"06-10",
                bol:true,
                show:true
              },
              {
                url:require('../../assets/images/tel_avatar_13.jpg'),
                name:"同学 汤波",
                arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                time:"06-10",
                bol:true,
                show:true
              },
              {
                url:require('../../assets/images/tel_avatar_15.jpg'),
                name:"VV酱",
                arrow:require('../../assets/images/tel_arrow_03.jpg'),
                time:"06-10",
                bol:false,
                show:false
              },
              {
                url:require('../../assets/images/tel_avatar_10.jpg'),
                name:"双风亚索",
                arrow:require('../../assets/images/tel_arrow2_03.jpg'),
                time:"06-10",
                bol:true,
                show:true
              }
            ]
          }
      }
  }
</script>
<style>
  .Tel .item_pic{width: 1.15rem;height: 1.15rem;}
  .borderN{border-bottom: none;}
  .call{height: 0.9rem;line-height: 0.9rem;background-color: #f7f7f8;padding-left:0.38rem;color: #777;font-size: 0.42rem;text-align: left}
</style>
