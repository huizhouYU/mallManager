<!-- 企业服务 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more"></titleMore>
    <div class="item_content">
      <div :class="['item','item'+index]" v-for="(item,index) in companyList">
        <!-- 第一个 -->
        <div class="flex-column-around-center first-item" v-if="index == 0">
          <div class="flex-center-center img-div">             <img :src="'https://images.weserv.nl/?url='+item.storeLogo" alt="">
           <!-- <el-carousel indicator-position="outside">
              <el-carousel-item v-for="imgSrc in item.imgList" :key="imgSrc">
                <img :src="imgSrc" alt="">
              </el-carousel-item>
            </el-carousel> -->
          </div>
          <div class="flex-start-center company-name">{{item.storeName}}</div>
          <div class="flex-start-start company-info-item">
            <div class="key">联系人:</div>
            <div class="value">{{item.ownerName}}</div>
          </div>
          <div class="flex-start-start company-info-item">
            <div class="key">所属分类：</div>
            <div class="value">{{item.type}}</div>
          </div>
          <div class="flex-start-start company-info-item">
            <div class="key">公司地址：</div>
            <div class="value address">
              <span>{{item.region}}{{item.address}}</span>
            </div>
          </div>
          <div class="flex-start-start company-info-item">
            <div class="key ">公司简介：</div>
            <div class="value describe">
              <span>{{item.description}}</span>
            </div>
          </div>
        </div>
        <!-- 其他 -->
        <div class="flex-start-start item-content" v-else>
          <img :src="'https://images.weserv.nl/?url='+item.storeLogo" alt="">
          <div class="flex-column-between-start other-info">
            <div class="company-name">{{item.storeName}}</div>
            <div class="flex-start-start company-info-item">
              <div class="key">所属分类：</div>
              <div class="value">{{item.type}}</div>
            </div>
            <div class="flex-start-start company-info-item">
              <div class="key">公司地址：</div>
              <div class="value address">
                <span>{{item.region}}{{item.address}}</span>
              </div>
            </div>
            <div class="flex-center-center go-company">进入店铺</div>
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
    props: ['companyList'],
    data() {
      return {
        title: "企业服务",
        // companyList: [{
        //     companyName: '这是公司名称',
        //     name: '肖尔',
        //     type: '医疗器械二类',
        //     address: '浙江省杭州市余杭区 蓬莱路莲花稻谷园区 进门左转第一期三号楼14层24铺',
        //     describe: '浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包承揽工...、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。',
        //     imgList: [
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../assets/images/index/buyer/pic_personal_recommend.png'),
        //       require('../../assets/images/index/pic_left.png'),
        //     ]
        //   },
        //   {
        //     companyName: '这是公司名称',
        //     name: '肖尔',
        //     type: '医疗器械二类',
        //     address: '浙江省杭州市余杭区 蓬莱路莲花稻谷园区 123号商铺',
        //     describe: '浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包承揽工...、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。',
        //     imgList: [
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //     ]
        //   },
        //   {
        //     companyName: '这是公司名称',
        //     name: '肖尔',
        //     type: '医疗器械二类',
        //     address: '浙江省杭州市余杭区 蓬莱路莲花稻谷园区 123号商铺',
        //     describe: '浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包承揽工...、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。',
        //     imgList: [
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //     ]
        //   },
        //   {
        //     companyName: '这是公司名称',
        //     name: '肖尔',
        //     type: '医疗器械二类',
        //     address: '浙江省杭州市余杭区 蓬莱路莲花稻谷园区 123号商铺',
        //     describe: '浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包承揽工...、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。',
        //     imgList: [
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //     ]
        //   },
        //   {
        //     companyName: '这是公司名称',
        //     name: '肖尔',
        //     type: '医疗器械二类',
        //     address: '浙江省杭州市余杭区 蓬莱路莲花稻谷园区 123号商铺',
        //     describe: '浙江xx建设集团有限公司的前身是一家名不见经传的建筑工程队，历经四十余年的风雨兼程和顽强拚搏，已发展壮大为国家房屋建筑工程施工总承包承揽工...、民用等大体量、高层次、大跨度、高标准、精装饰的建筑施工业务。',
        //     imgList: [
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //       require('../../../src/assets/images/index/pic_business.png'),
        //     ]
        //   }
        // ],
        productList: [{
            imgPath: require('../../../src/assets/images/index/pic_business.png'),
            name: '欧莱博BY-D-I黄疸仪维修欧莱博BY-D-I黄疸仪维修',
            price: "68.0"
          },
          {
            imgPath: require('../../../src/assets/images/index/pic_business.png'),
            name: '欧莱博BY-D-I黄疸仪维修',
            price: ""
          },
          {
            imgPath: require('../../../src/assets/images/index/pic_business.png'),
            name: '欧莱博BY-D-I黄疸仪维修',
            price: ""
          },
          {
            imgPath: require('../../../src/assets/images/index/pic_business.png'),
            name: '欧莱博BY-D-I黄疸仪维修',
            price: ""
          },
          {
            imgPath: require('../../../src/assets/images/index/pic_business.png'),
            name: '欧莱博BY-D-I黄疸仪维修',
            price: ""
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

  .accessories_area .item_content .item0 {
    grid-area: item0;
    cursor: pointer;
    width: 400px;
    height: 360px;
    background: #FFFFFF;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 30px 25px 22px 20px;

    .first-item {
      width: 100%;
      height: 100%;

      .img-div {
        width: 100%;
        height: 120px;
        box-sizing: border-box;

        /deep/ .el-carousel__container {
          height: 120px;
        }

        /deep/ .el-carousel--horizontal {
          width: 80%;
        }

        /deep/ .el-carousel__item.is-animating {
          display: flex;
          justify-content: center;
        }

        /deep/ .el-carousel__indicators--outside {
          display: none;
        }

        img {
          width: 120px;
          // width: 100%;
          height: 120px;
        }
      }

      .company-name {
        width: 100%;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #444444;
        margin-bottom: 5px;
      }


    }
  }

  .item_content {
    display: grid;
    grid-template-areas: 'item0 item1 item2''item0 item3 item4';
    grid-gap: 10px;

    .item:hover {
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

      .company-name {
        color: #40A9FF !important;
      }
    }

    .item {
      width: 390px;
      height: 175px;
      background: #FFFFFF;
      border-radius: 10px;

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
