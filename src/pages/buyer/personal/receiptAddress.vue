<template>
  <div class="receipt-address-box">
    <!-- 默认地址 -->
    <div class="default-address">
      <img src="../../../assets/images/index/buyer/pic_pink_bule_bg.png" alt="">
      <div class="default-address-content">
        <div class="name_province"><span>{{defaultAddress.name}}</span><span>{{defaultAddress.province}}</span></div>
        <div class="consignee public-item-info"><span>收货人：</span><span>{{defaultAddress.name}}</span></div>
        <div class="public-item-info"><span>收货地区：</span><span>{{defaultAddress.region}}</span></div>
        <div class="public-item-info"><span>详细地址：</span><span>{{defaultAddress.address}}</span></div>
        <div class="public-item-info"><span>手机号码：</span><span>{{defaultAddress.mobile}}</span></div>
        <span class="adit-default-address" @click="editDefaultAddress">编辑默认地址</span>
      </div>
      <img src="../../../assets/images/index/buyer/pic_pink_bule_bg.png" alt="">
    </div>
    <!-- 收货地址列表 -->
    <div class="all-address-content">
      <div class="add-new-div">
        <span> 已保存{{addressList.length}}了条地址，还能保存{{maxCount - addressList.length}}条地址</span>
        <button @click="addAddress">新增收货地址</button>
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
            <li @click="editAddress(index)">编辑</li>
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
    <!-- 编辑地址弹框 -->
    <el-dialog :visible.sync="dialogEditVisible" width="700px" height="206px" :title="editTitle">
      <el-form ref="addressForm" :model="addressForm" :rules="rules" label-width="90px" label-position="left"
        class="editAddress-form">
        <el-form-item label="收货人：" prop="name">
          <el-input v-model="addressForm.name" placeholder="请输入收货人姓名"></el-input>
        </el-form-item>
        <el-form-item label="收货地址：" prop="region">
          <el-cascader v-model="addressForm.region" placeholder="请选择省/市/区/街道" :options="cities"  @change="changeFormat"
            ref="cascaderRegion" />
          <!-- <el-input v-model="addressForm.region" placeholder="请选择省/市/区/街道"></el-input> -->
        </el-form-item>
        <el-form-item label="详细地址：" prop="address">
          <el-input v-model="addressForm.address" placeholder="请输入收货人详细地址"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="mobile">
          <el-input v-model="addressForm.mobile" placeholder="请输入收货人手机号码"></el-input>
        </el-form-item>

        <el-form-item class="edit-address-btns">
          <el-button @click="dialogEditVisible=false">取消</el-button>
          <el-button type="primary" plain @click="saveAddress">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
   const city = require("../../../../src/json/citys.json")
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          // let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/; if (value === '') {
          callback(new Error('请输入手机号'))
        } else if (!this.isCellPhone(
            value)) { // 引入methods中封装的检查手机格式的方法 callback(new Error('请输入正确的手机号!'))          } else {
          callback(new Error('请输入正确的手机号!'))
        } else {
          callback()
        }
      }
      return {
        cities:'',
        //编辑地址 弹框
        editTitle: '', //编辑收货地址弹框标题：新增地址/编辑地址
        dialogEditVisible: false,
        addressForm: {
          default: false,
          name: '',
          province: "",
          region: '',
          address: '',
          mobile: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入收货人姓名',
            trigger: 'blur'
          }],
          region: [{
            required: true,
            message: '请选择省/市/区/街道',
            trigger: 'blur'
          }],
          address: [{
            required: true,
            message: '请输入收货人详细地址',
            trigger: 'blur'
          }],
          mobile: [{
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }]
        },
        //删除地址 弹框
        dialogDelVisible: false, //确定删除地址的弹框
        delId: '', //要删除的地址id
        maxCount: 10,
        defaultAddress: '',
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
    mounted() {
      document.documentElement.scrollTop = 0;
      for (var index in this.addressList) {
        if (this.addressList[index].default) {
          this.defaultAddress = this.addressList[index]
        }
      }
      //获取地区
      this.cities = city
    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
          return false
        } else {
          return true
        }
      },
      changeFormat() {
        if (this.$refs["cascaderRegion"].getCheckedNodes()[0] != undefined) {
          let regionName = this.$refs["cascaderRegion"].getCheckedNodes()[0].pathLabels
          this.addressForm.regionName = regionName.join("/")
          // this.addressForm.regionIdList = this.$refs["cascaderRegion"].getCheckedNodes()[0].path
          // this.addressForm.regionIdList = this.addressForm.regionIdList.map(Number)
        }
      },
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
            this.defaultAddress = this.addressList[i]
          } else {
            this.addressList[i].default = false
          }
        }
      },
      //编辑地址
      editAddress(index) {
        this.addressForm = this.cloneObj(this.addressList[index])
        this.editTitle = "编辑地址"
        this.dialogEditVisible = true
      },
      //编辑默认地址
      editDefaultAddress() {
        this.addressForm = this.cloneObj(this.defaultAddress)
        this.editTitle = "编辑地址"
        this.dialogEditVisible = true
      },
      //新增收货地址
      addAddress() {
        if(this.addressList.length>=this.maxCount){
          this.$message.warning("最多能保存"+this.maxCount+"条地址，您已达到最大限额")
          return
        }
        this.addressForm = {
          default: false,
          name: '',
          province: "",
          region: '',
          address: '',
          mobile: ''
        }
        this.editTitle = "新增地址"
        this.dialogEditVisible = true
      },
      //保存地址
      saveAddress() {
        this.$message.success("将填写的数据，转成JSON调用后端接口，保存数据后再重新刷新页面数据")
        this.dialogEditVisible = false
      },
      //深复制对象方法
      cloneObj(obj) {
        var newObj = {};
        if (obj instanceof Array) {
          newObj = [];
        }
        for (var key in obj) {
          var val = obj[key];
          newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
        }
        return newObj;
      },
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
            animation: mymove 0.2s linear normal;
          }

          @keyframes mymove {

            100% {

              transform: rotate(180deg);

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

  //编辑地址 弹框
  /deep/ .el-dialog__header {
    padding: 15px 20px;
    border-bottom: 1px solid #F3F3F3;
  }

  // 标题文字
  /deep/ .el-dialog__title {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
  }

  .editAddress-form {
    padding-top: 20px;
    /deep/.el-form-item{
      margin-bottom: 18px;
    }

    /deep/ .el-form-item__label {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }

    /deep/.el-input__inner {
      height: 30px;
      width: 300px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333;
    }

    .edit-address-btns {
      width: 100%;

      /deep/.el-form-item__content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }

    /deep/.el-button {
      height: 30px;
      padding: 10px 20px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }

    /deep/ .el-button+.el-button {
      margin-left: 50px;
    }
  }
</style>
