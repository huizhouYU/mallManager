<template>
  <div class="content">
    <div class="log-box">
      <img src="../../assets/images/logo.png" class="herder-logo" />
    </div>
    <div class="search">
      <el-select v-model="searchData.item" placeholder="请选择" class="search-select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="searchData.key" class="search-input" placeholder="输入相关产品名或企业名"></el-input>
      <el-button class="search-btn"><i class="iconfont search-iconfont">&#xe633;</i><span>搜索</span></el-button>
    </div>
    <div class="header-btn">
      <el-button class="btn-login">登录</el-button>
      <el-button type="primary" class="btn-register">注册</el-button>
    </div>
  </div>

</template>

<script>
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
          item: '',
          key: ''
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .content {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .log-box {
      width: 240px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      /* 图标 */
      .herder-logo {
        width: 170px;
        height: 60px;
      }
    }

    /* 搜索 */
    .search {
      height: 40px;
      margin-left: 60px;
      width: 700px;
      border: 1px solid #8DCFFF;
      border-radius: 5px;
      // margin: 0 3.125rem;
      display: flex;
      align-items: center;

      //下拉框
      .search-select {
        width: 110px;
        // height: 80%;
        border: none;
        display: flex;
        align-items: center;
        // border-right: 0.125rem solid #d6d6d6;
      }

      //箭头颜色
      .el-select .el-input .el-select__caret,
      .el-icon-arrow-up:before {
        color: #000;
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
        height: 42px;
        border-radius: 5px;
        margin-right: -1px;
        background-color: #8dcfff;
        color: #fff;
        font-size: 16px;
        letter-spacing: 1px;
        display: flex;
        flex-direction: inherit;
        align-items: center;
        justify-content: space-around;
      }
    }
  }

  /* 登录 注册 按钮 */
  .header-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 1.25rem;
    font-size: 16px;
  }

  .btn-login {
    border: none;
  }

  .btn-register {
    width: 80px;
    height: 40px;
    background-color: #8dcfff;
    border: #8dcfff;
  }
</style>
