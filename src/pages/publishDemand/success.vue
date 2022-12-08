<template>
  <div class="flex-column-between-center publish-demand-success">
    <img src="../../assets/images/index/icon_Successfully published.png" alt="">
    <div class="success-title">发布成功</div>
    <span>若要修改内容到 <font>会员中心>供求信息</font>去修改</span>
    <div class="flex-center-center btns">
      <div class="flex-center-center publish-btn" @click="publishDemand">再发一条</div>
      <div class="flex-center-center index-btn" @click="indexHome">回到首页</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods:{
      publishDemand(){
        this.$router.push({
          path:'/publishDemandIndex',
          replace:true
        })
      },
      indexHome(){
        this.$router.push({
          path:'/',
          replace:true
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .publish-demand-success {
    margin: 25px 0;
    padding: 150px 0px 180px 0px;
    background-color: #fff;

    img {
      width: 112px;
      height: 107px;
      margin-bottom: 35px;
    }

    .success-title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #454545;
      margin-bottom: 15px;
    }

    span {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #454545;
      margin-bottom: 50px;

      font {
        cursor: pointer;
        color: #40A9FF;
      }
    }

    .btns {
      width: 100%;

      .publish-btn,
      .index-btn {
        cursor: pointer;
        width: 150px;
        height: 42px;
        border: 1px solid #40A9FF;
        border-radius: 4px;
      }

      .publish-btn {
        background: #40A9FF;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
      }

      .index-btn {
        margin-left: 48px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }

      .publish-btn:hover {
        border-color: #69c0ff;
        background-color: #69c0ff;
      }

      .index-btn:hover {
        color: #fff;
        background-color: #69c0ff;
      }
    }
  }
</style>
