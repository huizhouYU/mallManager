<template>
  <div class="product-consult-content">
    <el-form ref="form" :model="form" label-width="95px" :rules="rules">
      <!-- 填写的表单内容 -->

      <el-form-item label="商品名称：" prop="goodsName" v-if="!goodsName">
        <el-input v-model="form.goodsName" placeholder="请输入您想找的商品名称"></el-input>
      </el-form-item>
      <el-form-item label="您想了解：" prop="typeName">
        <ul class="flex-start-center ul-item">
          <li :class="['li-item',{'selectLi':form.typeName == '价格'}]" @click="form.typeName = '价格'">价格</li>
          <li :class="['li-item',{'selectLi':form.typeName == '商品资料'}]" @click="form.typeName = '商品资料'">商品资料</li>
          <li :class="['li-item',{'selectLi':form.typeName == '货期'}]" @click="form.typeName = '货期'">货期</li>
          <li :class="['li-item',{'selectLi':form.typeName == '安调'}]" @click="form.typeName = '安调'">安调</li>
          <li :class="['li-item',{'selectLi':form.typeName == '其他'}]" @click="form.typeName = '其他'">其他</li>
        </ul>
      </el-form-item>
      <el-form-item label="手机号码：" prop="mobile">
        <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="单位名称：" prop="companyName">
        <el-input v-model="form.companyName" placeholder="请输入单位名称"></el-input>
      </el-form-item>
      <el-form-item label="">
        <!-- <div class="flex-center-center btn-sumbit-form" >提交</div> -->
        <el-button type="primary" @click="sumbit('form')" :loading="loadingShow">提交</el-button>
        <el-button v-show="cancelShow" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    guestMessage
  } from '@/api/index'
  export default {
    props: {
      'cancelShow': {
        type: Boolean,
        default: () => {
          return false
        }
      },
      'goodsName': {
        type: String
      }
    },
    data() {
      return {
        loadingShow: false,
        form: {
          goodsName: '', //商品名称
          mobile: '', //电话
          typeName: '价格', //类型
          companyName: '' //单位名称

        },
        rules: {
          goodsName: [{
              required: true,
              message: '请输入商品名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 50,
              message: '长度在 1 到 50 个字符',
              trigger: 'blur'
            }
          ],
          typeName: [{
            required: true,
            message: '请选择类型',
            trigger: 'blur'
          }],
          mobile: [{
            validator: this.checkPhone,
            required: true,
            trigger: 'blur'
          }],
          companyName: [{
              required: true,
              message: '请输入单位名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 50,
              message: '长度在 1 到 50 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    mounted() {
      this.form.goodsName = this.goodsName
    },
    watch:{
      goodsName(newVal){
        this.form.goodsName = newVal
      }
    },
    methods: {
      checkPhone(rule, value, callback) {
        if (!value) {
          callback(new Error('请输入手机号'))
        } else {
          const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/; //手机号正则表达式
          //const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/; //座机号正则表达式
          //const reg =/^([1-9]{1})(\d{14}|\d{18})$/; //通用银行账号正则表达式
          //const reg = /^[1-9][0-9]{5}$/; //邮编正则表达式
          //const reg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;//传真正则表达式
          if (reg.test(value)) {
            callback()
          } else {
            return callback(new Error('请输入正确的手机号'))
          }
        }
      },
      sumbit(formName) {
        try {
          this.loadingShow = true
          this.$refs[formName].validate((valid) => {
            if (valid) {
              guestMessage(this.form).then(response => {
                if (response.code == 10000) {
                  this.$message({
                    message: '信息提交成功！',
                    type: 'success'
                  });
                  this.$refs[formName].resetFields();
                  if (this.cancelShow) {
                    this.$emit('closeVisible')
                  }
                } else {
                  this.$message({
                    message: response.message,
                    type: 'error'
                  });
                }

              })
            } else {
              return false;
            }
          });
        } catch (e) {} finally {
          this.loadingShow = false
        }
      },
      cancel() {
        this.$emit('closeVisible')
      }
    }
  }
</script>

<style lang="less" scoped>
  /deep/ .el-form-item__label {
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #333333;
    line-height: 35px;
  }

  /deep/ .el-form-item__content,
  /deep/ .el-input__inner {
    height: 35px;
    line-height: 35px;
  }

  /deep/ .el-form-item {
    margin-bottom: 20px;
  }
</style>
<style lang="less" scoped>
  .product-consult-content {
    line-height: auto;
    padding: 20px 20px 10px 50px;
    width: 100%;
    box-sizing: border-box;

    .ul-item {
      box-sizing: border-box;

      .li-item {
        cursor: pointer;
        line-height: 14px;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #333333;
        padding: 11px 16px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #CED3D9;
        border-radius: 3px;
        margin-right: 10px;
      }

      .selectLi {
        border: 1px solid #40A9FF;
        color: #40A9FF;
      }
    }

    // input {
    //   box-sizing: border-box;
    //   height: 35px;
    //   background: #FFFFFF;
    //   border: 1px solid #B6BABF;
    //   border-radius: 3px;
    //   outline: none;
    //   padding-left: 10px;
    // }

    .btn-sumbit-form {
      cursor: pointer;
      box-sizing: border-box;
      width: 70px;
      height: 40px;
      background: #40A9FF;
      border-radius: 3px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
</style>
