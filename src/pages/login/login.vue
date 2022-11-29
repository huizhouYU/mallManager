<template>
  <div class="flex-column-start-center login-content">
    <div class="flex-center-center login-top">
      <div class="flex-between-center login-top-main">
        <img src="../../assets/images/logo.png" alt="">
        <ul class="flex-center-center">
          <li>医界商城首页</li>
          <li>服务热线：400-8888-888</li>
        </ul>

      </div>
    </div>
    <div class="flex-between-center login-content-main">
      <div class="login-left-box">
        <img src="../../assets/images/login/pic_login.png" alt="">
      </div>
      <div class="flex-center-center login-right-box">
        <el-form class="my-el-form" :model="loginForm" ref="ruleForm" :label-position="top" :rules="loginFormRules">
          <div class="flex-center-center title">医界商城登录</div>
          <ul class="flex-around-center">
            <li @click="loginWay= 1" :class="{'isActived':loginWay== 1}">账号登录</li>
            <li @click="loginWay= 2" :class="{'isActived':loginWay== 2}">验证码登录</li>
          </ul>
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.password" autocomplete="off" placeholder="账户/电话号码/邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex-between-center remember-forget ">
              <el-checkbox v-model="remember">记住用户密码</el-checkbox>
              <span class="forget-password">忘记密码？</span>
            </div>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <div class="flex-between-center login-form-bottom">
            <div class="flex-start-center other-login-way">其他登录方式
              <div class="weixin">
              </div>
              <div class="zhifubao">
              </div>
            </div>
            <ul class="flex-center-center">
              <li>没有账号？</li>
               <li>注册</li>
            </ul>
          </div>


        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginWay: 1,
        remember: false,
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
    methods: {
      onSubmit() {

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

        img {
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
        transform: translate(-50%, -70%);
        // animation: mymove 2.5s linear infinite alternate-reverse;
        animation: mymove 2.5s linear infinite alternate;
      }

      @keyframes mymove {
        0% {
          transform: translate(-50%, -40%)
        }

        50% {
          transform: translate(-50%, -50%)
        }

        100% {
          transform: translate(-50%, -60%)
        }
      }
    }

    .login-right-box {
      .my-el-form {
        box-sizing: border-box;
        width: 400px;
        height: 580px;
        background: #FFFFFF;
        box-shadow: 0px 2px 15px 0px rgba(137, 151, 183, 0.3);
        padding: 30px 40px 50px;

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
            // transition: width 3s linear;
          }
        }

        .remember-forget {
          width: 100%;

          /deep/ .el-checkbox__inner {
            width: 16px;
            height: 16px;
          }

          // /deep/ .el-form-item__content{
          //   width: 100%;
          //   display: flex;
          //   justify-content: space-between;
          //   align-items: center;
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

          .other-login-way {

            .weixin,
            .zhifubao {
              width: 30px;
              height: 30px;
              background: #E6EBF1;
              border-radius: 50%;
              box-sizing: border-box;
            }

            .weixin:hover,
            .zhifubao:hover {
              background-color: #1890FF;
            }

            .weixin {
              margin-left: 5px;
            }

            .weixin {
              margin-left: 15px;
            }
          }
          ul{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #585858;
          }
        }

        //改el-form中样式
        /deep/.el-form-item__label {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #515A6E;
          line-height: 30px;
        }

        /deep/ .el-form-item__content {
          line-height: auto;
        }

        /deep/.el-input__inner {
          border-radius: 0px;
        }

        /deep/.el-input__inner:focus {
          border-color: rgba(24, 144, 255, 1);
          box-shadow: 0px 0px 6px rgba(24, 144, 255, 0.3);
        }

        /deep/ .el-form-item {
          margin-bottom: 38px;
        }

        /deep/ .el-form-item:last-child {
          margin-bottom: 35px;
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
