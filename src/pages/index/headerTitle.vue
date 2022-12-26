<template>
  <div class="header-title-box">
    <div class="shop-content-item">
      <ul>
        <li>您好，欢迎来到医界商城！</li>
        <template v-if="!name">
          <li @click="login">请登录</li>
          <li class="bule_font" @click="register">免费注册</li>
        </template>
        <template v-if="name">
          <li class="show-info-li">
            <div class="flex-center-center top-name">
              <span>{{name}}</span>
              <i class="iconfont">&#xe601;</i>
            </div>
            <div class="hover-top-name-content">
              <ul>
                <li @click="personCenter">个人中心</li>
                <li @click="logout">退出</li>
              </ul>
              <div class="flex-start-center logo-name-div">
                <img :src="avatar" alt="">
                <div class="flex-column-around-start name-info-div">
                  <span>
                    {{name}}
                  </span>
                  <span class="color9">已完善个人信息</span>
                </div>
              </div>
            </div>
          </li>
        </template>

      </ul>
    </div>
    <div class="shop-content-item shop-content-right">
      <ul>
        <li @click="toIndex">医界圈首页</li>
        <!-- <li @click="toShopCart">购物车</li> -->
        <!-- <li>我的收藏</li> -->
        <li class="yellow_font" @click="personCenter">
          <img src="../../assets/images/index/icon_vip.png" alt="">
          会员中心
        </li>
        <li><a href="http://seller.yijiequan.cn" target="_blank">商家后台</a></li>
        <!-- <li class="bule_font"><a href="http://seller.yijiequan.cn/#/shop/storeAuthentication" target="_blank">供应商入驻</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'mobile'
      ])
    },
    methods: {
      login() {
        this.$router.push({
          path: '/login',
          replace: true
        })
      },
      register() {
        this.$router.push({
          path: '/register',
        })
      },
      logout() {
        this.$store.dispatch('user/logout')
          .then(() => {
            console.log("退出成功！")
            this.toIndex()
            // this.$router.push({
            //   path: '/redirect',
            //   query: {
            //     // path: encodeURI("/home"),
            //     path:'"/home"'
            //   },
            //   replace: true
            // })
            this.loading = false
            console.log("成功")
          }).catch(() => {
            this.loading = false
            console.log("失败")
          })
      },


      toIndex() {
        this.$router.push({
          path: '/',
          replace: true
        })
      },
      toShopCart() {
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      personCenter() {
        this.$router.push({
          path: '/buyer',
          query: {
            // id: id
          }
        })
      },
      loginOut() {

      }
    }
  }
</script>
<style lang="less" scoped>
  // 顶部模块 购物车
  .header-title-box {
    background-color: #f5f5f5;
    display: flex;
    width: 1200px;
    height: 100%;     align-items: center;

    .shop-content-item {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #696969;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        li {
          height: 100%;
          cursor: pointer;
          padding-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            display: inline-block;
            height: 100%;
            line-height: 30px;
          }

          img {
            width: 16px;
            height: 14px;
            margin-right: 4px;
          }
        }

        //昵称
        .show-info-li {
          padding: 0px !important;
          margin-right: 10px;
          position: relative;
          box-sizing: border-box;

          .top-name {
            padding: 0px 6px;
            height: 31px;
            max-width: 100px;
            box-sizing: border-box;

            span {
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          //头像 +个人中心+退出
          .hover-top-name-content {
            position: absolute;
            display: none;
            top: 30px;
            left: 0;
            z-index: 100;
            background-color: #fff;
            border: 1px solid #EEEEEE;
            width: 260px;
            padding: 16px 0px;

            ul {
              width: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;

              li {
                cursor: pointer;
                padding: 0px 10px;
              }

              li+li {
                border-left: 1px solid #DDDDDD;
              }

              li:hover {
                color: #40A9FF;
              }
            }

            .logo-name-div {
              margin-left: 25px;
              margin-top: 18px;
              height: 50px;
              box-sizing: border-box;

              img {
                width: 50px;
                height: 50px;
                background: #FFFFFF;
                border: 1px solid #EEEEEE;
                border-radius: 50%;
                box-sizing: border-box;
              }

              .name-info-div {
                padding: 8px 0px;
                margin-left: 12px;

                span {
                  line-height: 22px;
                }

                .color9 {
                  color: #999999;
                }

              }
            }
          }

          .hover-top-name-content::before {
            position: absolute;
            display: block;
            content: '';
            background-color: #fff;
            height: 2px;
            width: 98px;
            top: -1px;
            left: 0px;
          }

        }

        //个人信息悬浮样式
        .show-info-li:hover {
          background-color: #fff;

          .top-name {
            border: 1px solid #EEEEEE;
          }

          .hover-top-name-content {
            display: block;
          }
        }
      }

      .yellow_font {
        color: #F5C164;
      }

      .bule_font {
        color: #40A9FF;
      }
    }

    .shop-content-right {
      justify-content: flex-end;

      ul {
        li {
          padding-right: 0px;
          padding-left: 10px;
          a{
            text-decoration: none;
            color: #696969;
          }
        }
      }
    }



  }
</style>
