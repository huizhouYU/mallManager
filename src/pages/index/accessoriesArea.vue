<!-- 配件专区 -->
<template>
  <div class="accessories_area">
    <titleMore :title="title" class="title_more" v-if="showTitle"></titleMore>
    <div class="item_content">
      <div class="item" v-for="(item,index) in accessoriesList" :key="index">
        <div class="item_top">
          <span class="item_top_title">{{item.title}}</span>
          <div class="item_more">
            <ul>
              <li v-for="(k,inde) in item.keyValue" :key="inde">{{k}}</li>
            </ul>
            <div class="more">
              <span>更多</span>
              <i class="iconfont">&#xe63c;</i>
            </div>
          </div>
        </div>
        <div class="item_bottom">
          <div class="individual" v-for="(option,ind) in item.optionList" :key="ind">
            <div class="individual_img">
              <img :src="option.imgPath" alt="">
            </div>
            <div class="individual_name">
              <span class="name">{{option.name}}</span>
              <ul>
                <li v-for="(x,i) in option.label" :key="i">{{x}}</li>
              </ul>
            </div>
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
    props:{
      showTitle:Boolean
    },
    data() {
      return {
        title: "配件专区",
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
    }
  }
</script>

<style lang="less" scoped>
  .title_more {
    margin-bottom: 15px;
  }
  .item_content{
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-gap: 4px;
  }

  .item {
    width: 598px;
    height: 280px;
    padding: 14px 0px 25px 0px;
    background: #FFFFFF;
    border-radius: 10px;
    box-sizing: border-box;

    .item_top {
      padding: 0px 28px 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

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
          display: flex;
          justify-content: flex-start;
          align-items: center;
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

      .individual {
        width: 200px;
        height: 210px;
        box-sizing: border-box;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
      .individual:last-child{
        border: none;
      }
    }
  }
</style>
