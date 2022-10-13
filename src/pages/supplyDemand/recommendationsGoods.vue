<template>
  <div class="recommendations-content">
    <div class="recommend-title">
      <span>精选推荐</span>
      <img src="../../assets/images/index/icon_fire_hot.png" alt="">
    </div>
    <div v-for="(item,index) in recommendgoodsList" :key="index" class="recommendgoods-item">
      <div class="img-title">
        <img :src="item.imgPath" alt="">
        <div class="bg-title">{{item.title}}</div>
      </div>
      <ul>
        <li v-for="(lab,ind) in item.laber" :key="ind">{{lab}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recommendgoodsList: [{
          title: '没开学什么事农村食品昆明绯闻漫天飞',
          imgPath: require('../../assets/images/index/demand/pic_gongqiu_tj.png'),
          laber: ['飞利浦', '核磁配件']
        },
        {
          title: '没开学什么事农村食品昆明绯闻漫天飞',
          imgPath: require('../../assets/images/index/demand/pic_gongqiu_tj.png'),
          laber: ['飞利浦', '核磁配件']
        },
        {
          title: '没开学什么事农村食品昆明绯闻漫天飞',
          imgPath: require('../../assets/images/index/demand/pic_gongqiu_tj.png'),
          laber: ['飞利浦', '核磁配件']
        },
        {
          title: '没开学什么事农村食品昆明绯闻漫天飞',
          imgPath: require('../../assets/images/index/demand/pic_gongqiu_tj.png'),
          laber: ['飞利浦', '核磁配件']
        }
        ]
      }
    }
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
      height: 117px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .bg-title {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        // height: 22px;
        background: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        padding: 5px 18px 4px 6px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    ul{
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
      li{
        background: #F6F6F6;
        border-radius: 2px;
        margin-right: 15px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        padding: 5px 6px;
      }
    }

  }
</style>
