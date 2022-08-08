<template>
  <div class="content">
    <div class="login-box">
      <el-form label-position="top" label-width="80px" :model="loginForm" class="login-form">
        <h2>登录</h2>
        <el-form-item label="用户名" class="form-label">
          <el-input v-model="loginForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码"  class="form-label">
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="form-label">
          <div class="login-code">
            <el-input v-model="loginForm.verCode" class="login-code-input"></el-input>
            <div class="code" @click="createCode()" ></div>
            <a href="#" @click="createCode()">看不清换一张</a>
          </div>
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
          password: '',
          verCode: ''
        },
        code: '', //验证码的初始值
      }
    },
    mounted() {
      this.createCode()
    },
    methods: {
      //生成验证码
      createCode() {
        this.code = ""; //验证码的初始值
        const codeLength = 4; //验证码的长度
        // 验证码的组成成分
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f',
          'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
          'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
          // 获取随机数：下标
          var charNum = Math.floor(Math.random() * 62);
          // 验证码
          this.code += codeChars[charNum];
        }
        document.getElementsByClassName("code")[0].innerText = this.code;
      },
      // 验证验证码的函数
      checkCode() {
        // 判断验证码是否输入正确
        if (this.loginForm.verCode.length<=0){
          this.$message.error('请输入验证码！')
          return false
        }else if(this.loginForm.verCode.toUpperCase() != this.code.toUpperCase()){
          this.$message.error('验证码输入有误！')
          // 更新验证码
          this.createCode();
          // 清空输入框
         this.loginForm.verCode = "";
         return false
        }else{
          return true
        }
      },
      login() {
        if (this.loginForm.username === '' && this.loginForm.password === '') {
          this.$message.error('用户名和密码不能为空！')
          return ''
        }
        if(!this.checkCode()){
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
        // localStorage.setItem('token', '11111') //保存一个token值
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
    margin:20px 0px 10px 0px;
    letter-spacing: 2px;
  }

  .code {
    width: 100px;
    height: 40px;
    background-color: #3c8be6;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    letter-spacing: 10px;
    font-style: italic;
    /*使鼠标放在上面的时候将鼠标的图标变成一个小手*/
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #ff905c;
  }

  a:hover {
    text-decoration: underline;
  }

  .login-code{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }

  .login-code-input{
    margin-right: 10px;
    width: 160px;
  }

  .el-form-item{
    margin-bottom: 0rem;
  }

  .form-label /deep/ .el-form-item__label{
    padding: 0px;
  }
</style>
