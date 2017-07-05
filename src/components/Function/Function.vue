<template>
  <div class="function">
      <div class="function_item" v-for="item in arr">
          <div class="item_pic"><img :src="item.url"></div>
          <div class="item_des">{{ item.des }}</div>
      </div>
  </div>
</template>
<style>
  .function{height: 2.58rem;border-bottom: 1px solid #dedfe0;display: flex;justify-content: space-around;background-color: #fff}
  .function_item{display: flex;flex-direction: column;align-items: center}
  .item_pic{width: 1.06rem;height: 0.97rem;margin-top: 0.3rem;}
  .item_des{font-size: 0.43rem;margin-top: 0.18rem;}
</style>
<script>
    export default{
        props:['arr']
    }
</script>
