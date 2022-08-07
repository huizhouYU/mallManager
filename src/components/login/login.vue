<template>
  <div class="login-box">

    <el-form label-position="top" label-width="80px" :model="loginForm" class="login-form">
      <h2>登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-button type="primary" round class="login-btn" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default{
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
    }
  }
}
</script>

<style scoped >
  .login-box{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .login-form{
    background-color: #fff;
    width: 400px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  .login-btn{
    width: 100%;
    margin-bottom:10px;
    letter-spacing: 2px;
  }
</style>
