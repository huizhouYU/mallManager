<template>
  <div class="flex-column-start-center forget-content">
    <div class="flex-center-center  forget-top">
      <div class="flex-between-center  forget-top-main">
        <img src="../../assets/images/logo.png" alt="" @click="toIndex">
        <ul class="flex-center-center">
          <li class="to-index" @click="toIndex">医界商城首页</li>
          <!-- <li>服务热线：400-8888-888</li> -->
        </ul>
      </div>
    </div>
    <div class="flex-center-center  forget-content-main">
      <div class="flex-column-start-center forget-form">
        <span class="title">手机号码找回</span>
        <el-form class="my-el-form" :model="forgetForm" ref="forgetRuleForm" :label-position="labelPosition"
          :rules="forgetFormRules">
          <el-form-item label="" prop="mobile">
            <el-input type="text" v-model="forgetForm.mobile" autocomplete="off" placeholder="电话号码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="forgetForm.password" autocomplete="off" placeholder="设置新密码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="newPassword">
            <el-input type="password" v-model="forgetForm.newPassword" autocomplete="off" placeholder="请重新输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="captcha" class="get-v-code-form-item">
            <el-input v-model="forgetForm.captcha" :disabled="countDown == 0">
              <template slot="append">
                <span class="flex-center-center get-v-code" @click="getCode" v-show="countDown==0">获取验证码</span>
                <span class="flex-center-center count-down" v-show="countDown>0">{{countDown}}s</span>
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit('forgetRuleForm')">提交</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    sendForgetPwd,findPwd
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
        agree: false,
        labelPosition: 'top',
        countDown: 0,
        forgetForm: {
          mobile: '',
          password: '',
          newPassword: '',
          captcha: ''
        },
        forgetFormRules: {
          mobile: [{
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入新密码',
            trigger: 'blur'
          }],
          newPassword: [{
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          }],
          captcha: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }],
        },
      }
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
        if (!this.isCellPhone(this.forgetForm.mobile)) {
          this.$message.error('请先输入正确的手机号码！')
          return
        }
        //axios请求
        let data = {
          mobile: this.forgetForm.mobile
        }
        sendForgetPwd(data).then(response => {
          console.log(response.data.data)
        })
        // 验证码倒计时
        if (!this.timer) {
          this.countDown = 60;
          this.timer = setInterval(() => {
            if (this.countDown > 0 && this.countDown <= 60) {
              this.countDown--;
            } else {
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }


      },
      onSubmit(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            findPwd(this.forgetForm).then(response=>{
              if(response.code ==10000){
                this.$message.success("密码修改成功！")
              }else{
                this.$message.error(response.message)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toIndex() {
        this.$router.push({
          path: '/',
        })
      },
      login() {
        this.$router.push({
          path: '/login',
          replace: true
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  @core-weight: 1200px;

  .forget-content {
    height: 100vh;
    min-width: @core-weight;
    width: 100%;
    background-color: #F5F7F9;

    .bule-font {
      color: #1890FF !important;
    }

    .forget-top {
      width: 100%;
      height: 70px;
      background: #FFFFFF;
      box-shadow: 0px 2px 5px 0px rgba(146, 167, 214, 0.3);

      .forget-top-main {
        width: 1200px;
        height: 100%;

        .to-index {
          cursor: pointer;
        }

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

    .forget-content-main {
      height: calc(100% - 70px);
      width: 1200px;
      margin: 0px center;

      .forget-form {
        width: 900px;
        height: 475px;
        background: #FFFFFF;
        box-shadow: 0px 2px 15px 0px rgba(137, 151, 183, 0.3);
        box-sizing: border-box;
        padding-top: 50px;

        .title {
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #555555;
          margin-bottom: 24px;
          line-height: 22px;
        }

        .span-login {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #585858;
          cursor: pointer;
          margin-top: 15px;
          line-height: 12px;
        }

        .my-el-form {


          .get-v-code-form-item {
            /deep/ .el-input__inner {
              border-right: none;
              height: 34px;
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

          .agree-item {
            margin-bottom: 15px;
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
            line-height: 34px;
            height: 34px;
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
            margin-bottom: 34px;
            margin-top: 26px;
          }

          /deep/ .el-form-item:last-child {
            margin-bottom: 0px;
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
  }
</style>
