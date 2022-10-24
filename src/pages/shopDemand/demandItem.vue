<template>
  <div  :class="['goods-content',{'goods-content-grid5':grid5}]">
    <div class="item" v-for="(item,index) in goodsList" :key="index" @click="getDetail(item)">
      <div class="item-img">
        <img :src="item.imgPath" alt="">
      </div>
      <div class="info">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      'grid5':{
        type:Boolean,
        default:()=>{
          return false
        }
      }
    },
    data() {
      return {
        goodsList: [{
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
          {
            imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
            name: '新版精密卡尔费休水分测定仪'
          },
        ]
      }
    },
    methods:{
      getDetail(id){
        this.$router.push({
          path:'/demandDetail'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-content {
    display: grid;
    grid-template-columns: repeat(6, auto);
    justify-content: space-between;
  }
  .goods-content-grid5{
     grid-template-columns: repeat(5, auto);
  }

  .goods-content .item {
    margin-top: 15px;
    width: 180px;
    height: 188px;
    padding: 15px;
    padding-bottom: 18px;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 12px;
    .item-img {
      width: 150px;
      height: 134px;
      margin-bottom: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      width: 100%;
      color: #333333;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
