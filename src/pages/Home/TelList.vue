<template>
  <div class="tellist">
      <div class="tel_item" v-for="item in arr">
          <!--头像-->
          <div class="tel_avatar"><img :src="item.url"></div>
          <!--内容-->
          <div class="tel_text">
              <!--内容左侧-->
              <div class="tel_left">
                  <div class="tel_name"><span :class="{ac:item.bol}">{{ item.name }}</span><span class="fiveG" v-if="item.show">4G</span><img src="../../assets/images/wifi_03.jpg" class="wifi" v-else></div>
                  <div class="tel_des"><img :src="item.arrow"> QQ电话</div>
              </div>
              <!--内容右侧-->
              <div class="tel_right">{{ item.time }}<img src="../../assets/images/tel_icon_03.jpg"></div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
      props:['arr']
  }
</script>
<style>
  .tel_item{height: 2.03rem;display: flex;}
  .tel_avatar{width: 2.26rem;display: flex;align-items: center;justify-content: center}
  .tel_avatar img{width: 1.5rem;}
  .tel_text{text-align: left;display: flex;justify-content: space-between;border-bottom: 1px solid #dedfe0;flex-grow: 1}
  .tel_name span{font-size: 0.54rem;}
  .tel_name .fiveG{font-size: 0.4rem;color: #bbb;}
  .fiveG{margin-left: 0.32rem;}
  .wifi{width: 0.5rem;height: 0.38rem;margin-left: 0.32rem;}
  .tel_des{font-size: 0.4rem;color: #787878;margin-top: 0.05rem;}
  .tel_des img{width: 0.3rem;}
  .tel_right{font-size: 0.46rem;color: #bbb;display: flex;align-items: center;margin-right: 0.3rem;}
  .tel_right img{width: 0.75rem;margin-left: 0.2rem;}
  .ac{color: #ff4222;}
</style>
