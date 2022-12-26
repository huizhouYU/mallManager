<!-- 医疗器械 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more" :morePath="morePath" :tabIndex="tabIndex"></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in productList" :key="index" @click="toDetail(item.goodsId)">
        <div class="product_img">
          <img :src="item.defaultImage" alt="">
        </div>
        <div class="product_name">
          <div class="name">{{item.goodsName}}</div>
          <div class="name_shoppingCart">
            <ul>
              <li class="red" v-if="item.saleType == 1">￥{{item.price}}</li>
              <li class="red" v-else>可议价</li>
              <li class="bule">联系咨询</li>
              <!-- <li v-for="(x,i) in item.label" :key="i">{{x}}</li> -->
            </ul>
            <i class="iconfont">&#xe73d;</i>
          </div>
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
    props: ['productList','tabIndex'],
    data() {
      return {
        morePath:'/medicalApparatus',
        title: "医疗器械",
      }
    },
    methods: {
      toDetail(goodsId) {
        this.$router.push({           path: '/goodDetail',           query: { goodsId }
        })
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

  .item:hover {
    .product_name .name {
      color: #40A9FF;
    }
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
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .product_name {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;

      .name {
        width: 100%;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        color: #333333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .name_shoppingCart {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
          cursor: pointer;
          font-size: 14px;
          color: #999999;
        }

        i:hover {
          color: #40A9FF;

        }
      }

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: #666666;

        li {
          cursor: pointer;
          padding: 0px 0px 0px 4px;
          margin-top: px;
          height: 12px;
          line-height: 11px;
        }

        li:first-child {
          padding: 0px 4px 0px 0px;
          border-right: 1px solid #666666;
        }

        .red {
          color: #EC3333;
        }

        .bule {
          color: #40A9FF;
        }
      }

    }
  }
</style>
