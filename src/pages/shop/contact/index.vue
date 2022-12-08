<template>
  <div class="contact-box">
    <div class="contact-info">
      <div class="contact-info-left">
        <div class="contact-info-item">
          <span class="item-left">{{storeInfo.ownerName}}</span>
          <span class="phone">{{storeInfo.tel}}</span>
        </div>
        <div class="contact-info-item">
          <span class="">{{storeInfo.storeName}}</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">电话</span>
          <span class="">{{storeInfo.tel}}</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">QQ</span>
          <span class="">{{storeInfo.imQq||'-'}}</span>
        </div>
        <div class="contact-info-item">
          <span class="item-left">地址</span>
          <span class="">{{storeInfo.regionName}}{{storeInfo.address}}</span>
        </div>

      </div>
      <div class="contact-info-right">
        <v-amap :latitude="Number(storeInfo.latitude)" :longitude="Number(storeInfo.longitude)"></v-amap>
      </div>
    </div>
    <!-- 店内推荐 -->
    <div class="shop-recommend">
      <span>店内推荐</span>
      <good-item :goodsList="goodsDataList"></good-item>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../../pages/allGoods/goodItem.vue'
  import vAmap from '../../../components/amaps.vue'
  import {
    goodsList
  } from '@/api/goods'
  import {
    storeDetail
  } from '@/api/store'
  export default {
    components: {
      goodItem,
      vAmap
    },
    data() {
      return {
        storeId: '',
        storeInfo: '',
        goodsDataList: [],
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      getData() {
        storeDetail({
          storeId: this.storeId
        }).then(response => {
          console.log("获取店铺详情：", response)
          this.storeInfo = response.data
        })
        var page = {
          pageNo: 1,
          pageSize: 10,
          storeId: this.storeId
        }
        goodsList(page).then(response => {
          console.log("获取店铺内商品列表:", response)
          this.goodsDataList = response.data.list
        })
      },

    }
  }
</script>

<style lang="less" scoped>
  .contact-box {
    padding-top: 20px;
    width: 1200px;

    .contact-info {
      width: 1200px;
      height: 380px;
      box-sizing: border-box;
      background: #FFFFFF;
      border-top: 2px solid #40A9FF;
      padding: 40px 80px;
      display: flex;
      justify-content: space-between;
      align-self: center;

      .contact-info-left {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .contact-info-item {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 15px;

          .item-left {
            width: 50px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            margin-right: 22px;
          }

          .phone {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
          }
        }
      }

      .contact-info-right {
        width: 650px;
        height: 300px;
        border: 1px solid #eee;
      }
    }

    // 店内推荐
    .shop-recommend {
      width: 100%;
      background-color: #fff;
      margin-top: 20px;
      padding: 12px 14px 25px 14px;
      border-top: 2px solid #40A9FF;

      span {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }
  }
</style>
