<template>
  <div class="recruit-enter-box">
    <a class="enter-btn" href="http://seller.yijiequan.cn/#/recruit/publishRecruit" target="_blank">
      <span>发布招聘信息</span>
      <img src="https://image.yijiequan.cn/yijiequan-client/attach/icon_arrow230627.png" alt="">
    </a>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .recruit-enter-box {
    width: 330px;
    height: 190px;
    background-image: url('https://image.yijiequan.cn/yijiequan-client/attach/pic_bg_recruit.png');
    position: relative;

    a {
      text-decoration: none;
    }

    .enter-btn {
      // transition: all 0.6s ease;
      cursor: pointer;
      position: absolute;
      left: 20px;
      bottom: 30px;
      width: 137px;
      height: 34px;
      box-sizing: border-box;
      border-radius: 17px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 15px;
      font-size: 14px;
      line-height: 13px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #3C7EEE;
      border: 1px solid transparent;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(to right, #fff, #fff),
        linear-gradient(to right, #5EA3FB, #A4DBFC);

      img {
        transition: all 0.6s ease;
        margin-left: 6px;
        width: 16px;
        height: 16px;
      }
    }

    .enter-btn:hover {
      // width: 167px;
      // transition: all 0.6s ease;

      img {
        transition: all 0.6s ease;
        margin-left: 12px;
      }
    }
  }
</style>
