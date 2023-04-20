<template>
  <div class="whole">
    <div class="content">
      <div class="select-content">
        <div class="current-selected" v-show="page.goodsTypeName != ''">
          <div class="title">当前筛选结果</div>
          <div class="value">
            <template v-if="page.goodsTypeName != ''">
              {{page.goodsTypeName}}
            </template>
          </div>
        </div>
        <div class="select-item">
          <div class="title">类型</div>
          <ul :class="['item']">
            <li v-for="(item,index) in selectItem.goodsType" :key="index" @click="changeGoodsType(item.id,item.name)">
              <span :class="{'bule':item.id == page.goodsType}">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <good-item :goodsList="goodsDataList"></good-item> -->
      <good-item-type :goodsList="goodsDataList"></good-item-type>
    </div>

    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[16,32, 60, 92]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../pages/allGoods/goodItem.vue'
  import goodItemType from '../../pages/allGoods/goodItemType.vue'
  import {
    goodsList
  } from '@/api/goods'
  export default {
    components: {
      goodItem,
      goodItemType
    },
    data() {
      return {
        total: 0, //总条数
        page: {
          pageNo: 1,
          pageSize: 32,
          goodsType: '',
          goodsTypeName: '',
          storeId: '',
        },
        goodsDataList: [],
        selectItem: {
          // 商品类型 material-配件 equipment-设备器械
          goodsType: [{
              id: '',
              name: '全部'
            }, {
              id: 'material',
              name: '配件专区'
            },
            {
              id: 'equipment',
              name: '医疗器械'
            }
          ],
        }
      }
    },
    mounted() {
      this.page.storeId = this.$route.query.storeId
      this.getData()
    },
    methods: {
      getData() {
        goodsList(this.page).then(response => {
          this.total = response.data.totalCount
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
          this.goodsDataList = response.data.list
        })
      },
      changeGoodsType(goodsType, goodsTypeName) {
        this.page.goodsType = goodsType
        if (this.page.goodsType) {
          this.page.goodsTypeName = goodsTypeName
        } else {
          this.page.goodsTypeName = ''
        }
        this.getData()
      },
      handleSizeChange(val) {
        this.page.pageSize = val
        this.getData()
      },
      handleCurrentChange(val) {
        this.page.pageNo = val
        this.getData()
      }
    },

  }
</script>

<style lang="less" scoped>
  .whole {
    box-sizing: border-box;
    margin-top: 25px !important;
    width: 1200px;
  }

  .content {
    // background-color: #fff;
    // padding: 20px 30px 30px 20px;
  }

  .select-content {
    border-radius: 6px;
    background-color: #fff;
    padding: 10px 30px 10px 20px;
    margin-bottom: 15px;

    .title {
      width: 100px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #757575;
      display: flex;
      justify-content: flex-start;
    }

    .current-selected {
      padding-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px dashed #F6F6F6;

      .value {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }
    }
  }

  .select-item {
    padding: 13px 0px 0px 0px;
    // border-bottom: 1px dashed #F6F6F6;
    display: flex;
    justify-content: flex-start;

    .minImgHeight {
      height: 50px;
      overflow: hidden;
    }

    .minHeight {
      height: 25px;
      overflow: hidden;
    }

    .item {
      width: 1000px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      li {
        margin-bottom: 10px;
        cursor: pointer;
      }

      img {
        width: 100px;
        height: 40px;
        border: 1px solid #F5F5F5;
        border-radius: 6px;
        padding: 4px;
        margin-right: 15px;
      }

      span {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-right: 30px;
      }

      .bule {
        color: #40A9FF;
      }
    }

    .isStow {
      display: flex;
      align-content: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 0px;
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
