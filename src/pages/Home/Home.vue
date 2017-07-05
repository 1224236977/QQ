<template>
  <div class="home">
    <!--头部-->
    <Myheader>
        <div class="header_text">
          <div class="information active">消息</div>
          <div class="tel"><router-link to="/Tel">电话</router-link></div>
        </div>
        <div class="header_right"><img src="../../assets/images/header_right_03.jpg"></div>
    </Myheader>
    <Search :searchText="searchText"></Search>
    <!--广告-->
    <div class="advertisement">
        <img src="../../assets/images/advertisement_02.jpg">
        <!--删除-->
        <div class="advertisement_del"></div>
    </div>
    <!--信息列表-->
    <HomeItem :arr="HomeArr" :avatarUrl="avatarUrl"></HomeItem>
  </div>
</template>
<script>
  import Myheader from '../../components/Header/Header.vue'
  import Search from '../../components/Search/Search.vue'
  import HomeItem from './HomeItem.vue'
  export default{
      components:{
          Myheader,
          HomeItem,
          Search
      },
      data:function () {
        return{
            searchText:'搜索',
            HomeArr:[
              {
                "avatarUrl":"../../assets/images/home_item_avatar_01.jpg",
                "name":"Swiper中文网",
                "content":"北京-前端-xlw：挺近的",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_05.jpg",
                "name":"从来不躲猫猫",
                "content":"我一脚飞过来：水平比以前差太多了",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_03.jpg",
                "name":"蟹堡王总店",
                "content":"joe：血战英雄",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_04.jpg",
                "name":"腾讯新闻",
                "content":"美女毕业典礼偷亲校长：大学圆满了",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":true
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_07.jpg",
                "name":"①群.凤男唐门交流群",
                "content":"醉千城：？",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_06.jpg",
                "name":"魔兽后裔粉丝群3",
                "content":"无奈。。。：。。。。",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_08.jpg",
                "name":"猫姐老年粉丝合唱团",
                "content":"长生剑 中毒：肯定p",
                "time":18.29,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_09.jpg",
                "name":"javaweeb学习交流",
                "content":"勿忘初心：这表情点100个赞",
                "time":18.26,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_01.jpg",
                "name":"Swiper中文网",
                "content":"北京-前端-xlw：挺近的",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_05.jpg",
                "name":"从来不躲猫猫",
                "content":"我一脚飞过来：水平比以前差太多了",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_03.jpg",
                "name":"蟹堡王总店",
                "content":"joe：血战英雄",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_04.jpg",
                "name":"腾讯新闻",
                "content":"美女毕业典礼偷亲校长：大学圆满了",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":true
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_07.jpg",
                "name":"①群.凤男唐门交流群",
                "content":"醉千城：？",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_06.jpg",
                "name":"魔兽后裔粉丝群3",
                "content":"无奈。。。：。。。。",
                "time":18.31,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_08.jpg",
                "name":"猫姐老年粉丝合唱团",
                "content":"长生剑 中毒：肯定p",
                "time":18.29,
                "speak":"99+",
                "num":1,
                "bol":false
              },
              {
                "avatarUrl":"../../assets/images/home_item_avatar_09.jpg",
                "name":"javaweeb学习交流",
                "content":"勿忘初心：这表情点100个赞",
                "time":18.26,
                "speak":"99+",
                "num":1,
                "bol":false
              }
            ],
            avatarUrl:[
                {avatarUrl:require('../../assets/images/home_item_avatar_01.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_05.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_03.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_04.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_06.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_07.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_08.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_09.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_01.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_05.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_03.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_04.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_06.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_07.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_08.jpg')},
                {avatarUrl:require('../../assets/images/home_item_avatar_09.jpg')},
            ]
        }
      },
//      mounted:function () {
//        this.Axios()
//      },
//      methods:{
//        Axios:function () {
//            this.axios.get('/api/homeData').then((response) => {
//              this.HomeArr=response.data.data.Homearr
//            })
//        }
//      }
  }
</script>
<style>
  /*头部*/
  .header_text{display: flex;height: 0.94rem;width: 4.16rem;font-size: 0.44rem;line-height: 0.94rem;border: 2px solid white;
  border-radius: 4px;color: #fff}
  .header_text a{color: #fff}
  .information,.tel{width: 50%;}
  .header_text .active{background-color: #fff;color: #12b7f5;}
  .header_right{width: 0.56rem;height: 0.56rem;}
  .header_right img{margin-right: 0.1rem;margin-bottom: 0.12rem}

  /*广告*/
  .advertisement{height: 1.5rem;background-size: cover;
  position: relative}
  .advertisement_del{width: 0.4rem;height: 0.4rem;position: absolute;top: 0.56rem;right: 0.46rem}
</style>
