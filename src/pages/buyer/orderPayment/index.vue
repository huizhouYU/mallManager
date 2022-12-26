<template>
  <div class="order-payment-div">
    <!-- 顶部模块 购物车 -->
    <div class="flex-center-center shop-box">
      <header-title></header-title>
    </div>
    <div class="flex-column-center-center content">
      <div class=" core-div">
        <!-- 医界圈logo + 进度条 -->
        <div class="flex-between-center logo-progress">
          <img src="../../../assets/images/logo.png" alt="">
          <div class="flex-between-center progress">
            <div class="flex-column-center-center progress-item progress-item-ed">
              <div class="line"></div>
              <span class="flex-center-center cricle">1</span>
              <span class="progress-item-title">1.选中商品</span>
            </div>
            <div class="flex-column-center-center progress-item progress-item-ing">
              <div class="line"></div>
              <span class="flex-center-center cricle">2</span>
              <span class="progress-item-title">2.填写核对订单信息</span>
            </div>
            <div class="flex-column-center-center progress-item">
              <div class="line"></div>
              <span class="flex-center-center cricle">3</span>
              <span class="progress-item-title">3.成功提交订单</span>
            </div>
          </div>
        </div>
        <!-- 选择收货地址 -->
        <div class=" choose-address">
          <div class="div-title">选择收货地址</div>
          <div class="address-all-div">
            <div class="flex-start-center address-item" v-for="(item,index) in showAddressList" :key="index">
              <div :class="['flex-start-center','address-item-abbreviation',{'selected':item.id == chosedAddress}]"
                @click="selectAddress(item)">
                {{item.name}}（{{item.provice}}）
                <img src="../../../assets/images/shop/pic_sel_bg.png" alt="" v-show="item.id == chosedAddress">
              </div>
              <span class="address-name">{{item.name}}</span>
              <span class="address">{{item.address}}</span>
              <span class="tel">{{item.tel}}</span>
            </div>
            <div class="flex-between-center">
              <div class="flex-start-center show-more-address" @click="showMoreAddress"
                v-if="addressList.length>3 && !showMore">
                显示全部地址 <i class="iconfont">&#xe646;</i>
              </div>
              <div class="flex-start-center show-more-address" @click="showMoreAddress" v-show="showMore">
                折叠全部地址 <i class="iconfont">&#xe648;</i>
              </div>
              <div class="add-address" @click="addAddress">新增收货地址</div>
            </div>

          </div>
        </div>
        <!-- 支付方式 -->
        <div class=" choose-pay-way">
          <div class="div-title">支付方式</div>
          <ul class="flex-start-center pay-way-div">
            <li v-for="(item,index) in payWay" :key="index"
              :class="['flex-center-center',{'selected':item.id == chosedPayWay}]" @click="chosedPayWay = item.id">
              <img :src="item.iconUrl" alt="">{{item.name}}
              <img src="../../../assets/images/shop/pic_sel_bg.png" alt="" v-show="item.id == chosedPayWay"
                class="select-img">
            </li>
          </ul>
        </div>
        <!-- 商品信息 -->
        <div class="choose-good-info">
          <div class="div-title">商品信息</div>
          <div class="flex-between-center good-info-header">
            <div class="flex-center-center good-name">商品</div>
            <div class="flex-center-center price">单价</div>
            <div class="flex-center-center num">数量</div>
            <div class="flex-center-center subtotal">小计</div>
          </div>
          <div class="good-info-item" v-for="(store,index) in chosedGoodList" :key="index">
            <!-- 店铺名称 -->
            <div class="flex-start-center good-store-info">
              店铺：<span>{{store.storeName}}</span>
            </div>
            <!-- 店铺中商品 -->
            <div class="flex-between-center good-item" v-for="(good,i) in store.goods" :key="good.goodsId">
              <div class="flex-start-center good-name">
                <img :src="good.goodsImg" alt="">
                <div class="flex-column-start-start good-name-model">
                  <div class="name">{{good.name}}</div>
                  <div class="model">{{good.selectedModel}}</div>
                </div>
              </div>
              <div class="flex-column-start-center price">￥{{good.price}}</div>
              <div class="flex-column-start-center num">
                <div class="flex-center-center">
                  <span class="flex-center-center span-btn" @click="addNum(index,i)">+</span>
                  <span class="flex-center-center span-num">{{good.amount}}</span>
                  <span class="flex-center-center span-btn" @click="subtraNum(index,i)">-</span>
                </div>

              </div>
              <div class="flex-column-start-end subtotal red-color">￥{{good.money}}</div>
            </div>
            <!-- 给卖家留言 -->
            <div class="flex-between-start leaving-message-div">
              <div class="flex-start-start leaving-message-main">
                <span>给卖家留言：</span>
                <el-input type="textarea" v-model="store.leaveMsg" placeholder="选填，请先和商家协商一致，付款后商家可见" maxlength="200"
                  show-word-limit resize="none" />
              </div>
              <div>
                <div class="flex-around-center good-sum-money">
                  <span class="flex-end-center left-span">商品总价：</span>
                  <span class="flex-end-center right-span">￥{{store.money}}</span>
                </div>
                <div class="flex-around-center good-sum-money border-bottom-dashed">
                  <span class="flex-end-center left-span">运费（快递）：</span>
                  <span class="flex-end-center right-span">￥0.00</span>
                </div>
                <div class="flex-around-center good-sum-money ">
                  <span class="">店铺合计（含运费）：</span>
                  <span class="flex-end-center right-span red-color">￥{{store.money}}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- 结算 -->
        <div class="sum-info-div">
          <div class="flex-end-center sum-money">
            <span class="">实付款：</span>
            <span class="flex-end-center right-span">￥{{sumMoney}}</span>
          </div>
          <div class="flex-end-center sum-address-name">
            <div class="sum-address">
              寄送至：<span>{{chosedAddressForm.address}}</span>
            </div>
            <div class="sum-name">
              收货人：<span>{{chosedAddressForm.name}}</span><span>{{chosedAddressForm.tel}}</span>
            </div>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="flex-end-center">
          <button class="flex-center-center submit-order">
            提交订单
          </button>
        </div>

      </div>
    </div>
    <div class="gray-div">
      <span>.</span>
    </div>
    <!-- 底部 -->
    <index-bottom></index-bottom>

    <!-- 新增收货地址弹框 -->
    <el-dialog :visible.sync="dialogEditVisible" width="700px" height="206px" title="新增收货地址">
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
  import headerTitle from '../../index/headerTitle.vue'
  import indexBottom from '../../index/indexBottom.vue'
  const city = require("../../../../src/json/citys.json")
  export default {
    components: {
      headerTitle,
      indexBottom
    },
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
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
        //新增收货地址 弹框
        dialogEditVisible: false,
        addressForm: {
          default: false,
          name: '',
          province: "",
          region: '',
          address: '',
          mobile: ''
        },
        maxCount: 10,
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
        sumMoney: 0, //所有商品总金额
        chosedGoodList: [],
        chosedAddressForm: '', //选中的地址表单
        chosedAddress: '', //选中的地址id
        chosedPayWay: '0',
        showMore: false,
        showAddressList: [],
        addressList: [{
            default: false,
            id: 'd1',
            name: '张楚岚',
            tel: '188 8888 8888',
            provice: '浙江',
            address: '浙江 杭州市 临平区 杏花镇 方兴大道288号智慧工院二期D1-506室'
          },
          {
            default: true,
            id: 'd2',
            name: '冯宝宝',
            tel: '188 8888 8888',
            provice: '上海',
            address: '上海 静安区 汶水路210号静安新业坊3号楼遇见博物馆'
          },
          {
            default: false,
            id: 'd3',
            name: '浙江',
            tel: '188 8888 8888',
            provice: '上海',
            address: '浙江 杭州市 临平区 杏花镇 方兴大道288号智慧工院二期D1-506室'
          },
          {
            default: false,
            id: 'd4',
            name: '班后会',
            tel: '188 8888 8888',
            provice: '陕西',
            address: '陕西 西安市 晋安区 拓城枫叶街道 圆明园路97号安培洋行3层陶醉博物馆'
          }
        ],
        payWay: [{
            id: '0',
            iconUrl: require('../../../assets/images/index/buyer/pay/icon_Alipay.png'),
            name: '支付宝'
          },
          {
            id: '1',
            iconUrl: require('../../../assets/images/index/buyer/pay/icon_wechat.png'),
            name: '微信'
          },
          {
            id: '3',
            iconUrl: '',
            name: '对公转账'
          }
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      //默认地址选中
      for (var index in this.addressList) {
        if (this.addressList[index].default) {
          this.chosedAddress = this.addressList[index].id
          this.chosedAddressForm = this.addressList[index]
          break;
        }
      }
      //获取地区
      this.cities = city
      this.refreshShowAddress()
      console.log("选中的商品：", this.$route.query.chosedGood)
      this.refreshShowGoods(JSON.parse(this.$route.query.chosedGood))
    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
          return false
        } else {
          return true
        }
      },
      // 显示全部地址
      showMoreAddress() {
        this.showMore = !this.showMore
        this.refreshShowAddress()
      },
      refreshShowAddress() {
        //设置要展示的地址
        this.showAddressList = []
        if (this.addressList.length > 3 && !this.showMore) {
          for (var index = 0; index < 3; index++) {
            this.showAddressList.push(this.addressList[index])
          }
        } else {
          this.showAddressList = this.addressList
        }
      },
      //重新排序整理商品列表
      refreshShowGoods(list) {
        // var storeList = []
        for (var i in list) {
          var position = this.judgePosition(list[i].storeId)
          if (position == -1) { //不存在
            // storeList.push(list[i].storeId)
            var item = {
              storeId: list[i].storeId,
              storeName: list[i].storeName,
              leaveMsg: '',
              money: '',
              goods: []
            }
            item.goods.push(this.cloneObj(list[i]))
            this.chosedGoodList.push(this.cloneObj(item))
          } else { //存在
            this.chosedGoodList[position].goods.push(this.cloneObj(list[i]))
          }
        }
        this.sumStoreMoney()
      },
      //判断位置 (为“重新排序整理商品列表”提供服务)
      judgePosition(id) {
        for (var index in this.chosedGoodList) {
          if (this.chosedGoodList[index].storeId == id) {
            return index
          }
        }
        return -1
      },
      // 计算每个店铺选中商品的总金额
      sumStoreMoney() {
        for (var index in this.chosedGoodList) {
          var goods = this.chosedGoodList[index].goods
          var money = 0
          for (var i in goods) {
            money += Number(goods[i].money)
          }
          this.chosedGoodList[index].money = money.toFixed(2)
        }
        this.sumAllMoney()
      },
      // 计算所有店铺总金额
      sumAllMoney() {
        var money = 0
        for (var index in this.chosedGoodList) {
          var store = this.chosedGoodList[index]
          money += Number(store.money)
        }
        this.sumMoney = money.toFixed(2)
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
      //新增收货地址
      addAddress() {
        if (this.addressList.length >= this.maxCount) {
          this.$message.warning("最多能保存" + this.maxCount + "条地址，您已达到最大限额")
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
        this.dialogEditVisible = true
      },
      changeFormat() {
        if (this.$refs["cascaderRegion"].getCheckedNodes()[0] != undefined) {
          let regionName = this.$refs["cascaderRegion"].getCheckedNodes()[0].pathLabels
          this.addressForm.regionName = regionName.join("/")
          // this.addressForm.regionIdList = this.$refs["cascaderRegion"].getCheckedNodes()[0].path
          // this.addressForm.regionIdList = this.addressForm.regionIdList.map(Number)
        }
      },
      //保存收货地址
      saveAddress() {
        this.$message.success("将填写的数据，转成JSON调用后端接口，保存数据后再重新刷新页面数据")
        this.dialogEditVisible = false
      },
      //选择收货地址
      selectAddress(item) {
        this.chosedAddress = item.id
        this.chosedAddressForm = item
      },
      //增加数量
      addNum(parentInd, goodInd) {
        this.chosedGoodList[parentInd].goods[goodInd].amount++
        this.changeMoney(parentInd, goodInd)
      },
      //减少数量
      subtraNum(parentInd, goodInd) {
        if (this.chosedGoodList[parentInd].goods[goodInd].amount == 1) {
          //默认在这个页面 不让删了
        } else {
          this.chosedGoodList[parentInd].goods[goodInd].amount--
          this.changeMoney(parentInd, goodInd)
        }
      },
      //改变商品金额
      changeMoney(parentInd, goodInd) {
        this.chosedGoodList[parentInd].goods[goodInd].money = this.chosedGoodList[parentInd].goods[goodInd].amount *
          this.chosedGoodList[parentInd].goods[goodInd].price
        //计算每个店铺选中商品的总金额
        this.sumStoreMoney()
      },


    }
  }
