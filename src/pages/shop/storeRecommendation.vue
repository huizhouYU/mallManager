<template>
  <div class="recommend-box">
    <div class="top-title">
      <img src="../../assets/images/shop/pic_line.png" alt="">
      店内推荐
      <img src="../../assets/images/shop/pic_line.png" alt="">
    </div>
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <img :src="item.imgPath" alt="">
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goodsList: [{
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T核磁共'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          },
          {
            imgPath: require('../../assets/images/shop/pic_shop_recommend1.png'),
            title: '飞利浦核磁共振Au286R兼1.5T'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommend-box {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
  }

  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    margin-bottom: 15px;

    img {
      width: 62px;
    }

  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      position: relative;
      margin-bottom: 15px;

      img {
        width: 210px;
        height: 150px;
      }

      .title {
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 40px;
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 0px 0px 6px 6px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        padding: 15px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
