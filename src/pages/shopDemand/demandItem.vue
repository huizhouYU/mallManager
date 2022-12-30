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
          <div class="info">
            {{item.title}}
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
    grid-template-columns: repeat(6, auto);
    justify-content: flex-start;
    grid-column-gap: 12px;
  }

  .goods-content-grid5 {
    grid-template-columns: repeat(5, auto);
    justify-content: flex-start;
    grid-column-gap: 6px;
  }

  .goods-content .item:hover {
    border-color: #40A9FF;
  }

  .goods-content .item {
    margin-top: 15px;
    width: 180px;
    height: 188px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 12px;

    .item-img {
      width: 150px;
      height: 134px;
      margin-bottom: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      width: 100%;
      color: #333333;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
