<template>
  <!--搜索框-->
  <div class="search">
      <div class="search_inner"><img src="../../assets/images/search_07.jpg"><span v-text="searchText"></span></div>
  </div>
</template>
<style>
  /*搜索*/
  .search{padding: 0.24rem;height: 0.84rem;font-size: 0.44rem;line-height:0.84rem;background-color: #fff}
  .search_inner{background-color: #eeeff3;color: #a6a6a6;border: none;outline: none;width: 100%;height: 100%;border-radius: 4px }
  .search_inner img{width: 0.37rem;margin-right: 0.24rem}
</style>
<script>
  export default{
      props:['searchText']
  }
</script>

