<template>
  <div id="app">
    <!-- 侧边固定部分 -->
    <ul class="flex-column-start-center side-fixing">
      <!-- 购物车 -->
      <!-- <li class="shoppingcart" @click="toShoppingcart">
        <i class="iconfont">&#xe60f;</i>
      </li> -->
      <!-- 客服 -->
      <li class="flex-column-center-center select-item service-item">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/pic_service.png" alt="">
        </div>
        <span>客服</span>
        <div class="flex-column-center-center hidden-part">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_erweima.png" alt="">
          <span>联系客服</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item" @click="openVisible">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_zhaohuo_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_zhaohuo_sel.png" alt="" class="sel-img">
        </div>
        <span>找货</span>
        <div class="flex-column-center-center hidden-part only-font-hidden-part">
          <span>为您找货</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_phone_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_phone_sel.png" alt="" class="sel-img">
        </div>
        <span>手机端</span>
        <div class="flex-column-center-center hidden-part">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/pic_xiaochengxu.jpg" alt="">
          <span>小程序</span>
        </div>
      </li>
      <li class="flex-column-center-center select-item" @click="goTop">
        <div class="flex-center-center img-box">
          <img src="../src/assets/images/icon_top_def.png" alt="" class="def-img">
          <img src="../src/assets/images/icon_top_sel.png" alt="" class="sel-img">
        </div>
        <span>顶部</span>
        <div class="flex-column-center-center hidden-part only-font-hidden-part">
          <span>回到顶部</span>
        </div>
      </li>
    </ul>
    <router-view ref="child" />
    <el-dialog title="为您找货" :visible.sync="centerDialogVisible" width="50%" left>
      <div class="flex-start-center dialog-remark">填写您的咨询内容，我们将尽快给您答复。</div>
      <product-consult :cancelShow="cancelShow" @closeVisible="closeVisible" class="product-consult-dialog"></product-consult>
    </el-dialog>
  </div>
</template>

<script>
  import productConsult from "@/pages/index/productConsult.vue"
   import Bus from "@/utils/Bus.js"
  export default {
    name: 'App',
    components: {
      productConsult
    },
    data(){
      return{
       centerDialogVisible: false,
        cancelShow: true,
      }
    },
    mounted() {
      Bus.$on("openVisible", data => {
        this.openVisible()
      })
    },
    beforeDestroy() {
      // 取消监听
      Bus.$off("openVisible")
    },
    methods: {
      toShoppingcart() {
        this.$router.push({
          path: '/shoppingCart'
        })
      },
      //回到顶部
      goTop() {
        document.documentElement.scrollTop = 0;
      },
      // 找货
      openVisible() {
        this.centerDialogVisible = true
      },
      closeVisible() {
        this.centerDialogVisible = false
      },
    }
  }
</script>

<style>
  #app {
    /* background-color: #2c3e50; */
    height: 100vh;
  }
</style>
<style lang="less" scoped>
  .side-fixing {
    position: fixed;
    // background: #FFFFFF;
    top: 50%;
    right: 10px;
    padding: 10px;
    box-sizing: border-box;
    z-index: 999;

    .select-item {
      cursor: pointer;
      position: relative;
      width: 60px;
      height: 60px;
      background: #FFFFFF;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 12px;
      margin-bottom: 2px;

      .img-box {
        width: 20px;
        // height: 20px;
        box-sizing: border-box;
        margin-bottom: 5px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .def-img {
          display: block;
        }

        .sel-img {
          display: none;
        }
      }

      .hidden-part {
        display: none;
        position: absolute;
        top: 50%;
        left: -70px;
        // height: 100px;
        // width: 100%;
        padding: 10px;
        background: #FFFFFF;
        box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.1);
        transform: translate(-50%, -50%);
        border-radius: 4px;
        font-size: 12px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #333333;

        img {
          width: 100px;
          height: 100px;
          margin-bottom: 6px;
          object-fit: contain;
        }
      }

      .only-font-hidden-part {
        left: -50px;
        transform: translate(-50%, -50%);
        padding: 20px 17px;
      }

      .hidden-part::after {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: -16px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent transparent #FFFFFF;

      }
    }

    .select-item:hover {
      background: #239BFF;
      color: #FFFFFF;

      .img-box {

        .def-img {
          display: none;
        }

        .sel-img {
          display: block;
        }
      }

      .hidden-part {
        display: flex;
      }
    }

    .service-item {
      height: 70px;

      .img-box {
        width: 36px;
        height: 36px;
        box-sizing: border-box;
      }
    }
  }


 /deep/ .el-dialog__body {
   padding: 0px;
 }

 /deep/ .el-dialog__header {
   padding: 10px 20px;
 }

 /deep/ .el-dialog__headerbtn {
   top: 15px;
 }

 /deep/ .el-dialog {
   box-shadow: none;
 }

 .dialog-remark {
   padding-left: 20px;
   width: 100%;
   background-color: #e5f5ff;
   height: 40px;
   color: #666;
   font-size: 14px;
 }
</style>
