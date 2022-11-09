<template>
  <div class="buyer-box">
    <!-- 侧边导航栏 -->
    <div class="side-navigation">
      <div class="public-menu" v-for="(item,index) in navList" :key="index" >
        <span :class="[{'bule-font':item.path == chosedNav},'title']" @click="selectNav(item.path)" >{{item.name}}</span>
        <ul v-show="item.child.length>0">
          <li :class="[{'bule-font':child.path == chosedNav}]" v-for="(child,ind) in item.child" @click="selectNav(child.path)">{{child.name}}</li>
        </ul>
      </div>
    </div>
    <router-view class="buyer-main" @changeChosedNav="changeChosedNav"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chosedNav: '',
        navList: [{
            name: '个人中心',
            path: '/personal',
            child: [{
                name: '个人资料',
                path: '/personalData',
              },
              {
                name: '收货地址',
                path: '/receiptAddress',
              },
              {
                name: '修改密码',
                path: '/changePWD',
              }
            ]
          },
          {
            name: '购物车',
            path: '/shoppingCart',
            child: [

            ]
          },
          {
            name: '我的订单',
            path: '/allOrders',
            child: [{
                name: '待付款',
                path: '',
              },
              {
                name: '待审核',
                path: '',
              },
              {
                name: '待发货',
                path: '',
              },
              {
                name: '待收货',
                path: '',
              }
            ]
          },
          {
            name: '退款订单',
            path: '',
            child: [{
                name: '退款中',
                path: '',
              },
              {
                name: '已退款',
                path: '',
              }
            ]
          }
        ]
      }
    },
    mounted() {
      this.chosedNav = '/personal'
    },
    methods:{
      selectNav(path){
        this.chosedNav = path
        this.$router.replace({
          path:path
        })
      },
      changeChosedNav(key){
        this.chosedNav = key
      }
    }
  }
</script>

<style lang="less" scoped>
  .buyer-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    // 侧边导航栏
    .side-navigation {
      width: 150px;
      background-color: #fff;

      .public-menu {
        padding: 20px 25px;
        border-bottom: 1px solid #F3F3F3;

        .title {
          cursor: pointer;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }
        .bule-font{
          color: #40A9FF;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 20px;

          li {
            cursor: pointer;
            margin-bottom: 15px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }

          li:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }

    .buyer-main {
      margin-left: 20px;
      width: 1030px;
    }
  }
</style>
