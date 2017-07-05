<template>
  <div class="homelist">
      <div class="item" v-for="(item,i) in arr">
          <!--头像-->
          <div class="avatar">
            <img :src="avatarUrl[i].avatarUrl">
            <div class="bottom_line"></div>
          </div>
          <!--中间内容-->
          <div class="item_text">
            <!--名字-->
            <div class="item_name">{{ item.name }}<img src="../../assets/images/qqnews_03.jpg" class="item_news" v-if="item.bol"></div>
            <!--内容-->
            <div class="item_content">{{ item.content }}</div>
          </div>
          <!--右侧内容-->
          <div class="item_right">
            <!--发言时间-->
            <div class="item_time">{{ item.time }}</div>
            <!--发言数量-->
            <div class="item_speak" v-if="!item.bol">{{ item.speak }}</div>
            <!--信息数量-->
            <div class="item_num" v-else>{{ item.num }}</div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
      props:['arr','avatarUrl'],
      data:function () {
          return{

          }
      }
  }
</script>
<style>
  /*清除浮动*/
  /*.clearfix::after{content: "200B";height:0;font-size: 0;display: block;clear: both;}*/
  .item{padding-top: 0.24rem;display: flex;position: relative;border-bottom: 1px solid #dedfe0;}
  .item_border{border-bottom: 1px solid #dedfe0;}
  /*头像*/
  .avatar{height: 1.5rem;width: 1.5rem;margin: 0 0.36rem;padding-bottom: 0.24rem;position: relative}
  .avatar img{border-radius: 50%}
  .bottom_line{height: 1px;background-color: #fff;position: absolute;bottom: -1px;width: 2.2rem;z-index: 1;margin: 0 -0.36rem}
  /*中间内容*/
  .item_text{text-align: left;position: relative}
  /*新闻图标*/
  .item_news{width: 0.45rem;position: relative;top: 0.04rem;margin-left: 0.18rem;}
  /*名字*/
  .item_name{font-size: 0.52rem;padding-top: 0.1rem;}
  /*内容*/
  .item_content{font-size: 0.4rem;padding-top: 0.1rem;color: #777}
  /*右侧内容*/
  .item_right{position: absolute;right: 0.4rem;top: 0.5rem;}
  /*发言时间*/
  .item_time{font-size: 0.34rem;color: #777;margin-bottom: 0.2rem;}
  /*发言数量*/
  .item_speak{font-size: 0.36rem;height: 0.58rem;width: 1.04rem;background-color: #96d7f0;line-height:0.6rem;color: #fff;
  border-radius: 0.3rem;}
  /*信息数量*/
  .item_num{width: 0.58rem;height: 0.58rem;border-radius: 50%;background-color: #f74c31;color: #fff;font-size: 0.34rem;
  line-height: 0.58rem;float: right}
</style>
