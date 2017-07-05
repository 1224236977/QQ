<template>
  <!--头部-->
  <div class="header">
      <div class="header_inner">
          <!--头像-->
          <div class="head_portrait"><img src="../../assets/images/head-portrait_03.jpg"></div>
          <slot></slot>
      </div>
  </div>
</template>
<style>
  /*头部*/
  .header{height: 1.92rem;background-color: #12b7f5;position: fixed;top: 0;width: 100%;z-index: 100}
  /*头部内容*/
  .header_inner{padding: 0 0.3rem;display: flex;justify-content: space-between;padding-top: 0.6rem}
  .head_portrait{width: 1.1rem;margin-left: 0.06rem}
  .head_portrait img{border-radius: 50%}
</style>
