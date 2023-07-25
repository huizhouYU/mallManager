<template>
  <div class="recommendations-content">
    <div class="recommend-title">
      <span>精选推荐</span>
      <img src="../../assets/images/index/icon_fire_hot.png" alt="">
    </div>
    <div v-for="(item,index) in recommendgoodsList" :key="index" class="recommendgoods-item">
      <div class="img-title">
         <a :href="item.jpHref" target="blank">
        <img :src="item.imgPath" alt="">
         </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recommendgoodsList: [{
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230630001.jpg',
            jpHref:'https://www.scwwt.com/'
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230630002.jpg',
            jpHref:'ttp://www.dgyx-star1.cn/ '
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230630003.jpg',
            jpHref:'http://www.lifotronic.com/'
          },
          {
            imgPath: 'https://image.yijiequan.cn/yijiequan-client/attach/20230630004.jpg',
            jpHref:'http://www.xinyuchen.com/'
          }
        ]
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  .recommendations-content {
    background-color: #fff;
    padding: 15px 18px 30px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .recommend-title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    span {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin-right: 8px;
    }

    img {
      width: 38px;
      height: 27px;
    }
  }

  .recommendgoods-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px 10px 0px;
    border-bottom: 1px dashed #EEEEEE;

    .img-title {
      width: 214px;
      position: relative;

      img {
        width: 100%;
      }

    }
  }
  .recommendgoods-item:last-child {
    border-bottom: none;
  }
</style>
