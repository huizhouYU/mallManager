<template>
  <div class="main-tab">
    <div class="flex-start-center main-tab-content">
      <!-- <el-popover placement="bottom-start" width="215" trigger="hover" v-show="isShowContent" :visible-arrow="false"> -->
      <div class="main-tab-content-left show-more" v-show="isShowContent">
        <img src="../../assets/images/index/icon_hamburger.png" alt="">
        <span class="title">品牌分类</span>
        <!-- 悬浮 品牌分类 展示内容 -->
        <div class="brand-classification">
          <div width="240px" class="main-aside">
            <ul class="brand-nav-box">
              <li v-for="(item,index) in brandList" :key="item.cateId" class="flex-between-center"
                @mouseenter="enterClass(index)">{{item.cateName}}
                <i class="iconfont">&#xe63c;</i>
              </li>
              <!-- 左侧导航条悬浮显示的内容 -->
              <div class="more-classification">
                <div class="item" v-for="(item,index) in classDatas" :key="index">
                  <div class="title" @click="jumpToGood(item,'2')">{{item.cateName}}</div>
                  <ul>
                    <li v-for="(child,ind) in item.children" :key="ind" @click="jumpToGood(child,'3')">
                      {{child.cateName}}
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <!-- </el-popover> -->
      <div slot="reference" class="main-tab-content-left" v-show="!isShowContent">
        <img src="../../assets/images/index/icon_hamburger.png" alt="">
        <span class="title">品牌分类</span>
      </div>
      <div class="main-tab-content-right">
        <ul class="flex-start-center">
          <li v-for="(item,index) in tabList" :key="index" :class="{'selected':chooseTab==item.path}"
            @click="jumpTab(item.path)">{{item.title}}
            <img src="../../assets/images/index/icon_hot.png" alt="" v-if="item.isHot">
            <img src="../../assets/images/index/icon_new_red.png" alt="" v-else-if="item.isNew">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    categoryList
  } from '@/api/index'
  export default {
    data() {
      return {
        isShowContent: false,
        chooseTab: 0,
        classDatas: [],
        brandList: [],
        chosedLevel: [],
        //顶部导航栏
        tabList: [{
            title: '首页',
            isHot: false,
            isNew: false,
            path: '/home'
          },
          {
            title: '配件专区',
            isHot: true,
            isNew: false,
            path: '/accessory'
          },
          {
            title: '供求信息',
            isHot: false,
            isNew: false,
            path: '/supplyDemand'
          },
          {
            title: '医疗器械',
            isHot: false,
            isNew: false,
            path: '/medicalApparatus'
          },
          {
            title: '企业服务',
            isHot: false,
            isNew: true,
            path: '/enterpriseServices'
          },
          // {
          //   title: '学习园地',
          //   isHot: false,
          //   path: ''
          // },
          // {
          //   title: '工程师服务',
          //   isHot: false,
          //   isNew: false,
          //   path: ''
          // },
          {
            title: '合作品牌',
            isHot: false,
            isNew: false,
            path: '/cooperationBrand'
          },
        ],
      }
    },
    mounted() {
      var path = this.$route.fullPath
      console.log("this.$route:", this.$route)
      this.chooseTab = path
      if (this.chooseTab != '/home') {
        this.isShowContent = true
      } else {
        this.isShowContent = false
      }
      this.getData()
    },
    watch: {
      $route(to, from) {
        if (to.fullPath != from.fullPath) {
          this.chooseTab = to.fullPath
        }
      }
    },
    methods: {
      getData() {
        //获取分类
        categoryList().then(response => {
          if (response.code == 10000) {
            this.brandList = response.data
          } else {
            this.brandList = []
          }
        })
      },
      enterClass(index) {
        //根据id去请求classDatas数据
        if (this.brandList[index].children != undefined && this.brandList[index].children.length > 0) {
          this.classDatas = this.brandList[index].children
        } else {
          this.classDatas = []
        }
      },
      jumpTab(path) {
        this.chooseTab = path
        if (this.chooseTab != '/home') {
          this.isShowContent = true
        } else {
          this.isShowContent = false
        }
        var params={}
        if(path == '/medicalApparatus'){
          params={
            goodsType:'equipment'
          }
        }
        this.$router.push({
          path: path,
          query:params,
          replace: true
        })

      },
      jumpToGood(item, level) {
        this.getChosedLevel(item.cateName, item.parentId, level)
        this.$router.push({
          path: '/medicalApparatus',
          query: {
            cateId: item.cateId,
            goodsType: item.goodsType,
            chosedLevel: this.chosedLevel.join(' / ')
          }
        })
        this.chooseTab = '-1'
      },
      getChosedLevel(name, parerntId, level) {
        this.chosedLevel = []
        for (var i in this.brandList) {
          if (level == '3') {
            for (var y in this.brandList[i].children) {
              if (this.brandList[i].children[y].cateId == parerntId) {
                this.chosedLevel.push(this.brandList[i].cateName)
                this.chosedLevel.push(this.brandList[i].children[y].cateName)
                this.chosedLevel.push(name)
                return
              }
            }
          } else if (level == '2') {
            if (this.brandList[i].cateId == parerntId) {
              this.chosedLevel.push(this.brandList[i].cateName)
              this.chosedLevel.push(name)
              return
            }
          }
        }
      },
    }

  }
