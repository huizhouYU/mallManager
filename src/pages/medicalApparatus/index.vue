<template>
  <div class="whole">
    <div class="content">
      <div class="select-content">
        <div class="current-selected" v-show="currentSelected.equipment != ''||currentSelected.model != ''">
          <div class="title">当前筛选结果</div>
          <div class="value">
            <template v-if="currentSelected.equipment != ''">
              {{currentSelected.equipment}}
            </template>
            <template v-if="currentSelected.equipment != ''&&currentSelected.model != ''">
              /
            </template>
            <template v-if="currentSelected.model != ''">
              {{currentSelected.model}}
            </template>
          </div>
        </div>
        <div class="select-item">
          <div class="title">类型</div>
          <ul :class="['item']">
            <li v-for="(item,index) in selectItem.goodsType" :key="index">
              <span :class="{'bule':item.id == page.goodsType}">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="select-item">
          <div class="title">品牌</div>
          <ul :class="[{'minHeight':!isBrandStow},'item']">
            <li v-for="(item,index) in selectItem.brand" :key="index" @click="page.brandName = item.brandName">
              <img :src="item.brandLogo" alt="">
              <!-- <span :class="{'bule':item == currentSelected.classification}">{{item}}</span> -->
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
          <div class="title">分类</div>
          <ul :class="[{'minHeight':!isClassificationStow},'item']">
            <li v-for="(item,index) in selectItem.classification" :key="index"
              @click="currentSelected.classification = item">
              <!-- <img :src="item" alt=""> -->
              <span :class="{'bule':item == currentSelected.classification}">{{item}}</span>
            </li>
          </ul>
          <template v-if="isClassificationShow">
            <span v-show="isClassificationStow" class="isStow" @click="isClassificationStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isClassificationStow" class="isStow" @click="isClassificationStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
        <div class="select-item">
          <div class="title">设备</div>
          <ul :class="[{'minHeight':!isEquipmentStow},'item']">
            <li v-for="(item,index) in selectItem.equipment" :key="index" @click="currentSelected.equipment = item">
              <span :class="{'bule':item == currentSelected.equipment}">{{item}}</span>
            </li>
          </ul>
          <template v-if="isEquipmentShow">
            <span v-show="isEquipmentStow" class="isStow" @click="isEquipmentStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isEquipmentStow" class="isStow" @click="isEquipmentStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
        <div class="select-item">
          <div class="title">类别</div>
          <ul :class="[{'minHeight':!isCategoryStow},'item']">
            <li v-for="(item,index) in selectItem.category" :key="index" @click="currentSelected.category = item">
              <span :class="{'bule':item == currentSelected.category}">{{item}}</span>
            </li>
          </ul>
          <template v-if="isCategoryShow">
            <span v-show="isCategoryStow" class="isStow" @click="isCategoryStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isCategoryStow" class="isStow" @click="isCategoryStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
        <div class="select-item">
          <div class="title">型号</div>
          <ul :class="[{'minHeight':!isModelStow},'item']">
            <li v-for="(item,index) in selectItem.model" :key="index" @click="currentSelected.model = item">
              <span :class="{'bule':item == currentSelected.model}">{{item}}</span>
            </li>
          </ul>
          <template v-if="isModelShow">
            <span v-show="isModelStow" class="isStow" @click="isModelStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isModelStow" class="isStow" @click="isModelStow= true">展开<i
                class="iconfont">&#xe601;</i></span>
          </template>
        </div>
      </div>
      <good-item :goodsList="goodsDataList"></good-item>
    </div>

    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo"
        :page-sizes="[12, 24, 36, 48]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper"
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
    getBrandsList
  } from '@/api/index'
  export default {
    components: {
      goodItem
    },
    data() {
      return {
        total: 0, //总条数
        page: {
          pageNo: 1,
          pageSize: 12,
          goodsType: '', //商品类型 material-配件 equipment-设备器械
          brandName: '', //品牌
          categoryId: '', //分类ID
        },
        isBrandStow: true,
        isBrandShow: false, //【品牌】是否显示‘收起’、‘展开’
        isClassificationStow: true,
        isClassificationShow: false, //【分类】是否显示‘收起’、‘展开’
        isEquipmentStow: true,
        isEquipmentShow: false, //【设备】是否显示‘收起’、‘展开’
        isCategoryStow: true,
        isCategoryShow: false, //【类别】是否显示‘收起’、‘展开’
        isModelStow: true,
        isModelShow: false, //【型号】是否显示‘收起’、‘展开’
        currentSelected: {
          classification: '',
          category: '',
          equipment: '',
          model: ''
        },
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
          //分类
          classification: [
            '全部', '手术刀柄和刀片', '皮片刀', '疣体剥离刀', '柳叶刀', '铲刀', '普通手术剪', '组织剪', '综合组织剪', '拆线剪', '教育用手术剪', '教学用直尖针',
            '普通持针钳', '创夹缝拆钳', '皮肤轧钳', '子弹钳', '纱布剥离钳'
          ],
          //类别
          category: ['全部', 'Ⅰ级', 'Ⅱ级'],
          //设备
          equipment: [
            '全部', '基础外科用刀', '手术刀柄和刀片', '基础外科用剪'
          ],
          //型号
          model: ['全部', '手术刀柄和刀片', '皮片刀', '疣体剥离刀', '柳叶刀', '铲刀', '普通手术剪', '组织剪', '综合组织剪', '拆线剪', '教育用手术剪', '教学用直尖针',
            '普通持针钳', '创夹缝拆钳', '皮肤轧钳', '子弹钳', '纱布剥离钳'
          ]

          // model:['全部','手术刀柄和刀片','皮片刀','疣体剥离刀','柳叶刀','铲刀','普通手术剪','组织剪','综合组织剪','拆线剪','教育用手术剪','教学用直尖针','普通持针钳','创夹缝拆钳','皮肤轧钳','子弹钳','纱布剥离钳']
        },
        goodsDataList: []
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      // 品牌
      if (this.selectItem.classification.length > 15) {
        this.isClassificationShow = true
      }
      //类别
      if (this.selectItem.category.length > 15) {
        this.isCategoryShow = true
      }
      //设备
      if (this.selectItem.equipment.length > 15) {
        this.isEquipmentShow = true
      }
      //型号
      if (this.selectItem.model.length > 15) {
        this.isModelShow = true
      }
      this.getData()
    },
    methods: {
      getData() {
        console.log("this.$route.query:",this.$route)
        this.page.goodsType = this.$route.query.goodsType
        //获取品牌列表
        getBrandsList({
          limit: 999
        }).then(response => {
          console.log("获取分类：", response)
          this.selectItem.brand = response.data
          for (var index in this.selectItem.brand) {
            if (this.selectItem.brand[index].brandLogo.indexOf("http://") == -1) {
              this.selectItem.brand[index].brandLogo = 'http://www.yijiequan.cn/' + this.selectItem.brand[index]
                .brandLogo
            }
          }
        })
        goodsList(this.page).then(response => {
          console.log("获取医疗器械商品列表：", response)
          this.total = response.data.totalCount
          this.page.pageNo = response.data.pageNum
          this.page.pageSize = response.data.pageSize
          this.goodsDataList = response.data.list
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.page.pageSize = val
        this.getData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page.pageNo = val
        this.getData()
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
