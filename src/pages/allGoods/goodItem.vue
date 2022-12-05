<template>
  <div :class="['goods-content',{'goods-content-grid5':grid5}]">
    <div class="item" v-for="(item,index) in goodsList" :key="index" @click="jumpShop(item.goodsId)">
      <div class="item-img">
        <img :src="'https://images.weserv.nl/?url='+item.defaultImage" alt="">
      </div>
      <div class="info">
        <div class="name">{{item.goodsName}}</div>
        <div class="brand">{{item.brand}}</div>
        <div class="price-shop">
          <div class="price">
            <template v-if="item.saleType==1">￥{{item.price}}</template>
            <template v-else>￥议价</template>
          </div>
          <i class="iconfont">&#xe73d;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'grid5': {
        type: Boolean,
        default: () => {
          return false
        }
      },
      'goodsList':{
        type:Array
      }
    },
    data() {
      return {
        // goodsList: [{
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: ''
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: ''
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: ''
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        //   {
        //     imgPath: require('../../assets/images/index/demand/pic_gongqiu_qg.png'),
        //     name: '新版精密卡尔费休水分测定仪',
        //     brand: '飞利浦',
        //     price: '45'
        //   },
        // ]
      }
    },
    methods: {
      jumpShop(goodsId) {
        this.$router.push({
          path: '/goodDetail',
          params:{goodsId}
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

  .goods-content-grid5 {
    grid-template-columns: repeat(5, auto);
  }

  .goods-content .item {
    margin-top: 15px;
    width: 180px;
    height: 230px;
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
      height: 55px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;

      .name {
        width: 100%;
        color: #333333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .brand {
        width: 100%;
        color: #666666;
      }

      .price-shop {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .price {
          color: #E60000;
        }

        i {
          color: #CACACA;
        }
      }

    }
  }

  .goods-content .item:hover {
    border-color: #239BFF;
  }
</style>
