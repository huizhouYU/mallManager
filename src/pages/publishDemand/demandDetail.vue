<template>
  <div class="publish-demand-div">
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <div class="index-header-div">
      <index-header class="index-header"></index-header>
    </div>
    <div class="flex-center-center detail-content">
      <detail class="detail" :isShop="isShop"></detail>
    </div>

    <!-- <div class="flex-column-center-center publis-demand-content">
      <div class="flex-between-start main">

        <router-view class="route-publish-demand"></router-view>
        <div class="right-img">
          <img src="../../assets/images/index/pic_WeChat_service.png" alt="">
        </div>
      </div>
    </div> -->
    <!-- 底部 -->
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import headerTitle from '../index/headerTitle.vue'
  import indexHeader from '../../pages/index/indexHeader.vue'
  import detail from '../../pages/shop/demand/detail.vue'
  import indexBottom from '../index/indexBottom.vue'
  export default {
    components: {
      headerTitle,
      indexHeader,
      detail,
      indexBottom
    },
    data() {
      return {
        isShop: false
      }
    },
    mounted() {},
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

  .detail-content {
    background-color: #F5F5F5;
  }

  .detail {
    width: @core-weight;
  }
</style>
