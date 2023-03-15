<template>
  <div class="main-content">
    <div class="banner">
      <img src="../../assets/images/accessory/pic_banner_1250-500.png" alt="">
    </div>
    <div class="item">
      <!-- 配件专区 -->
      <supply-demand-item class="supply-demand-item"></supply-demand-item>
      <!-- 精选推荐 -->
      <recommendations-goods class="recommendations-goods"></recommendations-goods>
    </div>

  </div>
</template>

<script>
  import supplyDemandItem from '../supplyDemand/supplyDemandItem.vue' //供求信息单个数据
  import recommendationsGoods from '../supplyDemand/recommendationsGoods.vue'//精选推荐
 // import {
 //   articleList
 // } from '@/api/index'
  export default{
    components: {
      supplyDemandItem,recommendationsGoods
    },
    data(){
      return{
      }
    },
    methods:{
      // getData(){
      //   articleList({goodsType:'material',limit:10}).then(response => {
      //     console.log('供求信息-需求列表：',response)
      //   })
      // }
    }
  }
</script>

<style lang="less" scoped>
  .main-content{
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
  .main-content .item{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .supply-demand-item{
      width: 920px;
    }
    .recommendations-goods{
      margin-left: 30px;
      width: 250px;
    }
  }
</style>
