<template>
  <div class="content">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if (this.loginForm.username === '' && this.loginForm.password === '') {
          this.$message.error('用户名和密码不能为空！')
          return ''
        }
        // this.$http.post('login', this.loginForm).then(res => {
        //   console.log(res)
        //   // 对象结构赋值
        //   const {data, meta: {msg, status}} = res.data
        //   if (msg === 200) {
        //     // 登录成功 跳转首页
        //     this.$router.push({
        //       name: 'home'
        //     })
        //   }
        // })
        //假设用户名和密码正确
        localStorage.setItem('token', '11111') //保存一个token值
        // 登录成功 跳转首页
        this.$router.push({
          name: 'home'
        })

      },
      async newlogin() {
        if (this.loginForm.username === '' && this.loginForm.password === '') {
          this.$message.error('用户名和密码不能为空！')
          return ''
        }
        const res = await this.$http.post('login', this.loginForm)
        // 对象结构赋值
        const {
          data,
          meta: {
            msg,
            status
          }
        } = res.data
        if (msg === 200) {
          //保存token值
          localStorage.setItem('token', data.token)
          // 登录成功 跳转首页
          this.$router.push({
            name: 'home'
          })
        }



      }

    }
  }
</script>

<style scoped>
  .content {
    height: 100%;
    background: url(../../assets/images/login_bg.png) no-repeat;
    background-size: cover;
  }

  .login-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .login-form {
    background-color: rgba(255, 255, 255, 0.8);
    width: 400px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .login-btn {
    width: 100%;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
</style>
