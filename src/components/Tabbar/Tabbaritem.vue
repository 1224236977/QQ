<template>
  <div class="tabbaritem" @click="fn">
    <span v-show="bol"><slot name="normalImg"></slot></span>
    <span v-show="!bol"><slot name="activeImg"></slot></span>
    <p v-text="txt" :class="{tabbaritem_ac:!bol}"></p>
  </div>
</template>
<script>
  export default {
    props:['txt','mark'],
    computed:{
      bol:function () {
        if(this.mark==this.$parent.sel){
          return false
        }
        return true
      }
    },
    methods:{
      fn:function () {
        this.$emit('change',this.mark)
        this.$router.push('/'+this.mark)
      }
    }
  }
</script>

