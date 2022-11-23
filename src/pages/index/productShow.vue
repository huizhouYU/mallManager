<!-- 产品展示 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more"></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in productList">
        <div class="product_img">
          <img :src="item.imgPath" alt="">
        </div>
        <div class="product_name">
          <span class="name">{{item.name}}</span>
          <ul>
            <li v-for="(x,i) in item.label" :key="i">{{x}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import titleMore from '../../pages/index/titleMore.vue'
  export default {
    components: {
      titleMore
    },
    data() {
      return {
        title: "产品展示",
        productList: [{
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        },
        {
          imgPath: require('../../../src/assets/images/index/pic_product1.png'),
          name: '商品名称名称',
          label: ['商品名称', '商品名称']
        }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .title_more {
    margin-bottom: 15px;
  }

  .item_content {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
  }

  .item {
    width: 232px;
    height: 295px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 16px 18px 20px 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .product_img {
      width: 200px;
      height: 200px;
      padding: 15px 20px;
      box-sizing: border-box;
      // border: 1px solid #eee;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .product_name {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .name {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        color: #333333;
      }
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: #666666;

        li {
          padding: 0px 0px 0px 4px;
          margin-top: px;
          height: 12px;
          line-height: 11px;
        }

        li:first-child {
          padding: 0px 4px 0px 0px;
          border-right: 1px solid #666666;
        }
      }

    }
  }
</style>
