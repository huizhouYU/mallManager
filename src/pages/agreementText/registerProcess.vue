<template>
  <div class="flex-column-start-center register-process">
    <div class="title">注册普通会员</div>
    <img src="../../assets/images/registerProcess/ordinary/01.jpg" alt="">
    <img src="../../assets/images/registerProcess/ordinary/02.jpg" alt="">
    <div class="title">注册商家</div>
    <img src="../../assets/images/registerProcess/shop/01.jpg" alt="">
    <img src="../../assets/images/registerProcess/shop/02.jpg" alt="">
    <img src="../../assets/images/registerProcess/shop/03.jpg" alt="">
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .register-process {
    padding: 20px;
    box-sizing: border-box;

    .title {
      margin: 20px 0px;
      font-size: 14px;
      color: #333;
    }

    img {
      width: auto;
      max-width: 100%;
    }

    img+img {
      margin-top: 20px;
    }
  }
</style>
