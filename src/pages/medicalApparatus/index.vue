<template>
  <div class="whole">
    <div class="content">
      <div class="select-content">
        <div class="current-selected"
          v-show="page.brandName != '' && page.brandName != undefined">
          <div class="title">当前筛选结果</div>
          <div class="value">
            <template v-if="page.brandName != '' && page.brandName != undefined">
              {{page.brandName}}
            </template>
          </div>
        </div>
        <div class="current-selected"
          v-show="(chosedLevel != '' && chosedLevel != undefined)&&(page.brandName == '' || page.brandName == undefined)">
          <div class="title">当前筛选结果</div>
          <div class="value">{{chosedLevel}}</div>
        </div>

        <div class="select-item">
          <div class="title">类型</div>
          <ul :class="['item']">
            <li @click="changeGoodsType('')"><span :class="{'bule':'' == page.goodsType}">全部</span></li>
            <li v-for="(item,index) in selectItem.goodsType" :key="index" @click="changeGoodsType(item.id)">
              <span :class="{'bule':item.id == page.goodsType}">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="select-item">
          <div class="title">品牌</div>
          <ul :class="[{'minImgHeight':!isBrandStow},'item']">
            <li v-for="(item,index) in selectItem.brand" :key="index" @click="changeBrandName(item.brandName)">
              <img :src="item.brandLogo" alt="" :title="item.brandName"  :class="{'bule-img':item.brandName == page.brandName}">
            </li>
          </ul>
          <template v-if="isBrandShow">
            <span v-show="isBrandStow" class="isStow" @click="isBrandStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isBrandStow" class="isStow" @click="isBrandStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
      </div>
      <good-item-type :goodsList="goodsDataList"></good-item-type>
    </div>

    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[30, 60, 90, 120]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <!-- 为您找货 -->
    <div class="flex-column-start-start  find-goods-module">
      <div class="flex-start-center module-title">
        <span class="title">产品咨询</span>
        <div class="spot"></div>
        <span class="remark">填写您的咨询内容，我们将尽快给您答复。</span>
      </div>
      <product-consult class="product-consult"></product-consult>

    </div>
  </div>
</template>

<script>
  import goodItem from '../../pages/allGoods/goodItem.vue'
  import goodItemType from '../../pages/allGoods/goodItemType.vue'
  import productConsult from '../../pages/index/productConsult.vue'
  import {
    goodsList
  } from '@/api/goods'
  import {
    getBrandsList,
    listByPid
  } from '@/api/index'
  export default {
    components: {
      goodItem,
      goodItemType,
      productConsult
    },
    data() {
      return {
        chosedLevel: '',
        total: 0, //总条数
        page: {
          pageNo: 1,
          pageSize: 30,
          goodsType: '', //商品类型 material-配件 equipment-设备器械
          brandName: '', //品牌
          categoryId: '', //分类ID
          cateName: '', //分类名称
          keyType: 1,
          keyword: ''
        },
        isBrandStow: false,
        isBrandShow: false, //【品牌】是否显示‘收起’、‘展开’
        selectItem: {
          // 商品类型 material-配件 equipment-设备器械
          goodsType: [{
              id: 'material',
              name: '配件专区'
            },
            {
              id: 'equipment',
              name: '医疗器械'
            }
          ],
          //品牌
          brand: [],
        },
        goodsDataList: []
      }
    },
    mounted() {
      this.getData()
    },
    watch: {
      $route(to, from) {
        if (to.query.goodsType != from.query.goodsType || to.query.cateId != from.query.cateId || to.query.keyword !=
          from.query.keyword) {
          this.getData()
        }
      }
    },
    methods: {
      getData() {
        this.page.goodsType = this.$route.query.goodsType
        this.page.categoryId = this.$route.query.cateId
        this.chosedLevel = this.$route.query.chosedLevel
        this.page.keyword = this.$route.query.keyword
        if (this.$route.query.brandName != undefined && this.$route.query.brandName != null) {
          this.page.brandName = this.$route.query.brandName
        }
        //获取品牌列表
        getBrandsList({
          limit: 999
        }).then(response => {
          this.selectItem.brand = response.data
          var origin = window.location.origin+window.location.pathname
          for (var index in this.selectItem.brand) {
            if (this.selectItem.brand[index].brandLogo != null && this.selectItem.brand[index].brandLogo.indexOf("http://") == -1) {
              this.selectItem.brand[index].brandLogo = origin + this.selectItem.brand[index]
                .brandLogo
            }
          }
          // 品牌
          if (this.selectItem.brand.length > 8) {
            this.isBrandShow = true
          }
        })
        // //根据Pid查找下级分类
        // listByPid({
        //   pid: 0
        // }).then(response => {
        //   this.selectItem.cate = response.data
        //   //分类
        //   if (this.selectItem.cate.length > 15) {
        //     this.isDegreeShow = true
        //   }
        // })
        this.getDataList()
      },
      getDataList() {
        goodsList(this.page).then(response => {
          this.total = response.data.totalCount
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
          this.goodsDataList = response.data.list
        })
      },
      changeGoodsType(goodsType) {
        this.page.goodsType = goodsType
        // this.page.categoryId = ''
        this.getDataList()
      },
      changeBrandName(brandName) {
        this.page.brandName = brandName
        this.page.categoryId = ''
        this.getDataList()
      },
      handleSizeChange(val) {
        this.page.pageSize = val
        this.getDataList()
      },
      handleCurrentChange(val) {
        this.page.pageNo = val
        this.getDataList()
      }
    },

  }
</script>

<style lang="less" scoped>
  // 为您找货
  .find-goods-module {
    margin-top: 30px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    .module-title {
      .title {
        line-height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }

      .spot {
        width: 5px;
        height: 5px;
        font-weight: 400;
        background: #999999;
        border-radius: 50%;
        margin: 0px 10px;
      }

      .remark {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #40A9FF;
      }
    }

    .product-consult {
      flex: 1;
      width: 100%;
      box-sizing: border-box;
    }

  }
  .whole {
    box-sizing: border-box;
    margin-top: 25px;
  }

  .content {
    // background-color: #fff;
    // padding: 20px 30px 30px 20px;
  }

  .select-content {
    background-color: #fff;
    padding: 20px 30px 0px 20px;
    margin-bottom: 15px;
    .title {
      width: 100px;
      font-size: 12px;
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
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }
    }
  }

  .select-item {
    padding: 13px 0px 0px 0px;
    border-bottom: 1px dashed #F6F6F6;
    display: flex;
    justify-content: flex-start;

    .minImgHeight {
      height: 50px;
      overflow: hidden;
    }

    .minImgHeight {
      height: 60px;
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
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-right: 30px;
      }

      .bule {
        color: #40A9FF;
      }
      .bule-img{
        border: 1px solid #40A9FF;
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
