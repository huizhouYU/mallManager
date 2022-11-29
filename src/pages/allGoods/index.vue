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
          <div class="title">品牌</div>
          <ul :class="[{'minImgHeight':!isBrandLogoStow},'item']">
            <li v-for="(item,index) in selectItem.brandLogo" :key="index"><img :src="item" alt=""></li>
          </ul>
          <template v-if="isBrandLogoShow">
            <span v-show="isBrandLogoStow" class="isStow" @click="isBrandLogoStow= false">收起<i
                class="iconfont">&#xe733;</i></span>
            <span v-show="!isBrandLogoStow" class="isStow" @click="isBrandLogoStow= true">展开<i
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
      <good-item></good-item>
    </div>

    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import goodItem from '../../pages/allGoods/goodItem.vue'
  export default {
    components: {
      goodItem
    },
    data() {
      return {
        currentPage4: 4,
        isBrandLogoStow: true,
        isBrandLogoShow: false, //【品牌】是否显示‘收起’、‘展开’
        isEquipmentStow: true,
        isEquipmentShow: false, //【设备】是否显示‘收起’、‘展开’
        isModelStow: true,
        isModelShow: false, //【型号】是否显示‘收起’、‘展开’
        currentSelected: {
          equipment: '',
          model: ''
        },
        selectItem: {
          // 品牌
          brandLogo: [
            require('../../assets/images/index/brands/logo_安科.png'),
            require('../../assets/images/index/brands/logo_佳能.png'),
            require('../../assets/images/index/brands/logo_安科.png'),
            require('../../assets/images/index/brands/logo_佳能.png'),
            require('../../assets/images/index/brands/logo_安科.png'),
            require('../../assets/images/index/brands/logo_佳能.png'),
            require('../../assets/images/index/brands/logo_安科.png'),
            require('../../assets/images/index/brands/logo_安科.png'),
            require('../../assets/images/index/brands/logo_佳能.png')
          ],
          //设备
          equipment: [
            '全部', '基础外科用刀', '手术刀柄和刀片', '基础外科用剪'
          ],
          //型号
          model: ['全部', '手术刀柄和刀片', '皮片刀', '疣体剥离刀', '柳叶刀', '铲刀', '普通手术剪', '组织剪', '综合组织剪', '拆线剪', '教育用手术剪', '教学用直尖针',
            '普通持针钳', '创夹缝拆钳', '皮肤轧钳', '子弹钳', '纱布剥离钳'
          ]

          // model:['全部','手术刀柄和刀片','皮片刀','疣体剥离刀','柳叶刀','铲刀','普通手术剪','组织剪','综合组织剪','拆线剪','教育用手术剪','教学用直尖针','普通持针钳','创夹缝拆钳','皮肤轧钳','子弹钳','纱布剥离钳']
        }
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
    mounted() {
      // 品牌
      if (this.selectItem.brandLogo.length > 8) {
        this.isBrandLogoShow = true
      }
      //设备
      if (this.selectItem.equipment.length > 15) {
        this.isEquipmentShow = true
      }
      //型号
      if (this.selectItem.model.length > 15) {
        this.isModelShow = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .whole {
    box-sizing: border-box;
    margin-top: 25px;
    width: 1200px;
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
