<template>
  <div>
    <template v-if="goodsList != null && goodsList.length >0">
      <div :class="['goods-content',{'goods-content-grid5':grid5}]">
        <div class="item" v-for="(item,index) in goodsList" :key="index" @click="jumpShop(item.goodsId)">
          <div class="item-img">
            <img :src="item.defaultImage" alt="">
          </div>
          <div class="info">
            <div class="name">{{item.goodsName}}</div>
            <div class="model">{{item.goodsModel}}</div>
              <div class="price">
                <template v-if="item.saleType==1">￥{{item.price}}</template>
                <template v-else>询价</template>
              </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="flex-center-center no-data-font">
      暂未查询到商品~
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
      'goodsList': {
        type: Array
      }
    },
    data() {
      return {}
    },
    methods: {
      jumpShop(goodsId) {
        this.$router.push({
          path: '/goodDetail',
          query: {
            goodsId
          }
        })
        this.$emit('selectOnlyTab', '-1')
      }
    }
  }
</script>

<style lang="less" scoped>
  .no-data-font {
    margin-top: 20px;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .goods-content {
    display: grid;
    grid-template-columns: repeat(6, auto);
    justify-content: flex-start;
    grid-gap: 14px;
  }

  .goods-content-grid5 {
    grid-template-columns: repeat(5, auto);
    grid-gap: 5px;
  }


  .goods-content .item {
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
      line-height: 12px;

      .name {
        text-align: center;
        width: 100%;
        color: #333333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 8px;
      }

      .model {
        color: #B0B0B0;
        text-align: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }

      .price {
        text-align: center;
        width: 100%;
        font-size: 14px;
        color: #FF3300;
      }

    }
  }

  .goods-content .item:hover {
    border-color: #239BFF;
  }
</style>
