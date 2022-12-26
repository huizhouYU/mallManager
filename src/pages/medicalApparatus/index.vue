<template>
  <div class="whole">
    <div class="content">
      <div class="select-content">
        <div class="current-selected"
          v-show="(page.brandName != '' && page.brandName != undefined)||(page.degreeName != ''&& page.degreeName != undefined)">
          <div class="title">当前筛选结果</div>
          <div class="value">
            <template v-if="page.brandName != '' && page.brandName != undefined">
              {{page.brandName}}
            </template>
            <template
              v-if="(page.brandName != '' && page.brandName != undefined)&&(page.degreeName != ''&& page.degreeName != undefined)">
              /
            </template>
            <template v-if="page.degreeName != ''&& page.degreeName != undefined">
              {{page.degreeName}}
            </template>
          </div>
        </div>
        <div class="current-selected"
          v-show="(chosedLevel != '' && chosedLevel != undefined)&&(page.brandName == '' || page.brandName == undefined)&&(page.degreeName == ''|| page.degreeName == undefined)">
          <div class="title">当前筛选结果</div>
          <div class="value">{{chosedLevel}}</div>
        </div>

        <div class="select-item">
          <div class="title">类型</div>
          <ul :class="['item']">
            <li @click="changeGoodsType('')"><span>全部</span></li>
            <li v-for="(item,index) in selectItem.goodsType" :key="index" @click="changeGoodsType(item.id)">
              <span :class="{'bule':item.id == page.goodsType}">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="select-item">
          <div class="title">品牌</div>
          <ul :class="[{'minImgHeight':!isBrandStow},'item']">
            <li v-for="(item,index) in selectItem.brand" :key="index" @click="changeBrandName(item.brandName)">
              <img :src="item.brandLogo" alt="" :title="item.brandName">
            </li>
          </ul>
          <template v-if="isBrandShow">
            <span v-show="isBrandStow" class="isStow" @click="isBrandStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isBrandStow" class="isStow" @click="isBrandStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
        <div class="select-item">
          <div class="title">新旧程度</div>
          <ul :class="[{'minHeight':!isDegreeStow},'item']">
            <li @click="changeDegree('','')"><span>全部</span></li>
            <li v-for="(item,index) in selectItem.degree" :key="index" @click="changeDegree(item.degree,item.name)">
              <span :class="{'bule':item.degree == page.degree}">{{item.name}}</span>
            </li>
          </ul>
          <template v-if="isDegreeShow">
            <span v-show="isDegreeStow" class="isStow" @click="isDegreeStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isDegreeStow" class="isStow" @click="isDegreeStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
      </div>
      <good-item :goodsList="goodsDataList"></good-item>
    </div>

    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[30, 60, 90, 120]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../pages/allGoods/goodItem.vue'
  import {
    goodsList
  } from '@/api/goods'
  import {
    getBrandsList,
    listByPid
  } from '@/api/index'
  export default {
    components: {
      goodItem
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
          degree: '', //新旧程度
          degreeName: '', //新旧程度
          categoryId: '', //分类ID
          cateName: '', //分类名称
          keyType: 1,
          keyword: ''
        },
        isBrandStow: true,
        isBrandShow: false, //【品牌】是否显示‘收起’、‘展开’
        isDegreeStow: true,
        isDegreeShow: false, //【新旧程度】是否显示‘收起’、‘展开’
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
          //新旧程度
          degree: [{
              degree: 7,
              name: '七成新'
            },
            {
              degree: 8,
              name: '八成新'
            },
            {
              degree: 9,
              name: '九成新'
            },
            {
              degree: 10,
              name: '十成新'
            }
          ],
        },
        goodsDataList: []
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
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
            if (this.selectItem.brand[index].brandLogo.indexOf("http://") == -1) {
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
      changeDegree(degree, name) {
        this.page.degree = degree
        this.page.degreeName = name
        this.page.categoryId = ''
        this.getDataList()
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.page.pageSize = val
        this.getDataList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page.pageNo = val
        this.getDataList()
      }
    },

  }
</script>

<style lang="less" scoped>
  .whole {
    box-sizing: border-box;
    margin-top: 25px;
  }

  .content {
    background-color: #fff;
    padding: 20px 30px 30px 20px;
  }

  .select-content {
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
