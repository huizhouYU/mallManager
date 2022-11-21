<template>
  <div class="publish-demand-div">
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <div class="index-header-div">
      <index-header class="index-header"></index-header>
    </div>

    <div class="flex-column-center-center publis-demand-content">
      <div class="flex-between-start main">
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
            <!-- <div class="flex-column-center-center upload-img-div">
              <div class="flex-between-center upload-btn">
                <i class="iconfont">&#xe600;</i>
                <span>添加相关图片</span>
              </div>
              <span class="tip">图片上传不超过5张，图片支持jpg/png格式，不超过500kb，尺寸为800*800</span>
            </div> -->
            <DragUpload @allList="trialImgs" :limit="limit" :limitWidth="800" :limitHeight="800"
              :imgList="form.imgList">
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
          <div :class="['flex-center-center','publis-btn',{'publish':agreed}]">发布</div>
          <el-checkbox v-model="agreed"></el-checkbox>
          <span class="agree-tip">阅读并同意
            <router-link tag="a" class="bule" target="_blank" to="./residencyAgreement">《入驻协议》</router-link>和
            <router-link tag="a" class="bule" target="_blank" to="./legalStatement">《法律声明》</router-link>
          </span>
        </el-form>
        <div class="right-img">
          <img src="../../assets/images/index/pic_WeChat_service.png" alt="">
        </div>
      </div>

    </div>

    <!-- 底部 -->
    <index-bottom></index-bottom>


  </div>
</template>

<script>
  import headerTitle from '../index/headerTitle.vue'
  import indexHeader from '../../pages/index/indexHeader.vue'
  import indexBottom from '../index/indexBottom.vue'
  import DragUpload from '../../components/DragUpload.vue'
  export default {
    components: {
      headerTitle,
      indexHeader,
      indexBottom,
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

    }
  }
</script>

<style lang="less" scoped>
  //核心宽度
  @core-weight: 1200px;

  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-start-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-start-start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-end-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-between-start {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .flex-around-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .flex-column-start-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-start-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-column-start-end {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .flex-column-between-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .flex-column-center-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .publish-demand-div {
    position: relative;
  }

  // 顶部模块 购物车
  .shop-box {
    position: sticky;
    box-sizing: border-box;
    width: 100vw;
    height: 34px;
    background-color: #f5f5f5;
    z-index: 999;
    top: 0px;
  }

  .index-header-div {
    position: sticky;
    background-color: #fff;
    height: 103px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    top: 34px;
  }

  .publis-demand-content {
    width: 100%;
    background-color: #F5F5F5;

    .main {
      width: @core-weight;
    }

    .right-img {
      margin-top: 25px;

      img {
        width: 270px;
        height: 190px;
      }
    }

    .el-form-main {
      width: 900px;
      box-sizing: border-box;
      padding: 25px 30px 40px;
      margin: 25px 0px 25px 0px;
      // width: @core-weight;
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

        // .upload-img-div {
        //   width: 220px;
        //   height: 200px;
        //   box-sizing: border-box;
        //   background: #FFFFFF;
        //   border: 1px solid #EEEEEE;
        //   border-radius: 4px;
        //   padding: 20px;

        //   .upload-btn {
        //     padding: 0px 12px;
        //     box-sizing: border-box;
        //     cursor: pointer;
        //     width: 130px;
        //     height: 28px;
        //     background: #40A9FF;
        //     font-size: 14px;
        //     font-family: Microsoft YaHei;
        //     font-weight: 400;
        //     color: #FFFFFF;
        //   }

        //   .tip {
        //     margin-top: 22px;
        //     font-size: 12px;
        //     font-family: Microsoft YaHei;
        //     font-weight: 400;
        //     color: #BBBBBB;
        //     line-height: 18px;
        //   }
        // }

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