</script>

<style lang="less" scoped>
  // 主要模块
  .main-tab {
    height: 40px;
    width: 100%;
    background-color: #fff;

    .main-tab-content {
      // position: relative;
      width: 1200px;
      height: 100%;
      background-color: #fff;
      margin-left: 50%;
      transform: translate(-50%, 0);
      box-sizing: border-box;
      border-bottom: 1px solid #F6F6F6;

      //品牌分类
      .main-tab-content-left {
        width: 240px;
        height: 40px;
        background-color: #8DCFFF;
        border-radius: 10px 10px 0px 0px;
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 15px;
          margin: 0px 10px 0px 20px;
        }

        .title {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #FFFFFF;
        }
      }

      .show-more {
        position: relative;
      }

      .show-more:hover .brand-classification {
        display: block;
      }

      //顶部导航栏
      .main-tab-content-right {
        display: flex;
        align-items: center;
        height: 100%;

        ul {
          height: 100%;
          padding-left: 40px;
          box-sizing: border-box;

          li {
            cursor: pointer;
            margin-right: 40px;
            font-size: 16px;
            padding: 0px 5px;
            font-family: Microsoft YaHei;
            color: #333;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            box-sizing: border-box;

            img {
              position: absolute;
              top: 0px;
              right: -20px;
              animation: movepoint .5s infinite;
            }
          }

          li:hover,
          .selected {
            color: #40A9FF;
            border-bottom: 2px solid #40A9FF;
            margin-bottom: 2px;
          }

          @keyframes movepoint {
            50% {
              top: 1px;
            }

            100% {
              top: 0px;
            }
          }
        }
      }
    }

    .brand-classification {
      display: none;
      position: absolute;
      left: 0px;
      top: 40px;
      z-index: 999;

      // 左侧导航
      .main-aside {
        width: 240px;
        height: 100%;
        box-sizing: border-box;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        img {
          width: 100%;
          height: 60px;
        }

        .brand-nav-box {
          position: relative;
          width: 100%;
          height: 590px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          li {
            height: calc((100%)/10);
            box-sizing: border-box;
            background-color: #fff;
            padding: 0px 15px;
            font-size: 14px;
            color: #333;
            cursor: pointer;
          }

          li:hover {
            background-color: #E6F7FF;
            color: #40A9FF;
          }

          //更改每个模块滚动条样式
          .more-classification::-webkit-scrollbar {
            width: 6px;
          }

          .more-classification::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
            background: rgba(0, 0, 0, 0.2);
          }

          .more-classification::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
            border-radius: 0;
            background: rgba(0, 0, 0, 0);
          }

          .more-classification {
            display: none;
            width: 730px;
            height: 600px;
            background-color: #fff;
            position: absolute;
            top: 0px;
            left: 240px;
            overflow-y: auto;
            padding: 35px 20px 40px 30px;
            box-sizing: border-box;
            box-shadow: 0px 0px 10px 5px #eee;

            .item:last-child {
              padding-bottom: 0;
            }

            .item {
              padding-bottom: 30px;

              .title {
                padding: 2px 0px 2px 10px;
                border-left: 1px solid #40A9FF;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
              }

              ul {
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;

                li {
                  margin: 5px 10px 5px 0px;
                  font-size: 12px;
                  font-family: Microsoft YaHei;
                  font-weight: 400;
                  color: #555555;
                  cursor: pointer;
                }

                li:hover {
                  color: #40A9FF;
                }
              }
            }
          }
        }

        .brand-nav-box:hover {
          .more-classification {
            display: block;
          }
        }


        .more-brands {
          height: 60px;
          box-sizing: border-box;
          padding: 0px 15px;
          background-color: #F4FBFF;

          p {
            color: #333;
            font-size: 16px;
          }

          img {
            width: 22px;
            height: 22px;
          }
        }
      }


    }
  }
</style>
