<template>
  <div class="recommend-box">
    <div class="top-title">
      <img src="../../assets/images/shop/pic_line.png" alt="" v-show="isShowTitleImg">
      精品推荐
      <img src="../../assets/images/shop/pic_line.png" alt=""  v-show="isShowTitleImg">
    </div>
    <ul>
      <li v-for="(item,index) in adsList" :key="index">
        <img :src="item.imgPath" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      'isShowTitleImg':{
        type:Boolean,
        default:()=>{
          return true
        }
      },
      'adsList':{
        type:Array
      }
    },
    data() {
      return {
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
      }

    }
  }
</style>
