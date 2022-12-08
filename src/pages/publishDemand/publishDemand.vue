<template>
  <div class="publish-demand-content">
    <el-form class="el-form-main" ref="form" :model="form">
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
      <!-- 大标题 -->
      <div class="big-title">
        <div class="flex-center-center img-div">
          <img src="../../assets/images/index/icon_basic_information.png" alt="">
        </div>
        <span>基本信息</span>
        <div class="line"></div>
      </div>
      <el-form-item class="title-el-form">
        <label for="title" class="cricle"></label>
        <el-input id='title' v-model="form.title" placeholder="请输入标题" maxlength="20" show-word-limit></el-input>
      </el-form-item>
      <div class="flex-between-center  both-el-form">
        <el-form-item class="both-el-form-item">
          <label for="title" class="cricle"></label>
          <el-input id='title' v-model="form.equipmentName" placeholder="请输入设备名称" maxlength="20" show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item class="both-el-form-item">
          <label for="title" class="cricle"></label>
          <el-input id='title' v-model="form.brandName" placeholder="选择设备品牌" maxlength="20" show-word-limit>
          </el-input>
        </el-form-item>
      </div>
      <div class="flex-between-center  both-el-form">
        <el-form-item class="both-el-form-item">
          <label for="title" class="cricle"></label>
          <el-input id='title' v-model="form.equipmentType" placeholder="请输入设备类型" maxlength="20" show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item class="both-el-form-item">
          <label for="title" class="cricle"></label>
          <el-input id='title' v-model="form.pn" placeholder="请输入P/N码" maxlength="20" show-word-limit></el-input>
        </el-form-item>
      </div>
      <el-form-item class="detail-el-form">
        <label for="title" class="cricle"></label>
        <el-input id='title' v-model="form.detail" placeholder="请详细描述您的需求" maxlength="600" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item class="img-el-form">
        <label for="title" class="cricle"></label>
        <DragUpload @allList="trialImgs" :limit="limit" :limitWidth="800" :limitHeight="800" :imgList="form.imgList">
        </DragUpload>
      </el-form-item>
      <!-- 大标题 -->
      <div class="big-title">
        <div class="flex-center-center img-div">
          <img src="../../assets/images/index/icon_telephone.png" alt="">
        </div>
        <span>联系方式</span>
        <div class="line"></div>
      </div>
      <el-form-item class="mobileName-el-form">
        <label for="mobileName" class="cricle"></label>
        <el-input id='mobileName' v-model="form.mobileName" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <div class="flex-between-center  both-el-form">
        <el-form-item class="both-el-form-item mobile-el-form-item">
          <label for="mobile" class="cricle"></label>
          <el-input placeholder="请输入联系手机" v-model="form.mobile" id="mobile">
            <template slot="append">获取验证码</template>
          </el-input>
        </el-form-item>
        <span class="mobil-tip">未注册的手机号发布成功后将自动创建账号</span>
        <el-form-item class="both-el-form-item code-el-form-item">
          <label for="code" class="cricle"></label>
          <el-input id='code' v-model="form.code" placeholder="验证码"></el-input>
        </el-form-item>
      </div>
      <div :class="['flex-center-center','publis-btn',{'publish':agreed}]" @click="submit">发布</div>
      <el-checkbox v-model="agreed"></el-checkbox>
      <span class="agree-tip">阅读并同意
        <router-link tag="a" class="bule" target="_blank" to="./residencyAgreement">《入驻协议》</router-link>和
        <router-link tag="a" class="bule" target="_blank" to="./legalStatement">《法律声明》</router-link>
      </span>
    </el-form>
  </div>
</template>

<script>
  import DragUpload from '../../components/DragUpload.vue'
  export default {
    components: {
      DragUpload
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
        agreed: false,
        limit: 5,
        form: {
          type: '供应设备',
          title: '',
          equipmentName: '',
          brandName: '',
          equipmentType: '',
          pn: '',
          detail: '',
          mobileName: '',
          mobile: '',
          imgList: []
        },
        ruleForm: {
          trialImgs: [],
        },

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
      // 图片可拖曳排序
      trialImgs(allList) {
        this.ruleForm.trialImgs = allList
        console.log(this.ruleForm.trialImgs)
      },
      submit() {
        if(this.agreed){
          this.$router.push({
            path: '/success',
            replace:true
          })
        }

      }

    }
  }
</script>

<style lang="less" scoped>
  .publish-demand-content {
    width: 100%;
    background-color: #F5F5F5;

    .el-form-main {
      width: 100%;
      box-sizing: border-box;
      padding: 25px 30px 40px;
      margin: 25px 0px 25px 0px;
      background-color: #fff;

      /deep/ .el-input__inner {
        height: 42px;
        box-sizing: border-box;
        border-color: #EEEEEE;
      }

      /deep/ .el-input__inner:focus {
        border-color: #40A9FF;
      }

      /deep/ .el-input-group__append {
        cursor: pointer;
        background: #FFFFFF;
        border-color: #EEEEEE;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }

      .big-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #1890FF;
        margin-top: 30px;
        margin-bottom: 33px;

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
          border-bottom: 1px dashed #EEEEEE;
        }
      }

      .big-title:first-child {
        margin-top: 0px;
      }

      /deep/.el-form-item__content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      //类型
      .demand-type {
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

        .selected {
          border: 1px solid #40A9FF;
          box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
          color: #1890FF;
        }
      }

      .cricle {
        width: 4px;
        height: 4px;
        background: #FF4949;
        border-radius: 50%;
        margin-right: 8px;
        display: block;
      }

      .title-el-form {
        /deep/ .el-input {
          width: 700px;
          height: 42px;
        }
      }

      .both-el-form {
        position: relative;
        width: 712px;

        .both-el-form-item {
          width: 330px;
          height: 42px;
        }

        .mobile-el-form-item {
          width: 400px;

          /deep/ .el-input {
            width: 400px;
            height: 42px;
          }
        }

        .code-el-form-item {
          width: 200px;

          /deep/ .el-input {
            width: 200px;
            height: 42px;
          }
        }

        .mobil-tip {
          position: absolute;
          top: 52px;
          left: 12px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
        }
      }

      .detail-el-form {
        .cricle {
          background-color: #fff;
        }

        /deep/ .el-input {
          width: 720px;
          height: 42px;
        }
      }

      .img-el-form {
        /deep/.el-form-item__content {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .cricle {
          margin-top: 20px;
        }



      }

      .mobileName-el-form {
        /deep/ .el-input {
          width: 330px;
          height: 42px;
        }
      }

      .publis-btn {
        margin-top: 40px;
        margin-bottom: 10px;
        box-sizing: border-box;
        cursor: pointer;
        width: 140px;
        height: 42px;
        background: #bbb;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
      }

      .publish {
        background: #40A9FF;
      }

      .agree-tip {
        margin-left: 6px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;

        .bule {
          text-decoration: none;
          cursor: pointer;
          color: #40A9FF;
        }
      }


    }
  }
</style>
