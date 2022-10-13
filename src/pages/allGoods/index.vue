<template>
  <div class="whole">
    <div class="select-content">
      <div class="current-selected">
        <div class="title">当前筛选结果</div>
        <div class="value">基础外科用刀/疣体剥离刀</div>
      </div>
      <div class="select-item">
        <div class="title">品牌</div>
        <div class="item">
          <img src="../../assets/images/index/brands/logo_安科.png" alt="">
          <img src="../../assets/images/index/brands/logo_佳能.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .whole{
    background-color: #fff;
    padding: 20px 30px 30px 20px;
    box-sizing: border-box;
    margin-top: 60px;
  }
  .select-content{
    .title{
      width: 100px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #757575;
      display: flex;
      justify-content: flex-start;
    }
    .current-selected{
      padding-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #F6F6F6;
      .value{
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }
    }
  }
  .select-item{
    padding: 13px 0px 10px 0px;
    border-bottom: 1px solid #F6F6F6;
    display: flex;
    justify-content: flex-start;
    .item{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img{
        width: 100px;
        height: 40px;
        border: 1px solid #F5F5F5;
        border-radius: 6px;
        padding: 4px;
        margin-right: 15px;
      }
    }
  }
</style>
