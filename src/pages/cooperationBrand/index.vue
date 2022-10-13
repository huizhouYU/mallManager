<template>
  <div class="content">
    <div class="banner">
      <img src="../../assets/images/accessory/pic_banner_1250-500.png" alt="">
    </div>
    <div class="item">
      <!-- 品牌分类 -->
      <brand-list class="supply-demand-item"></brand-list>
    </div>

  </div>
</template>

<script>
  import brandList from '../../pages/cooperationBrand/brandList.vue' //合作品牌
  export default{
    components: {
      brandList
    },
    data(){
      return{
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    width: 1200px;
    margin: auto;
    padding-top: 25px;
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
