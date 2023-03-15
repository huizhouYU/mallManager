<template>
  <!-- 相关商品推荐列表 -->
  <div class="recommend-box">
    <div class="top-title">
      <img src="../../assets/images/shop/pic_line.png" alt="">
      精品推荐
      <img src="../../assets/images/shop/pic_line.png" alt="">
    </div>
    <div class="box-goods-content">
      <div class="good-content-item" v-for="(item,index) in reGoodList" :key="index" @click="toGoodsDetail(item)">
        <img :src="item.defaultImage" alt="">
        <div class="goods-info-right">
          <div class="title">{{item.goodsName}}</div>
          <div class="key-value-item">
            <div class="key">价格:</div>
            <div class="value">
              <template v-if="item.saleType == 1">{{item.price}}</template>
              <template v-else>可询价</template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'reGoodList': {
        type: Array
      }
    },
    data() {
      return {}
    },
    methods: {
      toGoodsDetail(item) {
        var newPath = this.$router.resolve({
          path: '/goodDetail',
          query: {
            goodsId: item.goodsId
          }
        })
        window.open(newPath.href, '_blank')
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommend-box {
    padding: 15px 0px 10px;
    display: flex;
    flex-direction: column;
  }

  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    margin-bottom: 10px;
    line-height: 16px;

    img {
      width: 62px;
    }
  }

  .box-goods-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width: 100%;

    .good-content-item:hover {
      border: 1px solid #e1e1e1;
      box-shadow: 2px 2px 10px #e1e1e1;
    }

    .good-content-item {
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border: 1px solid transparent;

      img {
        width: 80px;
        height: 80px;
        border-radius: 6px;
      }

      .goods-info-right {
        padding-left: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .title {
          font-size: 14px;
          line-height: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 12px;
        }

        .key-value-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          line-height: 12px;

          .key {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            padding-right: 15px;
          }

          .value {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
          }
        }
      }
    }
  }
</style>
