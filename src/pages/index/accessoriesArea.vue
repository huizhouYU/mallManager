<!-- 配件专区 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more" v-if="showTitle"></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in accessoriesList" :key="index">
        <div class="flex-between-center item_top">
          <span class="item_top_title">{{item.title}}</span>
          <div class="item_more">
            <ul>
              <li v-for="(k,inde) in item.keyValue" :key="inde">{{k}}</li>
            </ul>
            <div class="flex-start-center more">
              <span>更多</span>
              <i class="iconfont">&#xe63c;</i>
            </div>
          </div>
        </div>
        <div class="item_bottom">
          <div class="flex-column-between-center individual" v-for="(option,ind) in item.optionList" :key="ind">
            <div class="individual_img">
              <img :src="option.imgPath" alt="">
            </div>
            <div class="flex-column-around-center individual_name">
              <span class="name">{{option.name}}</span>
              <ul class="flex-center-center">
                <li v-for="(x,i) in option.label" :key="i">{{x}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!showTitle" class="flex-center-center pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import titleMore from '../../pages/index/titleMore.vue'
  export default {
    components: {
      titleMore
    },
    props: {
      showTitle: Boolean
    },
    data() {
      return {
        title: "配件专区",
        currentPage4: 4,
        accessoriesList: [{
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },
          {
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },
          {
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },
          {
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },
          {
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },
          {
            title: '飞利浦核磁/CT',
            keyValue: ['线圈', '主机', '梯度', '线圈'],
            optionList: [{
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian1.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian2.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              },
              {
                imgPath: require('../../../src/assets/images/index/peijian/pic_peijian3.png'),
                name: '主机',
                label: ['电子设备', '低温设备']
              }
            ]
          },

        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style lang="less" scoped>
  .title_more {
    margin-bottom: 15px;
  }

  .item_content {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }

  // .item:hover {

  //   ::after,
  //   ::before {
  //     /* 固定在div下 */
  //     // z-index: -1;
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     /* 撑开一点大小 */
  //     // margin: -5%;
  //     box-shadow: inset 0px 0px 1px #40A9FF;
  //     animation: clipMe 10s linear infinite;
  //   }

  //   ::before {
  //     content: "";
  //   }

  //   ::after {
  //     content: "";
  //     /* 提前运动4s */
  //     animation-delay: -4s;
  //   }
  // }


  // @keyframes clipMe {

  //   0%,
  //   100% {
  //     clip: rect(0px, 595px, 10px, 0px);
  //   }

  //   25% {
  //     clip: rect(0px, 10px, 280.0px, 0px);
  //   }

  //   50% {
  //     clip: rect(250px, 595px, 280px, 0px);
  //   }

  //   75% {
  //     clip: rect(0px, 595px, 280px, 585.0px);
  //   }
  // }

  .item {
    position: relative;
    width: 595px;
    height: 280px;
    padding: 14px 0px 25px 0px;
    background: #FFFFFF;
    border-radius: 10px;
    box-sizing: border-box;

    .item_top {
      padding: 0px 28px 14px 20px;

      .item_top_title {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #333333;
      }

      .item_more {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        color: #999999;

        ul {
          display: flex;
          align-items: center;

          li {
            font-size: 10px;
            font-family: Microsoft YaHei;
            color: #666666;
            margin-right: 6px;
            cursor: pointer;
          }

          li:hover {
            color: #40A9FF;
          }
        }

        .more {
          cursor: pointer;

          i {
            font-size: 12px;
          }
        }

        .more:hover {
          color: #40A9FF;
        }
      }

    }

    .item_bottom {
      display: flex;
      align-items: center;

      .individual:hover {
        cursor: pointer;
        .individual_name {

          .name,
          ul {
            color: #40A9FF;
          }

          ul {
            li:first-child {
              border-color: #40A9FF;
            }
          }
        }
      }

      .individual {
        width: 200px;
        height: 210px;
        box-sizing: border-box;
        padding-left: 15px;
        border-right: 1px solid #F6F6F6;

        .individual_img {
          width: 142px;
          height: 142px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .individual_name {
          height: 68px;
          box-sizing: border-box;
          padding-top: 10px;

          .name {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 700;
            color: #333333;
          }

          ul {
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

      .individual:last-child {
        border: none;
      }
    }
  }

  .pagination {
    margin: 30px 0px 5px 0px;
  }

  /deep/ .el-pagination {
    font-weight: 400;
  }

  /deep/ .el-pagination .el-select .el-input .el-input__inner {
    background-color: #f5f5f5;
  }

  /deep/.el-pagination .btn-next,
  /deep/.el-pagination .btn-prev,
  /deep/ .el-pager li {
    background: none;
  }
</style>
