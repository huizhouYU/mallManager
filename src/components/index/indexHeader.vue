<template>
  <div class="content">
    <img src="../../../build/logo.png" class="herder-logo" />
    <div class="search">
      <el-select v-model="searchData.item" placeholder="请选择" class="search-select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="searchData.key" class="search-input" placeholder="输入相关产品名或企业名"></el-input>
      <el-button class="search-btn"><i class="iconfont search-iconfont">&#xe633;</i>搜索</el-button>
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
          label: '服务'
        }],
        searchData: {
          item: '',
          key: ''
        }
      }
    },
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* 图标 */
  .herder-logo {
    width: 5rem;
    height: 100%;
  }

  /* 搜索 */
  .search {
    border: 0.125rem solid #8dcfff;
    border-radius: 10px;
    width: 800px;
    margin: 0 3.125rem;
    height: 60%;
    display: flex;
    align-items: center;
  }

  .search-select {
    height: 80%;
    border: none;
    display: flex;
    align-items: center;
    border-right: 0.125rem solid #d6d6d6;
  }

  .search-select /deep/ .el-input .el-input__inner {
    border-color: #DCDFE6 !important;
  }

  .search-select /deep/ .el-input,
  .search-select /deep/ .el-input__inner {
    border: none; // 去掉边框
    border-radius: 10px;
    height: 100%;
    width: 7.5rem;
    text-align: center;
    font-weight: 600;
    padding: 0;
  }

  /deep/ .el-select .el-input .el-select__caret {
    font-weight: 600;
    line-height: 100%;
    color: black;
  }

  .search-input {
    flex: 1;
  }

  .search-input /deep/ .el-input__inner {
    width: 100%;
    height: 100%;
    border: none; // 去掉边框
    border-radius: 0.625rem;
  }

  .search-iconfont {
    margin-right: 0.75rem;
  }

  .search-btn {
    height: 2.5rem;
    border-radius: 0.75rem;
    margin-right: -0.1875rem;
    background-color: #8dcfff;
    color: #fff;
    font-size: 0.875rem;
    letter-spacing: 0.125rem;
  }

  /* 登录 注册 按钮 */
  .header-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 1.25rem;
  }

  .btn-login {
    border: none;
  }

  .btn-register {
    background-color: #8dcfff;
    border: #8dcfff;
  }
</style>
