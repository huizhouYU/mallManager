<template>
  <div>
    <template v-if="demandDataList != null && demandDataList.length >0">
      <div :class="['goods-content',{'goods-content-grid5':grid5}]">
        <div class="item" v-for="(item,index) in demandDataList" :key="index" @click="getDetail(item.articleId)">
          <div class="item-img">
            <template v-if="item.imageList != null && item.imageList.length>0">
              <img :src="item.imageList[0]" alt="">
            </template>
            <template v-else>
              <img src="../../assets/images/index/s_logo.jpg" alt="">
            </template>
          </div>
          <div class="info-content">
            <div class="title">
              {{item.title}}
            </div>
            <div class="type-content">
              <div class="stype">
                <template v-if="item.stype=='company'">企业</template>
                <template v-else>个人工程师</template>
              </div>
              <div class="articleType">
                <template v-if="item.articleType=='1'">求购设备</template>
                <template v-else-if="item.articleType=='2'">项目外包</template>
                <template v-else-if="item.articleType=='3'">灵活兼职</template>
              </div>
            </div>
            <div class="time">{{item.updatedAt || item.createdAt || '-'}}</div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="flex-center-center no-data-font">
      暂未发布供求信息~
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'grid5': {
        type: Boolean,
        default: () => {
          return false
        }
      },
      'demandDataList': {
        type: Array
      }
    },
    data() {
      return {}
    },
    methods: {
      getDetail(articleId) {
        this.$router.push({
          path: '/demandDetail',
          query: {
            articleId
          }
        })
        this.$emit('selectOnlyTab', '-1')
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: flex-start;
    grid-gap: 10px;
  }

  .goods-content .item {
    background-color: #fff;
    width: 232px;
    height: 300px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 40px 12px 30px;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    line-height: 12px;

    .item-img {
      width: 140px;
      height: 140px;
      box-sizing: border-box;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info-content {
      margin-top: 22px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;

      .title {
        text-align: center;
        width: 100%;
        line-height: 14px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .type-content {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 18px;

        .stype {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
          color: #FFFFFF;
          width: 71px;
          height: 18px;
          background: #4CD263;
          border-radius: 2px;
          box-sizing: border-box;
        }

        .articleType {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 58px;
          height: 18px;
          background: linear-gradient(123deg, #69C0FF 0%, #48AFF9 100%);
          border-radius: 2px;
          box-sizing: border-box;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
        }

        .stype+.articleType {
          margin-left: 8px;
        }
      }

      .time {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: #B0B0B0;

      }
    }
  }

  .goods-content-grid5 {
    grid-template-columns: repeat(5, auto);
    justify-content: flex-start;
    grid-gap: 6px;

    .item {
      width: 180px;
      height: 236px;
      background: #FFFFFF;
      border: 1px solid #F5F5F5;
      border-radius: 6px;
      padding: 20px 10px 15px;

      .item-img {
        width: 130px;
        height: 130px;
        box-sizing: border-box;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info-content {
        margin-top: 15px;
        width: 100%;
        height: 68px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;

        .title {
          text-align: center;
          width: 100%;
          line-height: 12px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .type-content {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 18px;

          .stype {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: 400;
            color: #FFFFFF;
            width: 71px;
            height: 18px;
            background: #4CD263;
            border-radius: 2px;
            box-sizing: border-box;
          }

          .articleType {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 58px;
            height: 18px;
            background: linear-gradient(123deg, #69C0FF 0%, #48AFF9 100%);
            border-radius: 2px;
            box-sizing: border-box;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
          }

          .stype+.articleType {
            margin-left: 8px;
          }
        }

        .time {
          width: 100%;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
          color: #B0B0B0;

        }
      }
    }
  }

  .goods-content .item:hover {
    border-color: #40A9FF;
  }
</style>
