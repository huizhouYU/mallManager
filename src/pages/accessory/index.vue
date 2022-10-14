<template>
  <div class="accessory-content">
    <div class="banner">
      <img src="../../assets/images/accessory/pic_banner_1250-500.png" alt="">
    </div>
  <!-- 配件专区 -->
  <accessories-area class="accessories_area" :showTitle="showTitle"></accessories-area>
  </div>
</template>

<script>
  import accessoriesArea from '../../pages/index/accessoriesArea.vue' //配件专区
  export default{
    components: {
      accessoriesArea
    },
    data(){
      return{
        showTitle:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .accessory-content{
    width: 1200px;
    margin: auto;
    margin-top: 25px;
  }
  .banner{
    width: 100%;
    height: 90px;
    margin: 0px 0px 32px 0px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
