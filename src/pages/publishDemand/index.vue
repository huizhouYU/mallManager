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
        <router-view class="route-publish-demand"></router-view>
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
          callback(new Error('请输入手机号'))
        } else if (!this.isCellPhone(
            value)) { // 引入methods中封装的检查手机格式的方法 callback(new Error('请输入正确的手机号!'))          } else {
          callback(new Error('请输入正确的手机号!'))
        } else {
          callback()
        }
      }
      return {

      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
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
    .route-publish-demand{
      width: 900px;
    }
  }
</style>
