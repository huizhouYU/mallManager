<template>
  <div class="header-title-box">
    <div class="shop-content-item">
      <ul>
        <li>您好，欢迎来到医界商城！</li>
        <template v-if="!name">
          <li>请登录</li>
          <li class="bule_font">免费注册</li>
        </template>
        <template v-if="name">
          <li>
            <el-popover placement="bottom-start" trigger="hover" popper-class="tips-con">
              <div class="hover-top-name-content" slot="default">
                <ul>
                  <li @click="personCenter">个人中心</li>
                  <li @click="logout">退出</li>
                </ul>
                <div class="logo-name-div">
                  <img :src="avatar" alt="">
                  <div class="name-info-div">
                    <span>
                      {{name}}
                    </span>
                    <span class="color9">已完善个人信息</span>
                  </div>
                </div>
              </div>
              <div slot="reference" class="top-name">
                <span>{{name}}</span>
                <i class="iconfont">&#xe601;</i>
              </div>
            </el-popover>

          </li>
        </template>

        <li>客服热线：400-010-1866</li>
      </ul>
    </div>
    <div class="shop-content-item shop-content-right">
      <ul>
        <li @click="toIndex">医界圈首页</li>
        <li @click="toShopCart">购物车</li>
        <!-- <li>我的收藏</li> -->
        <li class="yellow_font" @click="personCenter">
          <img src="../../assets/images/index/icon_vip.png" alt="">
          会员中心
        </li>
        <li>管理后台</li>
        <li class="bule_font">供应商入驻</li>
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
        this.$emit("changeTab", '0')
        this.$router.push({
          path: '/'
        })
      },
      toShopCart() {
        this.$emit("changeTab", '-1')
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      personCenter() {
        this.$emit("changeTab", '-1')
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
<style lang="less">
  /**写样式要注意，写在不带scoped的 style 里 */
  // 修改下面的小三角，属性名根据组件的placement位置做相应修改
  .tips-con[x-placement^='left'] .popper__arrow::after {
    border-left-color: rgba(54,229,255,0);
    border: none;
  }

  .tips-con[x-placement^='right'] .popper__arrow::after {
    border-right-color: rgba(54,229,255,0);
    border: none;
  }

  .tips-con[x-placement^='bottom'] .popper__arrow::after {
    border-bottom-color: rgba(54,229,255,0);
    border: none;
  }

  .tips-con[x-placement^='top'] .popper__arrow::after {
    border-top-color: rgba(54,229,255,0);
    border: none;
  }

  .tips-con .el-popper .popper__arrow,
  .tips-con .el-popper .popper__arrow:after {
    display: none;
  }

  .el-popper .popper__arrow:after {
    display: none;
  }

  // 修改title的颜色
  .tips-con .el-popover__title {
    color: rgb(230, 51, 236);
  }

  .tips-con {
    // top: -20px;
    // margin-top: 100px;
    background-color: #fff;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;

    .hover-top-name-content {
      width: 260px;
      padding: 10px 0px;

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
      }

      .logo-name-div {
        margin-left: 25px;
        margin-top: 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 50px;
          height: 50px;
          background: #FFFFFF;
          border: 1px solid #EEEEEE;
          border-radius: 50%;
          box-sizing: border-box;
        }

        .name-info-div {
          margin-left: 12px;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;

          .color9 {
            color: #999999;
          }

          span+span {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
<style lang="less" scoped>
  // 顶部模块 购物车
  .header-title-box {
    background-color: #f5f5f5;
    // position: fixed;
    // top: 100px;
    // left: 50%;
    // transform: translate(-50%, 0);
    // height: 30px;
    // width: 100%;
    // z-index: 99;
    display: flex;
    width: 1200px;
    height: 100%;

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

          .top-name {
            padding: 0px 6px;
            height: 100%;
            max-width: 100px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;


            span {
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          .top-name:hover {
            color: #40A9FF;
            background-color: #fff;
          }


          img {
            width: 16px;
            height: 14px;
            margin-right: 4px;
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
        }
      }
    }
  }
</style>
