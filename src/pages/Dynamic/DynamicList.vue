<template>
  <div class="dynamiclist">
    <div class="dynamic_wrap" v-for="(item,i) in arr">
        <div class="dynamic_item" :class="{borderN:item.bol}" @click="fn(i)">
          <!--箭头-->
          <div class="dynamic_arrow">
            <img src="../../assets/images/dynamic_arrow_03.jpg" v-show="!item.bol">
            <img src="../../assets/images/dynamic_arrow_04.jpg" v-show="item.bol" class="bottom_arrow">
          </div>
          <!--名称-->
          <div class="dynamic_name">{{ item.name }}</div>
          <!--在线人数与不在线人数-->
          <div class="dynamic_num"><span>{{ item.num }}</span>/<span>{{ item.num2 }}</span></div>
        </div>
        <!--用户名称-->
        <div class="userlist" v-if="item.bol">
          <div class="dynamic_user" v-for="item2 in arr[i].userArr">
            <div class="user_avatar"><img :src="item2.avatar"></div>
            <div class="user_text">
              <div class="user_name">
                <span>{{ item2.name }}</span>
                <img src="../../assets/images/dynamic_user_03.jpg" class="svip">
              </div>
              <div class="user_des">
                <span>{{ item2.des }}</span>
                <img src="../../assets/images/dynamic_user_04.jpg">
                <img src="../../assets/images/dynamic_user_05.jpg">
                <span class="maL_6">{{ item2.des2 }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
      props:['arr'],
      data:function () {
          return{
              bol:false
          }
      },
      methods:{
        fn:function (i) {
          this.arr[i].bol=!this.arr[i].bol
        }
      }
  }
</script>
<style>
  /*用户列表*/
  .dynamiclist{border-top: 1px solid #dedfe0;background-color: #fff;text-align: left}
  .dynamic_item{border-bottom: 1px solid #dedfe0;padding-left: 0.4rem;height: 1.37rem;}
  /*箭头*/
  .dynamic_arrow{width: 0.22rem;height: 0.3rem;display: inline-block}
  .bottom_arrow{width: 0.3rem;height: 0.22rem;}
  /*名称*/
  .dynamic_name,.dynamic_num{display: inline-block;}
  .dynamic_name{font-size: 0.52rem;margin-left: 0.1rem}
  /*在线人数与不在线人数*/
  .dynamic_num{font-size: 0.34rem;color: #999;float: right;margin: 0.56rem 0.44rem 0 0}
  /*用户名称*/
  .dynamic_user{height: 1.67rem;display: flex}
  .userlist{position: relative;bottom: 0;left: 0;}
  /*用户头像*/
  .user_avatar{width: 1.92rem;height: 1.67rem;display: flex;align-items: center;justify-content: center}
  .user_avatar img{width: 1.2rem;height: 1.2rem;}
  /*右边内容*/
  .user_text{width: 100%;border-bottom: 1px solid #dedfe0;height: 1.67rem;}
  /*用户名字*/
  .user_name{display: flex;align-items: center;margin-top: 0.15rem}
  .user_name span{font-size: 0.53rem;color: #ff4222}
  .svip{width: 0.85rem;height: 0.36rem;margin-left: 0.39rem;}
  /*用户描述*/
  .user_des{height: 0.67rem;display: flex;align-items: center}
  .user_des img{width: 0.42rem;height: 0.42rem;margin: 0 0.06rem;}
  .user_des span{font-size: 0.4rem;color: #777}
  .maL_6{margin-left: 0.06rem}
  .borderN{border-bottom: none}
</style>
