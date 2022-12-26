<template>
  <div class="listicarts">
    <div class="flex-column-around-center item-cart" v-for="(item,index) in recommendGoods" :key="item.goodsId"
      @click="jumpMore(item.goodsId)">
      <!-- <img :src="item.imgPath" alt="图片无法加载"> -->
      <img :src="item.defaultImage" alt="图片无法加载">
      <p class="name">{{item.goodsName}}</p>
      <!-- <p class="remark">{{item.remark}}</p> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: ['recommendGoods'],
    data() {
      return {}
    },
    methods: {
      jumpMore(id) {
        this.$emit("jumpAllGoods", id)
      }
    }
  }
</script>

<style scoped lang="less">
  .listicarts {
    box-sizing: border-box;
    height: 740px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-content: space-between;
    justify-content: space-evenly;
  }

  .item-cart {
    width: 230px;
    height: 190px;
    box-sizing: border-box;
    background-color: #fff;
    padding: 5px 20px 20px 20px;

    img {
      height: 100px;
      width: auto;
      max-width: 100%;
    }

    .name {
      font-size: 16px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      text-align: center; 
    }

    .remark {
      color: #b0b0b0;
      font-size: 14px;
    }
  }
</style>