</script>

<style lang="less" scoped>
  //核心宽度
  @core-weight: 1200px;

  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-start-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-start-start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-end-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-between-start {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .flex-around-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .flex-column-start-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-column-start-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex-column-start-end {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .flex-column-between-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .flex-column-center-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .order-payment-div {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;

    // 顶部模块 购物车
    .shop-box {
      position: fixed;
      box-sizing: border-box;
      width: 100vw;
      height: 34px;
      background-color: #f5f5f5;
      z-index: 999;
    }

    .content {
      width: 100%;
      margin-top: 34px;
      background-color: #fff;

      .core-div {
        width: @core-weight;

        .div-title {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }

        .logo-progress {
          width: 100%;
          margin-top: 35px;

          img {
            width: 170px;
            height: 62px;
          }

          .progress {
            .progress-item {
              position: relative;
              width: 184px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;

              .progress-item-title {
                color: #E5E6EB;
                margin-top: 10px;
              }

              .line {
                position: absolute;
                width: 184px;
                height: 5px;
                background: #E5E6EB;
                left: 0;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 1;
              }

              .cricle {
                margin-top: 24px;
                box-sizing: border-box;
                width: 22px;
                height: 22px;
                background: #E5E6EB;
                border-radius: 50%;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
                z-index: 2;
                box-sizing: border-box;
              }
            }

            //已完成
            .progress-item-ed {
              .progress-item-title {
                color: rgba(115, 209, 61, 0.6);
              }

              .line {
                background: rgba(115, 209, 61, 0.6);
              }

              .cricle {
                background: rgba(115, 209, 61, 0.7);
                color: #FFFFFF;
              }
            }

            //正在进行
            .progress-item-ing {
              .progress-item-title {
                color: #73D13D;
              }

              .line {
                background: #73D13D;
              }

              .cricle {
                background: #73D13D;
                color: #FFFFFF;
              }
            }


          }
        }

        //选择收货地址
        .choose-address {
          margin-top: 25px;

          .address-all-div {
            box-sizing: border-box;
            margin-top: 12px;
            width: @core-weight;
            background: #FFFFFF;
            padding: 20px 35px;
            border: 1px solid #F0F0F0;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;

            .address-item+.address-item {
              margin-top: 15px;
            }

            .address-item {
              cursor: pointer;


              .address-item-abbreviation {
                position: relative;
                padding-left: 10px;
                width: 150px;
                height: 24px;
                background: #FFFFFF;
                border: 1px solid #DDDDDD;

                img {
                  width: 13px;
                  height: 13px;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                }
              }

              .selected {
                border: 1px solid #40A9FF;
              }

              span {
                margin-left: 15px;
              }
            }

            .show-more-address {
              margin-top: 15px;
              cursor: pointer;

              i {
                margin-left: 5px;
                font-size: 12px;
              }
            }

            .add-address {
              cursor: pointer;
              color: #FFAA45;
            }
          }
        }

        // 支付方式
        .choose-pay-way {
          margin-top: 25px;

          .pay-way-div {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            margin-top: 12px;

            li {
              cursor: pointer;
              position: relative;
              width: 90px;
              padding: 6px 0px;
              box-sizing: border-box;
              border: 1px solid #DDDDDD;

              img {
                width: 11px;
                height: 11px;
                margin-right: 5px;
              }

              .select-img {
                width: 13px;
                height: 13px;
                position: absolute;
                right: 0;
                bottom: 0;
                margin-right: 0px;
              }
            }

            li+li {
              margin-left: 27px;
            }

            .selected {
              border: 1px solid #40A9FF;
            }
          }
        }

        // 商品信息
        .choose-good-info {
          margin-top: 25px;

          .good-name {
            width: 598px;
          }

          .price,
          .num {
            width: 198px;
          }

          .subtotal {
            width: 194px;
          }

          .good-info-header {
            box-sizing: border-box;
            margin-top: 22px;
            width: 100%;
            height: 24px;
            background: #F7F8FA;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;

            .good-name,
            .price,
            .num,
            .subtotal {
              height: 100%;
              border-bottom: 2px solid #94BFFF;
            }

          }

          .good-info-item {

            .good-store-info {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #444444;
              padding-left: 20px;
              padding-bottom: 15px;
              margin: 25px 0px 0px 0px;
              border-bottom: 1px dashed #94BFFF;
            }

            .good-item {
              background: #FBFCFF;
              padding: 20px 0px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              border-bottom: 1px dashed #E5E6EB;

              .good-name,
              .price,
              .num,
              .subtotal {
                height: 80px;
                box-sizing: border-box;
              }

              .good-name {
                padding-left: 20px;

                img {
                  width: 80px;
                  height: 80px;
                  margin-right: 15px;
                }

                .good-name-model {
                  height: 80px;

                  .name {
                    width: 280px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  }

                  .model {
                    margin-top: 10px;
                    color: #939393;
                  }
                }
              }

              .num {
                .span-btn {
                  width: 30px;
                  height: 28px;
                  background: #F5F5F5;
                  border: 1px solid #EEEEEE;
                }

                .span-num {
                  width: 60px;
                  height: 28px;
                  background: #FFFFFF;
                  border: 1px solid #EEEEEE;
                  border-left: none;
                  border-right: none;
                }
              }

              .subtotal {
                padding-right: 20px;
              }
            }

            //给卖家留言
            .leaving-message-div {
              background: #FBFCFF;
              padding: 20px 0px 40px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              border-bottom: 1px dashed #94BFFF;

              .leaving-message-main {
                color: #444;

                span {
                  margin-left: 20px;
                  display: inline-block;
                  width: 74px;
                }

                /deep/.el-textarea {
                  width: 345px;
                  height: 60px;
                }

                /deep/ .el-textarea .el-input__count {
                  bottom: 8px;
                }

                /deep/ .el-textarea__inner::-webkit-input-placeholder {
                  /* WebKit browsers，webkit内核浏览器 */
                  color: #ccc;
                  font-size: 12px;
                }

                /deep/ .el-textarea__inner:-moz-placeholder {
                  /* Mozilla Firefox 4 to 18 */
                  color: #ccc;
                  font-size: 12px;
                }

                /deep/ .el-textarea__inner::-moz-placeholder {
                  /* Mozilla Firefox 19+ */
                  color: #ccc;
                  font-size: 12px;
                }

                /deep/ .el-textarea__inner:-ms-input-placeholder {
                  /* Internet Explorer 10+ */
                  color: #ccc;
                  font-size: 12px;
                }
              }

              .good-sum-money {
                padding-right: 20px;

                .left-span {
                  width: 123px;
                }

                .right-span {
                  width: 127px;

                }
              }

              .good-sum-money+.good-sum-money {
                margin-top: 12px;
              }

              .good-sum-money:last-child {
                margin-top: 20px;
              }

              .border-bottom-dashed {
                padding-bottom: 20px;
                border-bottom: 1px dashed #EEEEEE;
              }
            }

          }
        }

        // 结算
        .sum-info-div {
          margin-top: 25px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          background: #F2F3F5;

          .sum-money {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;

            .right-span {
              width: 127px;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #E60000;
            }
          }

          .sum-address-name {
            margin-top: 22px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;

            .sum-address {

              span {
                margin-left: 16px;
              }
            }

            .sum-name {
              margin-left: 28px;


              span {
                margin-left: 6px;
              }
            }
          }
        }

        // 提交订单
        .submit-order {
          margin: 10px 20px 48px 0px;
          width: 100px;
          height: 36px;
          background: #40A9FF;
          border: 1px solid #40A9FF;
          border-radius: 4px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          box-sizing: border-box;
        }

        .submit-order:hover {
          background: #69c0ff;
          border: 1px solid #69c0ff;
        }

      }
    }
  }

  .gray-div {
    height: 20px;
    width: 100%;
    background-color: #F5F5F5;
    color: #F5F5F5;
    box-sizing: border-box;
  }

  .red-color {
    color: #E60000 !important;
  }

  //新增收货地址 弹框
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

    /deep/.el-form-item {
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
