<template>
  <div class="flex-column-start-center login-content">
    <div class="flex-center-center login-top">
      <div class="flex-between-center login-top-main">
        <img src="../../assets/images/logo.png" alt="" @click="toIndex">
        <ul class="flex-center-center">
          <li class="to-index" @click="toIndex">医界商城首页</li>
          <li>服务热线：400-8888-888</li>
        </ul>
      </div>
    </div>
    <div class="flex-between-center login-content-main">
      <div class="login-left-box">
        <img src="../../assets/images/login/pic_login.png" alt="">
      </div>
      <div class="flex-center-center login-right-box">
        <div class="my-login-div">
          <div class="flex-center-center title">医界商城登录</div>
          <ul class="flex-around-center">
            <li @click="loginWay= 1" :class="{'isActived':loginWay== 1}">账号登录</li>
            <li @click="loginWay= 2" :class="{'isActived':loginWay== 2}">验证码登录</li>
          </ul>
          <!-- 账号登录 -->
          <el-form class="my-el-form" :model="loginForm" ref="ruleForm" :label-position="labelPosition"
            :rules="loginFormRules" v-show="loginWay== 1">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="账户/电话号码/邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="flex-between-center remember-forget ">
                <el-checkbox v-model="remember">记住用户密码</el-checkbox>
                <span class="forget-password" @click="forget">忘记密码？</span>
              </div>
            </el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
            <div class="flex-between-center login-form-bottom">
              <div class="flex-start-center other-login-way">其他登录方式
                <div class="flex-center-center weixin">
                  <img src="../../assets/images/login/pic_WeChat_white.png" alt="">
                </div>
                <div class="flex-center-center zhifubao">
                  <img src="../../assets/images/login/pic_Alipay_white.png" alt="">
                </div>
              </div>
              <span class="span-register" @click="register"> 没有账号？<font class="bule-font">注册</font> </span>
            </div>
          </el-form>
          <!-- 验证码登录 -->
          <el-form class="my-el-form" :model="vCodeForm" ref="vCodeRuleForm" :label-position="labelPosition"
            :rules="vCodeFormRules" v-show="loginWay== 2">
            <el-form-item label="手机号" prop="mobile">
              <el-input type="text" v-model="vCodeForm.mobile" autocomplete="off" placeholder="电话号码"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="vCode" class="get-v-code-form-item">
              <el-input v-model="vCodeForm.vCode" :disabled="vCodeForm.mobile == ''">
                <template slot="append">
                  <span class="flex-center-center get-v-code" @click="getCode" v-show="countDown == 0">获取验证码</span>
                  <span class="flex-center-center count-down" v-show="countDown>0">{{countDown}}s</span>
                </template>
              </el-input>
            </el-form-item>
            <!-- 占位 -->
            <div class="seize-a-seat"></div>
            <el-button type="primary" @click="onSubmit('vCodeRuleForm')">登录</el-button>
            <div class="flex-between-center login-form-bottom">
              <div class="flex-start-center other-login-way">其他登录方式
                <div class="flex-center-center weixin">
                  <img src="../../assets/images/login/pic_WeChat_white.png" alt="">
                </div>
                <div class="flex-center-center zhifubao">
                  <img src="../../assets/images/login/pic_Alipay_white.png" alt="">
                </div>
              </div>
              <span class="span-register" @click="register"> 没有账号？<font class="bule-font">注册</font> </span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    sendMsg
  } from '@/api/user'
  export default {
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
        labelPosition: 'top',
        loginWay: 1,
        remember: false,
        countDown: 0,
        vCodeForm: {
          mobile: '',
          vCode: ''
        },
        vCodeFormRules: {
          mobile: [{
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }],
          vCode: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }],
        },
        loginForm: {
          username: '',
          password: ''
        },
        loginFormRules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
        }
      }
    },
    mounted() {
      this.getCookie()
    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
          return false
        } else {
          return true
        }
      },
      //获取手机短信验证码
      getCode() {
        if (!this.isCellPhone(this.vCodeForm.mobile)) {
          this.$message.error('请先输入正确的手机号码！')
          return
        }
        //axios请求
        let data = {
          mobile: this.vCodeForm.mobile
        }
        sendMsg(data).then(response => {
          console.log(response.data.data)
        })
        // 验证码倒计时
        if (!this.timer) {
          this.countDown = 60;
          // this.showRegisterGetVCode = false;
          this.timer = setInterval(() => {
            if (this.countDown > 0 && this.countDown <= 60) {
              this.countDown--;
            } else {
              // this.showRegisterGetVCode = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      },
      getCookie() {
        this.loginForm.username = localStorage.getItem("yj_UserName")
        this.loginForm.password = localStorage.getItem("yj_Pws")
        this.remember = Boolean(localStorage.getItem("yj_isRemember"))

      },
      //存储
      setCookie(userName, userPws) {
        localStorage.setItem("yj_UserName", userName)
        localStorage.setItem("yj_Pws", userPws)
        localStorage.setItem("yj_isRemember", this.remember)
      },
      //如果用户不选择记住密码清除cookie
      clearCookie() {
        this.setCookie("", "");
      },
      onSubmit(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login() {
        if (this.loginWay == 1) { //用户名密码登录
          //是否记住密码
          if (this.remember) {
            this.setCookie(this.loginForm.username, this.loginForm.password)
          } else {
            this.clearCookie();
          }
          this.$store.dispatch('user/login', this.loginForm)
            .then((response) => {
              if (response.code == 10000) {
                this.$router.replace({
                  path: this.redirect || '/',
                  query: this.otherQuery
                })
              } else {
                this.$message.error(response.message)
              }
              this.loading = false
            }).catch(() => {
              this.loading = false
              console.log("失败")
            })
        } else if (this.loginWay == 2) { //短信验证码登录
          this.$store.dispatch('user/msgLogin', this.vCodeForm)
            .then((response) => {
              if (response.code == 10000) {
                this.$router.replace({
                  path: this.redirect || '/',
                  query: this.otherQuery
                })
              } else {
                this.$message.error(response.message)
              }
              this.loading = false
            }).catch(() => {
              this.loading = false
              console.log("失败")
            })
        }

      },
      forget() {
        this.$router.push({
          path: '/forgetPsd',
        })
      },
      toIndex(){
        this.$router.push({
          path: '/',
        })
      },
      register() {
        this.$router.push({
          path: '/register',
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @core-weight: 1200px;

  .login-content {
    height: 100vh;
    min-width: @core-weight;
    width: 100%;
    background-color: #F5F7F9;

    .login-top {
      width: 100%;
      height: 70px;
      background: #FFFFFF;
      box-shadow: 0px 2px 5px 0px rgba(146, 167, 214, 0.3);

      .login-top-main {
        width: 1200px;
        height: 100%;

        .to-index {
          cursor: pointer;
        }        img {
          width: 145px;
          height: 49px;
        }

        ul {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #727272;

          li {
            padding: 0px 4px;
          }
        }

        li+li {
          border-left: 1px solid #727272;
        }
      }
    }

    .login-content-main {
      height: calc(100% - 70px);
      width: 1200px;
      margin: 0px center;
    }

    .login-left-box,
    .login-right-box {
      flex: 1;
      height: 100%;
    }

    .login-left-box {
      position: relative;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 566px;
        height: 453px;
        transform: translate(-50%, -45%);
        animation: mymove 2.5s linear infinite alternate-reverse;
      }

      @keyframes mymove {
        0% {
          transform: translate(-50%, -45%);
        }

        50% {
          transform: translate(-50%, -50%);
        }

        100% {
          transform: translate(-50%, -55%);
        }
      }
    }

    .login-right-box {
      .my-login-div {
        box-sizing: border-box;
        width: 400px;
        height: 500px;
        background: #FFFFFF;
        box-shadow: 0px 2px 15px 0px rgba(137, 151, 183, 0.3);
        padding: 30px 40px 50px;

      }

      .title {
        width: 100%;
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #1890FF;
      }

      ul {
        margin-top: 22px;
        margin-bottom: 40px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 17px;

        li {
          cursor: pointer;
        }

        .isActived {
          color: #1890FF;
          position: relative;
        }

        .isActived::after {
          display: block;
          content: '';
          width: 52px;
          height: 5px;
          background: #1890FF;
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .my-el-form {

        // 占位
        .seize-a-seat {
          height: 55px;
          width: 100%;
        }

        .get-v-code-form-item {
          /deep/ .el-input__inner {
            border-right: none;
          }

          /deep/.el-input__inner:focus {
            border-right: 1px solid rgba(24, 144, 255, 1);
            box-shadow: 0px 0px 2px 2px rgba(24, 144, 255, 0.3);
          }

          /deep/.el-form-item .is-error .el-input__inner {
            border-right: 1px solid #f56c6c;
          }

          // 获取短信验证码
          .get-v-code,
          .count-down {
            width: 90px;
            color: #495060;
            // padding-left: 10px;
            line-height: 14px;
            border-left: 1px solid #495060;
            cursor: pointer;
          }

          .get-v-code {
            cursor: pointer;
          }

          .get-v-code:hover {
            color: #1890FF;
            border-left: 1px solid #1890FF;
          }

        }

        .remember-forget {
          width: 100%;

          // /deep/ .el-checkbox__inner {
          //   width: 16px;
          //   height: 16px;
          // }
        }

        .forget-password {
          cursor: pointer;
          color: #585858;
        }

        .forget-password:hover {
          color: #1890FF;
        }

        .login-form-bottom {
          margin-top: 34px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #515A6E;

          .bule-font {
            color: #1890FF;
          }

          .other-login-way {

            .weixin,
            .zhifubao {
              cursor: pointer;
              width: 30px;
              height: 30px;
              background: #E6EBF1;
              border-radius: 50%;
              box-sizing: border-box;

              img {
                width: 20px;
                height: 16px;
              }
            }

            .weixin:hover {
              background-color: #28C445;
            }

            .zhifubao:hover {
              background-color: #40A9FF;
            }

            .weixin {
              margin-left: 5px;
            }

            .zhifubao {
              margin-left: 15px;
            }
          }

          .span-register {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #585858;
            cursor: pointer;
          }
        }

        //改el-form中样式
        /deep/.el-form-item__label {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #515A6E;
          line-height: 13px;
        }

        /deep/ .el-form-item__content {
          line-height: 13px;
        }

        /deep/.el-input__inner {
          border-radius: 0px;
          height: 34px;
        }

        /deep/.el-input__inner:focus {
          border-color: rgba(24, 144, 255, 1);
          box-shadow: 0px 0px 2px 2px rgba(24, 144, 255, 0.3);
        }

        /deep/ .el-form-item {
          margin-bottom: 35px;
        }

        /deep/ .el-form-item:last-child {
          margin-bottom: 35px;
        }

        /deep/ .el-input-group__append {
          background-color: #fff;
          border-left: none;
          padding: 0 4px;
        }

        /deep/.el-button {
          width: 100%;
          height: 32px;
          border-radius: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 2px;
          line-height: 0;
        }
      }
    }
  }
</style>
