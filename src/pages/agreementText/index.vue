<template>
  <div class="flex-column-start-center agreementText-index">
    <!-- 顶部模块 购物车 -->
   <!-- <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <div class="search-header">
      <index-header class="index-header"></index-header>
    </div>
    <index-tab></index-tab> -->
    <div class="flex-column-start-start module-box">
      <div class="flex-start-center navigation-bar">首页 > {{current.name}}</div>
      <div class="flex-start-start module-main">
        <div class="navigation-box">
          <ul class="flex-column-around-center">
            <li v-for="(item,index) in navTab" :key="index" @click="changeNav(item)"
              :class="['flex-center-center',{'current':item.path == current.path}]">{{item.name}}</li>
          </ul>
        </div>
        <router-view class="module-item"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: {
          path: '/aboutUs',
          name: '关于我们'
        },
        navTab: [{
            path: '/aboutUs',
            name: '关于我们'
          },
          {
            path: '/residencyAgreement',
            name: '入驻协议'
          },
          {
            path: '/tradingRules',
            name: '交易规则'
          },
          {
            path: '/legalStatement',
            name: '法律声明'
          }
        ]
      }
    },
    watch: {
      $route(to, from) {
        if (to.fullPath != from.fullPath) {
          this.refreshData(to.fullPath)
        }
      }
    },
    mounted() {
      this.$emit('topImg',true)
      this.refreshData(this.$route.fullPath)
    },
    methods: {
      refreshData(path) {
        for (var i in this.navTab) {
          if (this.navTab[i].path == path) {
            this.current = this.navTab[i]
            return
          }
        }
      },
      changeNav(item) {
        this.current = item
        this.$router.push({
          path: item.path,
          replace: true
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @core-width: 1200px;

  .agreementText-index {
    background-color: #f5f5f5;
  }


  .module-box {
    width: 1200px;
    box-sizing: border-box;
    margin-bottom: 40px;

    .navigation-bar {
      box-sizing: border-box;
      height: 30px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
    }

    .module-main {
      width: 100%;
      box-sizing: border-box;


      .navigation-box {
        width: 242px;
        background: #FAFAFA;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;

        ul {
          width: 100%;
          box-sizing: border-box;

          li {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: 50px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }

          .current {
            background-color: #fff;
            color: #40A9FF;
          }

          .current::before {
            position: absolute;
            display: block;
            content: '';
            width: 4px;
            height: 50px;
            background: #40A9FF;
            border-radius: 0px 4px 4px 0px;
            top: 0px;
            left: 0px;
          }

          .current::after {
            position: absolute;
            display: block;
            content: '';
            width: 0;
            height: 0;
            border: 10px solid;
            right: 6px;
            border-color: transparent transparent transparent #40A9FF;

          }
        }
      }

      .module-item {
        flex: 1;
        background-color: #fff;
      }
    }
  }
</style>
