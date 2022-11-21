<template>
  <div class="supplyDemandInfo-box">
    <div class="supplyDemandInfo-main">
      <div class="flex-around-center supplyDemandInfo-main-top">
        <ul class="flex-start-center">
          <li :class="{'selected':type ==0}" @click="type=0">全部信息</li>
          <li :class="{'selected':type ==1}" @click="type=1">求购设备</li>
          <li :class="{'selected':type ==2}" @click="type=2">供应设备</li>

        </ul>
        <el-input placeholder="请输入设备型号、关键字" v-model="keyWord" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-table :data="tableData" style="width: 100%"
        :header-cell-style="{'text-align':'center','background':'#F5F5F5'}">
        <el-table-column prop="type" label="信息类型" width="180" align="center">
        </el-table-column>
        <el-table-column prop="title" label="信息标题" width="180" align="center">
        </el-table-column>
        <el-table-column prop="brandName" label="设备品牌" align="center">
        </el-table-column>
        <el-table-column prop="name" label="设备名称" align="center">
        </el-table-column>
        <el-table-column prop="time" label="发布时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="span-btn">编辑</span>
            <span class="span-btn">删除</span>
          </template>
        </el-table-column>
      </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4"
          :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: 0,
        keyWord: '',
        tableData: [{
          type: '求购设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        }, {
          type: '供应设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        }, {
          type: '求购设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        }, {
          type: '供应设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        },
        {
          type: '求购设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        }, {
          type: '供应设备',
          title: '头线圈',
          brandName: '飞利浦',
          name: 'ARjdxsdxkasjm',
          time: '2016-05-02',
        }]
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
  .flex-around-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-start-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .supplyDemandInfo {
    width: 100%;
  }

  .supplyDemandInfo-main {
    margin: 20px 0px 0px 0px;
    padding: 20px;
    background-color: #fff;
  }

  .supplyDemandInfo-main-top {
    width: 100%;
    margin-bottom: 12px;

    ul {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;

      li {
        cursor: pointer;
        padding: 3px;
      }

      li+li {
        margin-left: 17px;
      }

      .selected {
        color: #40A9FF;

        border-bottom: 2px solid #40A9FF;
        ;
      }
    }

    /deep/.el-input-group {
      width: 210px;
    }

    /deep/ .el-input-group__append {
      width: 40px;
      box-sizing: border-box;
      text-align: center;
    }

    /deep/ .el-input__inner {
      height: 25px;
    }

    input::-webkit-input-placeholder {
      /* WebKit browsers，webkit内核浏览器 */
      color: #ccc;
      font-size: 12px;
    }

    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #ccc;
      font-size: 12px;
    }

    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #ccc;
      font-size: 12px;
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #ccc;
      font-size: 12px;
    }

  }

  //表头
  /deep/.el-table__header tr,
  /deep/.el-table__header th {
    padding: 0;
    height: 28px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }

  ///各行
  /deep/.el-table__body tr,
  /deep/ .el-table__body td {
    padding: 0;
    height: 42px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #454545;
  }

  .span-btn {
    cursor: pointer;
  }

  .span-btn+.span-btn {

    margin-left: 20px;
  }

  .span-btn:hover {
    color: #40A9FF;
  }

  /deep/ .el-pagination{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ .el-pagination span:not([class*=suffix]),
  /deep/ .el-pager li{
    font-size: 12px;
  }
</style>
