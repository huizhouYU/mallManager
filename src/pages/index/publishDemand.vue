<template>
  <div class="publish-demand-div">
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <div class="index-header-div">
      <index-header class="index-header"></index-header>
    </div>

    <div class="flex-column-center-center publis-demand-content">
      <!-- <div class="main"> -->
      <el-form class="main" ref="form" :model="form">
        <!-- 大标题 -->
        <div class="big-title">
          <div class="flex-center-center img-div">
            <img src="../../assets/images/index/icon_massage_type.png" alt="">
          </div>
          <span>信息类型</span>
          <div class="line"></div>
        </div>
        <div class="demand-type">
          <el-form-item>
            <el-radio v-model="form.type" label="1">
              <div :class="['flex-center-center','demand-type-item',{'selected':form.type==1}]">求购设备</div>
            </el-radio>
            <el-radio v-model="form.type" label="2">
              <div :class="['flex-center-center','demand-type-item',{'selected':form.type==2}]">供应设备</div>
            </el-radio>
          </el-form-item>
        </div>

      </el-form>

      <!-- </div> -->
    </div>

    <!-- 底部 -->
    <index-bottom></index-bottom>


  </div>
</template>

<script>
  import headerTitle from '../index/headerTitle.vue'
  import indexHeader from '../../pages/index/indexHeader.vue'
  import indexBottom from '../index/indexBottom.vue'
  export default {
    components: {
      headerTitle,
      indexHeader,
      indexBottom
    },
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          // let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/; if (value === '') {
          callback(new Error('请输入手机号'))
        } else if (!this.isCellPhone(
            value)) { // 引入methods中封装的检查手机格式的方法 callback(new Error('请输入正确的手机号!'))          } else {
          callback(new Error('请输入正确的手机号!'))
        } else {
          callback()
        }
      }
      return {
        form: {
          type: '供应设备'
        }

      }
    },
    mounted() {

    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
          return false
        } else {
          return true
        }
      },
      //深复制对象方法
      cloneObj(obj) {
        var newObj = {};
        if (obj instanceof Array) {
          newObj = [];
        }
        for (var key in obj) {
          var val = obj[key];
          newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
        }
        return newObj;
      },

    }
  }
</script>

<style lang="less" scoped>
  //核心宽度
  @core-weight: 1200px;

  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-start-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-start-start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-end-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-between-start {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .flex-around-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .flex-column-start-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-start-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-column-start-end {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .flex-column-between-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .flex-column-center-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // 顶部模块 购物车
  .shop-box {
    position: sticky;
    box-sizing: border-box;
    width: 100vw;
    height: 34px;
    background-color: #f5f5f5;
    z-index: 999;
  }

  .index-header-div {
    position: sticky;
    background-color: #fff;
    height: 103px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .publis-demand-content {
    width: 100%;
    background-color: #F5F5F5;

    .main {
      padding: 25px 30px 40px;
      margin: 45px 0px 25px 0px;
      width: @core-weight;
      background-color: #fff;

      .big-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #1890FF;

        .img-div {
          width: 38px;
          height: 38px;
          background: #E6F7FF;
          border-radius: 50%;

          img {
            width: 22px;
            height: 22px;
          }
        }

        span {
          margin: 0px 30px 0px 10px;
        }

        .line {
          height: 1px;
          flex: 1;
          border-bottom: 1px solid #EEEEEE;
        }
      }

      //类型
      .demand-type {
        margin-top: 33px;

        /deep/.el-form-item__content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .el-radio {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .demand-type-item {
          width: 200px;
          height: 42px;
          background: #FFFFFF;
          border: 1px solid #EEEEEE;
          border-radius: 4px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #454545;
        }
        .selected{
          border: 3px solid rgba(24,144,255,0.1);
          color: #1890FF;
        }
      }


    }
  }
</style>
