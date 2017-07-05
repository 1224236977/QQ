<template>
  <div class="contactslist">
      <div class="contacts_item" v-for="item in arr">
          <div class="contacts_left"><img :src="item.url"></div>
          <div class="contacts_right" :class="{bor_N:item.bol}">
              <div class="contacts_name">{{ item.name }}</div>
              <img src="../../assets/images/contacts_item_arrow_03.jpg" class="contacts_arrow">
          </div>
      </div>
  </div>
</template>
<style>
  .contactslist{border-top: 1px solid #dedfe0;border-bottom: 1px solid #dedfe0;background-color: #fff}
  .contacts_item{height: 1.37rem;display: flex;position: relative}
  .contacts_right{border-bottom: 1px solid #dedfe0;display: flex;justify-content: space-between;width: 100%;align-items: center}
  .contacts_left{width: 1.82rem;height: 100%}
  .contacts_left img{width: 0.77rem;height: 0.73rem;margin-top: 0.35rem}
  .contacts_name{font-size: 0.52rem;line-height: 1.37rem}
  .contacts_arrow{width: 0.25rem;height: 0.42rem;margin-right: 0.37rem}
  .bor_N {border-bottom: none}
</style>
<script>
  export default{
      props:['arr']
  }
</script>
