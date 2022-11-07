<template>
  <div class="receipt-address-box">
    <!-- 默认地址 -->
    <div class="default-address">
      <img src="../../../assets/images/index/buyer/pic_pink_bule_bg.png" alt="">
      <div class="default-address-content" v-for="(item,index) in addressList" :key="index" v-if="item.default">
        <div class="name_province"><span>{{item.name}}</span><span>{{item.province}}</span></div>
        <div class="consignee public-item-info"><span>收货人：</span><span>{{item.name}}</span></div>
        <div class="public-item-info"><span>收货地区：</span><span>{{item.region}}</span></div>
        <div class="public-item-info"><span>详细地址：</span><span>{{item.address}}</span></div>
        <div class="public-item-info"><span>手机号码：</span><span>{{item.mobile}}</span></div>
        <span class="adit-default-address">编辑默认地址</span>
      </div>
      <img src="../../../assets/images/index/buyer/pic_pink_bule_bg.png" alt="">
    </div>
    <!-- 收货地址列表 -->
    <div class="all-address-content">
      <div class="add-new-div">
        <span> 已保存{{addressList.length}}了条地址，还能保存{{maxCount - addressList.length}}条地址</span>
        <button>新增收货地址</button>
      </div>
      <div v-for="(item,index) in addressList" :key="index" class="address-item">
        <div class="address-info">
          <div class="consignee public-item-info">
            <span>收货人：</span><span>{{item.name}}</span>
            <div class="defaule-flag" v-if="item.default">默认地址</div>
          </div>
          <div class="public-item-info"><span>收货地区：</span><span>{{item.region}}</span></div>
          <div class="public-item-info"><span>详细地址：</span><span>{{item.address}}</span></div>
          <div class="public-item-info"><span>手机号码：</span><span>{{item.mobile}}</span></div>
        </div>
        <div class="operation">
          <i class="iconfont" @click="delAddress(item)">&#xe8e7;</i>
          <ul>
            <li @click="setDefault(index)">设成默认</li>
            <li>编辑</li>
          </ul>
        </div>

      </div>
    </div>
    <!-- 确认删除弹框 -->
    <el-dialog :visible.sync="dialogDelVisible" width="380px" height="206px">
      <div class="dialog-content">
        <img src="../../../assets/images/index/buyer/pic_warning_deladdress.png" alt="">
        <span class="del-span">删除地址</span>
        <span class="del-span-remark">您确定要删除该收货地址吗？</span>
        <div class="buts">
          <el-button size="small" type="danger" plain @click="sureDelDialog">确 定</el-button>
          <el-button size="small" type="primary" @click="dialogDelVisible= false">取 消</el-button>
        </div>
      </div>
    </el-dialog>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogDelVisible: false, //确定删除地址的弹框
        delId: '', //要删除的地址id
        maxCount: 10,
        addressList: [{
            default: true,
            name: '冯宝宝',
            province: "安徽",
            region: '上海市徐汇区龙腾大道',
            address: '上海市黄浦区圆明园路97号安培洋行3层陶醉博物馆',
            mobile: '188 8888 8888'
          },
          {
            default: false,
            name: '二壮',
            province: "安徽",
            region: '上海市徐汇区龙腾大道',
            address: '上海市黄浦区圆明园路97号安培洋行3层陶醉博物馆',
            mobile: '188 8888 8888'
          },
          {
            default: false,
            name: '肖自在',
            province: "安徽",
            region: '上海市徐汇区龙腾大道',
            address: '上海市黄浦区圆明园路97号安培洋行3层陶醉博物馆',
            mobile: '188 8888 8888'
          },
          {
            default: false,
            name: '黑管',
            province: "安徽",
            region: '上海市徐汇区龙腾大道',
            address: '上海市黄浦区圆明园路97号安培洋行3层陶醉博物馆',
            mobile: '188 8888 8888'
          }
        ]
      }
    },
    methods: {
      //点击删除地址：弹出确定删除地址弹框
      delAddress(index) {
        this.delId = index
        this.dialogDelVisible = true
      },
      //确定删除地址
      sureDelDialog() {
        this.$message.success("根据地址id请求后端接口调用删除接口")
        this.dialogDelVisible = false
      },
      //设置默认地址
      setDefault(index) {
        for (var i in this.addressList) {
          if (i == index) {
            this.addressList[i].default = true
          } else {
            this.addressList[i].default = false
          }
        }
      }
    }

  }
</script>

<style lang="less" scoped>
  .receipt-address-box {
    padding: 20px 0px 0px 20px;
    box-sizing: border-box;

    .public-item-info {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      display: flex;
      align-items: center;
    }

    .public-item-info+.public-item-info {
      margin-top: 20px;

    }

    //收货人
    .consignee {
      margin-top: 28px;

      span+span {
        margin-left: 22px;
      }
    }

    // 默认地址
    .default-address {
      padding: 30px 20px;
      background: #FFFFFF;

      img {
        width: 100%;
        height: 8px;
      }

      .default-address-content {
        margin: 50px 0px;
        padding-left: 40px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        position: relative;

        .adit-default-address {
          position: absolute;
          top: 0;
          right: 15px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40A9FF;
          cursor: pointer;
        }

        .name_province {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #333333;

          span+span {
            margin-left: 15px;
          }
        }
      }
    }

    // 收货地址列表
    .all-address-content {
      background: #FFFFFF;
      padding: 20px;
      margin-top: 20px;

      .add-new-div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin-bottom: 20px;

        button {
          cursor: pointer;
          margin-left: 20px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40A9FF;
          padding: 9px 14px;
          outline: none;
          background: #FEFEFE;
          border: 1px solid #40A9FF;
          border-radius: 15px;
        }

        button:hover {
          background: #40A9FF;
          color: #fff;
        }

      }

      .address-item {
        padding: 15px;
        background: #FEFEFE;
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;

        // 默认地址标签
        .defaule-flag {
          margin-left: 14px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          background: #FFAA45;
          border-radius: 4px;
          padding: 4px;
        }

        .consignee {
          margin-top: 0px;
          display: flex;
          justify-content: flex-start;
          align-self: center;
        }

        .operation {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-direction: column;

          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
              cursor: pointer;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #40A9FF;
            }

            li+li {
              margin-left: 20px;
            }
          }

          i {
            color: #bbb;
            cursor: pointer;
          }

          i:hover {
            animation: mymove 0.1s linear normal;
          }

          @keyframes mymove {

            100% {

              transform: rotate(90deg);

            }



          }
        }
      }

      .address-item+.address-item {
        margin-top: 15px;
      }
    }
  }

  /deep/ .el-dialog__body {
    padding-top: 0px;
  }

  /deep/ .el-dialog {


    .dialog-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
      }

      .del-span {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-bottom: 5px;
      }

      .del-span-remark {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin-bottom: 15px;
      }

      .buts {
        display: flex;
        justify-content: center;
        align-items: center;

        /deep/ .el-button {
          height: 30px;
          width: 66px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          box-sizing: border-box;
        }

        .el-button+.el-button {
          margin-left: 25px;
        }
      }
    }

  }
</style>
