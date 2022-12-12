<template>
  <div class="content">
    <div class="flex-center-center log-box" @click="toIndex">
      <img src="../../assets/images/logo.png" class="herder-logo" />
    </div>
    <div class="search-box">
      <div class="flex-between-center search-box-top">
        <div class="search">
          <el-select :popper-append-to-body="false" v-model="searchData.item" placeholder="请选择" class="search-select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="searchData.key" class="search-input" placeholder="输入相关产品名或企业名"></el-input>
          <el-button class="flex-around-center search-btn"><i class="iconfont search-iconfont">&#xe633;</i><span>搜索</span></el-button>
        </div>
        <!-- <span class="font-6">或</span> -->
        <button class="btn-demand" @click="publishDemand">快速发布需求</button>
      </div>
      <div class="search-box-bottom">
        <span class="hot-word">热搜词：</span>
        <ul>
          <li v-for="(item,index) in hotWords" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    searchKeys
  } from '@/api/index'
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '设备'
        }, {
          value: '2',
          label: '维修服务'
        }],
        searchData: {
          item: '1',
          key: ''
        },
        //热搜词
        hotWords: ['核磁共振', '骨密度器', '西门子', '血压仪']
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData(){
        searchKeys({typeId:1}).then(response=>{
          console.log("获取关键字列表：",response)
        })
      },
      publishDemand() {
        this.$router.push({
          path: '/publishDemandIndex'
        })
      },
      toIndex() {
        this.$router.push({
          path: '/',
          replace:true
        })
        this.$emit("changeTab",'0')
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    width: 1200px;
    margin: auto;
    display: flex;

    .log-box {
      width: 240px;
      height: 100%;

      /* 图标 */
      .herder-logo {
        width: 170px;
        height: 60px;
      }
    }

    .search-box {
      height: 100%;
      margin-left: 60px;
      width: 100%;

      .search-box-top {

        /* 搜索 */
        .search {
          height: 40px;
          width: 700px;
          border: 1px solid #8DCFFF;
          border-radius: 5px;
          display: flex;
          align-items: center;

          //去掉下拉框小三角
          /deep/ .el-popper[x-placement^=bottom] .popper__arrow {
            display: none;
          }

          //下拉框
          .search-select {
            width: 110px;
            border: none;
            display: flex;
            align-items: center;
          }

          /deep/.el-popper[x-placement^=bottom] {
            margin-top: 5px;
          }

          .search-select /deep/ .el-input,
          .search-select /deep/ .el-input__inner {
            border: none; // 去掉边框
          }


          //输入框
          .search-input {
            width: 506px;
            border-left: 1px solid #eee;
          }

          .search-input /deep/ .el-input__inner {
            width: 100%;
            height: 100%;
            border: none; // 去掉边框
            border-radius: 5px;
          }

          //搜索按钮
          .search-btn {
            width: 85px;
            height: 43px;
            // border-radius: 5px;
            border-top-right-radius: 5px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 5px;
            margin-right: -1px;
            background-color: #8dcfff;
            color: #fff;
            font-size: 16px;
            letter-spacing: 1px;
          }
        }
      }

      //底部热搜词
      .search-box-bottom {
        padding-left: 110px;
        padding-top: 10px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: #999999;
        display: flex;
        justify-content: flex-start;

        .hot-word {
          margin-right: 20px;
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          li {
            cursor: pointer;
            margin-right: 30px;
          }

          li:first-child {
            color: #EC3333;
          }

          li:hover {
            color: #40A9FF;
          }
        }
      }
    }
  }

  .font-6 {
    font-size: 16px;
    font-family: Microsoft YaHei;
    color: #666666;
  }

  // 快速发布需求
  .btn-demand {
    display: none;
    width: 146px;
    height: 40px;
    background: linear-gradient(0deg, #69C0FF 0%, #48AFF9 100%);
    border-radius: 10px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
    border: none;
  }
</style>
