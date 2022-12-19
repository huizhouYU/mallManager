<template>
  <div class="buyer-box">
    <!-- 侧边导航栏 -->
    <div class="side-navigation">
      <div class="public-menu" v-for="(item,index) in navList" :key="index">
        <span :class="[{'bule-font':item.id == chosedNav},'title']"
          @click="selectNav(item.id,item.path,item.params)">{{item.name}}</span>
        <ul v-show="item.child.length>0">
          <li :class="[{'bule-font':child.id == chosedNav}]" v-for="(child,ind) in item.child"
            @click="selectNav(child.id,child.path,child.params)">{{child.name}}</li>
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
            id: 'personal',
            name: '个人中心',
            path: '/personal',
            params: '',
            child: [{
                id: 'personalData',
                name: '个人资料',
                path: '/personalData',
                params: '',
              },
              // {
              //   id: 'receiptAddress',
              //   name: '收货地址',
              //   path: '/receiptAddress',
              //   params: '',
              // },
              {
                id: 'changePWD',
                name: '修改密码',
                path: '/changePWD',
                params: '',
              }
            ]
          },
          // {
          //   id: 'shoppingCart',
          //   name: '购物车',
          //   path: '/shoppingCart',
          //   params: '',
          //   child: []
          // },
          // {
          //   id: 'allOrders0',
          //   name: '我的订单',
          //   path: '/allOrders',
          //   params: {
          //     id: 0
          //   },
          //   child: [{
          //       id: 'allOrders2',
          //       name: '待付款',
          //       path: '/allOrders',
          //       params: {
          //         id: 2
          //       },
          //     },
          //     {
          //       id: 'allOrders1',
          //       name: '待审核',
          //       path: '/allOrders',
          //       params: {
          //         id: 1
          //       },
          //     },
          //     {
          //       id: 'allOrders3',
          //       name: '待发货',
          //       path: '/allOrders',
          //       params: {
          //         id: 3
          //       },
          //     },
          //     {
          //       id: 'allOrders4',
          //       name: '待收货',
          //       path: '/allOrders',
          //       params: {
          //         id: 4
          //       },
          //     }
          //   ]
          // },
          // {
          //   name: '退款订单',
          //   path: '',
          //   params: {},
          //   child: [{
          //       name: '退款中',
          //       path: '',
          //       params: {},
          //     },
          //     {
          //       name: '已退款',
          //       path: '',
          //       params: {},
          //     }
          //   ]
          // },
          // {
          //   id: 'supplyDemandInfo',
          //   name: '供求信息',
          //   path: '/supplyDemandInfo',
          //   params: '',
          //   child: []
          // },
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.chosedNav = this.$route.path.replace("/", "") + this.$route.query.id
    },
    methods: {
      selectNav(id, path, params) {
        this.chosedNav = id
        if (path == '/allOrders') {
          this.$router.push({
            path: '/redirect',
            query: {
              path: encodeURI(path),
              query: params
            },
            replace: true
          })
        } else {
          this.$router.push({
            path: path,
            query: params,
            replace: true
          })
        }

      },
      changeChosedNav(key) {
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
    margin-bottom: 5px;

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

        .bule-font {
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
