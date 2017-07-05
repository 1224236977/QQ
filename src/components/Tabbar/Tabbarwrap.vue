<template>
  <div class="tabbarwrap">
    <slot></slot>
  </div>
</template>
<script>
  import Tabbaritem from './Tabbaritem.vue'
  export default {
    props:['sel'],
    components:{
      Tabbaritem
    }
  }
</script>
<style>
  .tabbarwrap{display: flex;justify-content:space-around;}
</style>
