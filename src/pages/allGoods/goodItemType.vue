<template>
  <div>
    <template v-if="goodsList != null && goodsList.length >0">
      <div :class="['goods-content',{'goods-content-grid3':grid3}]">
        <div class="item-good" v-for="(item,index) in goodsList" :key="index" @click="jumpShop(item.goodsId)">
          <div class="good-img">
            <img :src="item.defaultImage" alt="">
          </div>
          <div class="good-info">
            <div class="name">
              {{item.goodsName}}
            </div>
            <div class="model">
              {{item.goodsModel}}
            </div>

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
      'grid3': {
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
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    grid-gap: 12px;

    .item-good:hover {
      border-color: #239BFF;
    }

    .item-good {
      background: #FFFFFF;
      border: 1px solid #F5F5F5;
      border-radius: 10px;
      padding: 20px 20px 25px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 290px;
      height: 335px;

      .good-img {
        padding: 0px 20px;
        width: 231px;
        height: 211px;
        box-sizing: border-box;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .good-info {
        height: 70px;
        width: 100%;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .name {
          text-align: center;
          width: 100%;
          line-height: 14px;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 8px;
        }

        .model {
          line-height: 14px;
          font-size: 14px;
          font-weight: 400;
          color: #B0B0B0;
          margin-bottom: 12px;
          text-align: center;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 10px;
        }

        .price {
          line-height: 16px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FF3300;
        }
      }

    }
  }

  .goods-content-grid3 {
    grid-template-columns: repeat(3, auto);
    grid-gap: 12px;
  }
</style>
