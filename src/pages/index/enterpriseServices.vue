<!-- 企业服务 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more" :morePath="morePath" :tabIndex="tabIndex"></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in companyList" :key="index">
        <!-- 其他 -->
        <div class="flex-start-start item-content">
          <img :src="item.storeLogo" alt="">
          <div class="flex-column-between-start other-info">
            <div class="company-name">{{item.storeName}}</div>
            <!-- <div class="flex-start-start company-info-item">
              <div class="key">所属分类：</div>
              <div class="value">{{item.cateName}}</div>
            </div> -->
            <div class="flex-start-start company-info-item">
              <div class="key">公司地址：</div>
              <div class="value address">
                <span>{{item.region}}{{item.address}}</span>
              </div>
            </div>
            <div class="flex-center-center go-company" @click="toCopmany(item.storeId)">进入店铺</div>
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
    props: ['companyList', 'tabIndex'],
    data() {
      return {
        morePath: '/enterpriseServices',
        title: "企业服务",
      }
    },
    methods: {
      toCopmany(storeId) {
        this.$router.push({
          path: '/shopHome',
          query: {
            storeId
          }
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;

    .item:hover {
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

      .company-name {
        color: #40A9FF !important;
      }
    }

    .item {
      width: 400px;
      height: 175px;
      background: #FFFFFF;
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      box-sizing: border-box;

      .company-info-item {
        width: 100%;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;

        .key {
          width: 60px;
          color: #555555;
        }

        .value {
          text-overflow: ellipsis;
          flex: 1;
          color: #444444;
          box-sizing: border-box;
        }

        .address {
          span {
            display: inline-block;
            width: 100%;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }

        .describe {
          span {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

        }
      }

      // 其他
      .item-content {
        width: 100%;
        height: 100%;
        padding: 20px 20px 25px;
        box-sizing: border-box;

        img {
          margin-right: 15px;
          margin-top: 10px;
          width: 80px;
          height: 80px;
        }

        .other-info {
          height: 100%;
          box-sizing: border-box;
          flex: 1;

          .company-name {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #444444;
          }

          .go-company {
            cursor: pointer;
            margin-left: 6px;
            width: 146px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #40A9FF;
            border-radius: 4px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #1890FF;
          }

          .go-company:hover {
            background: #40A9FF;
            color: #FFFFFF;
          }
        }
      }
    }

    .item1 {
      grid-area: item1;
    }

    .item2 {
      grid-area: item2;
    }

    .item3 {
      grid-area: item3;
    }

    .item4 {
      grid-area: item4;
    }
  }





  // .item:hover {
  //   .product_name .name {
  //     color: #40A9FF;
  //   }
  // }

  // .item {
  //   width: 232px;
  //   height: 295px;
  //   background: #FFFFFF;
  //   border-radius: 10px;
  //   padding: 16px 18px 20px 18px;
  //   box-sizing: border-box;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: space-between;

  //   .product_img {
  //     width: 200px;
  //     height: 200px;
  //     box-sizing: border-box;

  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }

  //   .product_name {
  //     flex: 1;
  //     width: 100%;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: flex-start;
  //     justify-content: space-around;

  //     .name {
  //       width: 100%;
  //       font-size: 14px;
  //       font-family: Microsoft YaHei;
  //       font-weight: 700;
  //       color: #333333;
  //       white-space: nowrap;
  //       overflow: hidden;
  //       text-overflow: ellipsis;
  //     }

  //     .name_shoppingCart {
  //       width: 100%;
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;

  //       i {
  //         cursor: pointer;
  //         font-size: 14px;
  //         color: #999999;
  //       }

  //       i:hover {
  //         color: #40A9FF;

  //       }
  //     }

  //     ul {
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       font-size: 12px;
  //       font-family: Microsoft YaHei;
  //       color: #666666;

  //       li {
  //         cursor: pointer;
  //         padding: 0px 0px 0px 4px;
  //         margin-top: px;
  //         height: 12px;
  //         line-height: 11px;
  //       }

  //       li:first-child {
  //         padding: 0px 4px 0px 0px;
  //         border-right: 1px solid #666666;
  //       }

  //       .red {
  //         color: #EC3333;
  //       }

  //       .bule {
  //         color: #40A9FF;
  //       }
  //     }
  //   }
  // }
</style>
