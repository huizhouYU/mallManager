<template>
  <div class="body">
    <div class="header-top">
      <header-title class="header-title"></header-title>
    </div>

    <div class="header">
      <index-header class="index-header"></index-header>
    </div>
    <div class="shop-main">
      <div class="shop-logo">
        <img src="../../assets/images/shop/pic_shop_bg.png" alt="">
        <div class="shop-info">
          <div class="shop-info-name">
            <img src="../../assets/images/shop/icon_shop.png" alt="">
            <span>{{storeInfo.storeName||'-'}}</span>
          </div>
          <div class="shop-info-right">
            <div class="item">
              <div class="one-front">保</div>
              <span>消费者服务保障</span>
            </div>
            <div class="item">
              <div class="one-front">证</div>
              <span>认证商家</span>
            </div>
            <div class="item">
              <div class="one-front">质</div>
              <span>质量保证</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="tab-content">
        <ul>
          <li v-for="(item,index) in tabList" :key="index" :class="{'selected':item.path == selectedTab}"
            @click="jumpTab(item.path,index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="pages">
        <router-view class="each-page" @selectOnlyTab="selectOnlyTab" @selectTab="selectTab" @saveStoreId="saveStoreId">
        </router-view>
      </div>
      <index-bottom></index-bottom>
    </div>

  </div>
</template>

<script>
  import headerTitle from '../../pages/index/headerTitle.vue'
  import indexHeader from '../../pages/index/indexHeader.vue'
  import indexBottom from '../../pages/index/indexBottom.vue'
  import {
    mapGetters
  } from 'vuex'
  import {
    storeDetail
  } from '@/api/store'
  export default {
    components: {
      headerTitle,
      indexHeader,
      indexBottom
    },
    computed: {
      ...mapGetters([
        'currentLookStoreId'
      ])
    },
    data() {
      return {
        storeId: '',
        selectedTab: '-1',
        storeInfo: '',
        tabList: [{
            name: '店铺首页',
            path: '/shopHome'
          },
          {
            name: '简要介绍',
            path: '/introductionIndex'
          },
          {
            name: '公司资质',
            path: '/qualificationsIndex'
          },
          {
            name: '店铺商品',
            path: '/shopAllGoods'
          },
          {
            name: '供求信息',
            path: '/demandIndex'
          },
          {
            name: '联系方式',
            path: '/contactIndex'
          }
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.selectedTab = this.$route.path
      var storeIdStr = this.$route.query.storeId
      if (storeIdStr != undefined && storeIdStr != null && storeIdStr != '') {
        this.storeId = storeIdStr
      } else {
        this.storeId = this.currentLookStoreId
      }
      if (this.storeId != '') {
        this.getStore()
      }
    },
    methods: {
      saveStoreId(id) {
        this.storeId = id
        if (this.storeInfo == '') {
          this.getStore()
        }
      },
      getStore() {
        storeDetail({
          storeId: this.storeId
        }).then(response => {
          console.log("获取店铺详情：", response)
          this.storeInfo = response.data
        })
      },
      jumpTab(path, index) {
        this.selectedTab = path
        this.$router.replace({
          path: path,
          query: {
            storeId: this.storeId
          }
        })
      },
      selectTab(params) {
        this.jumpTab(params.path, params.index)
      },
      selectOnlyTab(id) {
        this.selectedTab = id
      }
    }
  }
</script>

<style lang="less" scoped>
  .body {
    background-color: #f5f5f5;
    height: 100%;
  }

  .header-top {
    position: fixed;
    height: 30px;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
  }

  .header {
    position: fixed;
    margin-top: 30px;
    padding: 20px 0px;
    width: 100%;
    z-index: 99;
    background-color: #fff;
  }

  .shop-main {
    padding-top: 140px;
    background-color: #f5f5f5;

    .shop-logo {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      z-index: 999;

      img {
        position: absolute;
        width: 100%;
        height: 90px;
      }

      .shop-info {
        width: 1200px;
        z-index: 9;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .shop-info-name {
          display: flex;
          align-items: center;

          img {
            position: static;
            width: 38px;
            height: 38px;
            margin-right: 10px;
          }

          span {
            font-size: 28px;
            font-family: Microsoft YaHei;
            font-weight: 700;
            color: #FFFFFF;
          }
        }

        .shop-info-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .item {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-right: 20px;

            .one-front {
              width: 34px;
              height: 34px;
              background-image: url('../../assets/images/shop/pic_circle.png');
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 700;
              color: #FFE077;
              margin-right: 10px;
            }

            span {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #FFFFFF;
            }
          }
        }
      }
    }

    .tab-content {
      height: 50px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      ul {
        width: 1200px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        li {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0px 30px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          cursor: pointer;
        }

        li:hover {
          color: #40A9FF;
          border-bottom: 2px solid #40A9FF;
        }

        li:active {
          color: #40A9FF;
          border-bottom: 2px solid #40A9FF;
        }

        .selected {
          color: #40A9FF;
        }
      }
    }
  }

  .pages {
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 25px;
  }

  .each-page {
    // width: 1200px;
    margin: auto;
  }
</style>
