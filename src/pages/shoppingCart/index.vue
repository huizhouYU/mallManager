<template>
  <div class="shopping-cart-box">
    <div class="flex-horizontal-start-centent shopping-cart-top">
      购物车（全部商品{{totle}}件）
    </div>
    <!-- 表头 -->
    <div class="flex-horizontal-start-centent shopping-cart-header">
      <div class="flex-horizontal-centent-centent goods goods-width">
        <el-checkbox label="全选" class="select-all" v-model="selectAll" @change="changeAllSelectStatue()"
          :disabled="shoppingCartList.length<1"></el-checkbox>
        商品
      </div>
      <div class="flex-horizontal-centent-centent price-width">单价</div>
      <div class="flex-horizontal-centent-centent amount-width">数量</div>
      <div class="flex-horizontal-centent-centent money-width">金额</div>
      <div class="flex-horizontal-centent-centent operation-width">操作</div>
    </div>
    <!-- 购物车列表 -->
    <div class="shoping-cart-content">
      <!-- 一家店铺里加购的商品 -->
      <div v-for="(item,index) in shoppingCartList" :key="index" class="store-goods">
        <!-- 店铺名 -->
        <div class="flex-horizontal-start-centent store-name">
          <el-checkbox :label="item.storeName" class="select-all" v-model="item.isSelectAll"
            @change="changeStoreSelectStatue(index,'0')"></el-checkbox>
        </div>
        <div class="flex-horizontal-start-centent store-goods-main" v-for="(good,ind) in item.list" :key="ind">
          <!-- 商品 -->
          <div class="flex-horizontal-start-start goods-width goods">
            <el-checkbox label="" class="select-all" v-model="good.isSelect" @change="changeGoodStatue(index)">
            </el-checkbox>
            <img :src="good.goodsImg" alt="">
            <div class="flex-vertical-start-start goods-info">
              <span class="name">{{good.name}}</span>
              <el-popover placement="bottom" width="300" trigger="click" popper-class="modle-popover">
                <more-modle-select :modles="good.model" :selectedModel="good.selectedModel"
                  @changeModle="changeModle($event,index,ind)"></more-modle-select>
                <div class="flex-horizontal-centent-centent modle" slot="reference">
                  {{good.selectedModel}}
                  <i class="iconfont">&#xe601;</i>
                </div>
              </el-popover>
            </div>
          </div>
          <!-- 单价 -->
          <div class="flex-horizontal-centent-centent price-width">￥{{good.price}}</div>
          <!-- 数量 -->
          <div class="flex-horizontal-centent-centent amount-width amount-content">
            <div class="flex-horizontal-centent-centent add" @click="addNum(index,ind)">+</div>
            <div class="flex-horizontal-centent-centent amount">{{good.amount}}</div>
            <div class="flex-horizontal-centent-centent sub" @click="subtraNum(index,ind)">-</div>
          </div>
          <!-- 金额 -->
          <div class="flex-horizontal-centent-centent money-width">￥{{good.money}}</div>
          <!-- 操作 -->
          <div class="flex-horizontal-centent-centent operation-width operation" @click="del(index,ind)">删除</div>
        </div>
      </div>
    </div>
    <!-- 全选+删除+合计+结算 -->
    <div class="flex-horizontal-between-centent shopping-cart-bottom" v-click-outside="outsideClick">
      <!-- 选中商品的div -->
      <div class="chosed-goods-content" v-show="showChosedFlag">
        <div class="sum-goods">普通商品<span>{{chosedNum}}</span>件</div>
        <slideTab :progressList="chosedGoodsList" v-if="chosedGoodsList.length>0" />
      </div>
      <!-- 全选+删除 -->
      <div class="flex-horizontal-centent-centent">
        <el-checkbox label="全选" class="select-all" v-model="selectAll" @change="changeAllSelectStatue()"
          :disabled="shoppingCartList.length<1"></el-checkbox>
        <span @click="delBottom" class="del-bottom">删除</span>
      </div>
      <!-- 合计+结算 -->
      <div class="flex-horizontal-centent-centent sum-settlement">
        <div class="chosed-num" @click="showChosedGoods">
          已选择 <span>{{chosedNum}}</span> 件商品
          <i class="iconfont">&#xe601;</i>
        </div>
        <div class="sum">合计：<span>￥{{sumPrice}}</span></div>
        <el-button class="flex-horizontal-centent-centent settlement" :disabled="!chosedNum>0" @click="settlement">结算</el-button>
      </div>
    </div>
    <!-- 确认删除弹框 -->
    <el-dialog :visible.sync="dialogVisible" width="380px" height="206px">
      <div class="dialog-content">
        <img src="../../assets/images/shop/pic_warning_delgoods.png" alt="">
        <span class="del-span">删除商品</span>
        <span class="del-span-remark">确认要删除该商品吗？</span>
        <div class="buts">
          <el-button size="small" type="danger" plain @click="sureDialog">确 定</el-button>
          <el-button size="small" type="primary" @click="closeDialog">取 消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Clickoutside from 'element-ui/src/utils/clickoutside'
  import moreModleSelect from '../../pages/shoppingCart/moreModleSelect.vue'
  import slideTab from '../../pages/shoppingCart/slideTab.vue'
  export default {
    components: {
      moreModleSelect,
      slideTab
    },
    data() {
      return {
        showChosedFlag: false, //是否展开选中的商品
        dialogVisible: false, //删除商品的弹框
        //删除商品
        delOperation: {
          key: "", //根据这个字段判断是单个商品删除还是批量商品删除（key：batch则为批量删除）
          parentInd: '',
          goodInd: '',
        },
        totle: 119,
        chosedNum: 0, //选择的数量
        sumPrice: 0, //总计金额
        chosedGoodsList: [], //选中的商品
        selectAll: false, //是否全选
        shoppingCartList: [{
            storeId: '1',
            storeName: '哈哈哈哈哈哈无限公司',
            isSelectAll: false, //是否全选
            list: [{
              storeId: '1',
              storeName: '哈哈哈哈哈哈无限公司',
                goodsId: '1-1',
                isSelect: false,
                goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F728da9773912b31bc2156fcc8618367adbb4e1de&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=8d0c36c1237d0ec07ed65eb877a5a914',
                name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
                model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
                selectedModel: 'AR586886',
                price: '45.9',
                amount: '1',
                money: '45.9'
              },
              {
                storeId: '1',
                storeName: '哈哈哈哈哈哈无限公司',
                goodsId: '1-2',
                isSelect: false,
                goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage1.big-bit.com%2F2021%2F0908%2F20210908031318131.jpg&refer=http%3A%2F%2Fimage1.big-bit.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=4ecc58be52ba978fd7622546fe98b8c9',
                name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
                model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
                selectedModel: 'AR586886',
                price: '67.4',
                amount: '1',
                money: '67.4'
              }
            ]
          },
          {
            storeId: '2',
            storeName: '海波莫就无限公司',
            isSelectAll: false, //是否全选
            list: [{
              storeId: '2',
              storeName: '海波莫就无限公司',
              goodsId: '2-1',
              isSelect: false,
              goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ctb168.com%2Fe%2Fupload%2Fs1%2Ffck%2Fimage%2F2019%2F08%2F22%2F1753169660.jpg&refer=http%3A%2F%2Fwww.ctb168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=e488dbfa5903ac42d70d02ad959800f7',
              name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
              model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
              selectedModel: 'AR586886',
              price: '99',
              amount: '1',
              money: '99'
            }]
          },
          {
            storeId: '3',
            storeName: '金币不哦怒江',
            isSelectAll: false, //是否全选
            list: [{
              storeId: '3',
              storeName: '金币不哦怒江',
                goodsId: '3-1',
                isSelect: false,
                goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-a9a5dc78dfc2f132b934f5156f50db08_b.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=853e9356a1a21413b8ce640090144669',
                name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
                model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
                selectedModel: 'AR586886',
                price: '89',
                amount: '1',
                money: '89'
              },
              {
                storeId: '3',
                storeName: '金币不哦怒江',
                goodsId: '3-2',
                isSelect: false,
                goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftenfei03.cfp.cn%2Fcreative%2Fvcg%2Fnowarter800%2Fnew%2FVCG41N915384844.jpg&refer=http%3A%2F%2Ftenfei03.cfp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=e52f32892c5e8ebee9fe8fcfba96a383',
                name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
                model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
                selectedModel: 'AR586886',
                price: '120',
                amount: '1',
                money: '120'
              }
            ]
          },
          {
            storeId: '4',
            storeName: '魔衣不够宝檽瘆得慌',
            isSelectAll: false, //是否全选
            list: [{
              storeId: '4',
              storeName: '魔衣不够宝檽瘆得慌',
              goodsId: '4-1',
              isSelect: false,
              goodsImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.soogot.com%2Fuploadfile%2F20181214%2F20181214172628821.jpg&refer=http%3A%2F%2Fwww.soogot.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670396735&t=4b1747d8b1c008da1cf7ecb0edf0dccf',
              name: '飞利浦核磁共振 CT线圈大家伙的快速那是你我IP等你下课撒才能封建时代',
              model: ['AR586886', 'SZA866', 'OZA866', 'FGED866'],
              selectedModel: 'AR586886',
              price: '59',
              amount: '1',
              money: '59'
            }]
          },

        ]
      }
    },
    directives: {
      Clickoutside
    },
    mounted() {
      document.documentElement.scrollTop = 0;
    },
    methods: {
      outsideClick() {
        if (this.showChosedFlag) {
          this.showChosedFlag = false
        }
      },
      changeModle(e, parentInd, goodInd) {
        this.shoppingCartList[parentInd].list[goodInd].selectedModel = e
      },
      //增加数量
      addNum(parentInd, goodInd) {
        this.shoppingCartList[parentInd].list[goodInd].amount++
        this.changeMoney(parentInd, goodInd)
      },
      //减少数量
      subtraNum(parentInd, goodInd) {
        if (this.shoppingCartList[parentInd].list[goodInd].amount == 1) {
          this.del(parentInd, goodInd)
        } else {
          this.shoppingCartList[parentInd].list[goodInd].amount--
          this.changeMoney(parentInd, goodInd)
        }
      },
      //改变商品金额
      changeMoney(parentInd, goodInd) {
        this.shoppingCartList[parentInd].list[goodInd].money = this.shoppingCartList[parentInd].list[goodInd].amount *
          this.shoppingCartList[parentInd].list[goodInd].price
        //计算总金额
        this.changeSumMoney()
      },
      //删除商品
      del(parentInd, goodInd) {
        // this.$message.success("删除最后一个，弹出弹框，让其确定是否删除该商品")
        this.delOperation.key = ""
        this.delOperation.parentInd = parentInd
        this.delOperation.goodInd = goodInd
        this.dialogVisible = true
      },
      //底部删除按钮
      delBottom() {
        if (this.chosedGoodsList.length < 1) {
          this.$message.warning("请先选择要删除的商品！")
          return
        }
        this.delOperation.key = "batch"
        this.delOperation.parentInd = ''
        this.delOperation.goodInd = ''
        this.dialogVisible = true

      },
      //删除弹框：确认
      sureDialog(key, parentInd, goodInd) { //key:判断是否进行批量删除（key：batch则为批量删除）
        if (this.delOperation.key == "batch") {
          this.$message.success("获取要删除商品的list，请求后端接口进行删除")
        } else {
          this.$message.success("删除单个商品，请求后端接口进行删除")
        }
        this.closeDialog()
      },
      //删除弹框：取消
      closeDialog() {
        this.delOperation.key = ""
        this.delOperation.parentInd = ''
        this.delOperation.goodInd = ''
        this.dialogVisible = false
      },
      //查看已选择的商品
      showChosedGoods() {
        if (this.chosedGoodsList.length > 0) {
          this.showChosedFlag = !this.showChosedFlag
        } else {
          this.showChosedFlag = false
        }

      },
      //全选时改变状态
      changeAllSelectStatue() {
        for (var index in this.shoppingCartList) {
          this.shoppingCartList[index].isSelectAll = this.selectAll
          this.changeStoreSelectStatue(index, 'all')
        }
        //非全选：将选中的商品列表清空
        if (!this.selectAll) {
          this.chosedGoodsList = []
          this.subNum = 0
          this.sumPrice = 0
        } else {
          this.addChosedGoodsList()
        }

      },
      //将购物车中所有商品添加到 选中的商品列表
      addChosedGoodsList() {
        this.chosedGoodsList = []
        for (var index in this.shoppingCartList) {
          for (var i in this.shoppingCartList[index].list) {
            if (this.shoppingCartList[index].list[i].isSelect) {
              this.chosedGoodsList.push(this.shoppingCartList[index].list[i])
            }
          }
        }
        this.chosedNum = this.chosedGoodsList.length
        this.changeSumMoney()
      },
      //计算选中商品总金额
      changeSumMoney() {
        this.sumPrice = 0
        for (var index in this.chosedGoodsList) {
          this.sumPrice += Number(this.chosedGoodsList[index].money)
        }
        this.sumPrice = this.sumPrice.toFixed(2)
      },
      //全选某一家店铺的商品
      changeStoreSelectStatue(index, keyType) {
        for (var ind in this.shoppingCartList[index].list) {
          this.shoppingCartList[index].list[ind].isSelect = this.shoppingCartList[index].isSelectAll
        }
        // 不是点击“全选”按钮时，检查是否已经全选了
        if (keyType != 'all') {
          this.selectAll = this.checkAllStatue()
        }
        this.addChosedGoodsList()

      },
      // 检查整个购物车商品是否已经全选了
      checkAllStatue() {
        for (var item in this.shoppingCartList) {
          if (!this.shoppingCartList[item].isSelectAll) {
            return false
          }
        }
        return true
      },
      //改变某一件商品的状态
      changeGoodStatue(parentInd) {
        this.shoppingCartList[parentInd].isSelectAll = this.checkStoreAllStatue(parentInd)
        this.selectAll = this.checkAllStatue()
        this.addChosedGoodsList()
      },
      // 检查整个购物车商品是否已经全选了
      checkStoreAllStatue(parentInd) {
        for (var item in this.shoppingCartList[parentInd].list) {
          if (!this.shoppingCartList[parentInd].list[item].isSelect) {
            return false
          }
        }
        return true
      },
      // 结算
      settlement() {
        //
        if(this.chosedGoodsList.length<1){
          this.$message.warning("请先选择商品")
        }else{
          this.$router.push({
            path:'/orderPayment',
            query:{
              chosedGood:JSON.stringify(this.chosedGoodsList)
            }
          })
        }

      }
    }
  }
</script>

<style lang="less" scoped>
  //核心宽度
  @core-weight: 1200px;
  .shopping-cart-box {
    width: @core-weight;
    // height: calc(100% - 275px);
    min-height: 640px;
    // height: calc(100% - 100px);
    // overflow: auto;
    margin-bottom: 20px;
    position: relative;

    //购物车总数量
    .shopping-cart-top {
      margin-top: 20px;
      width: 100%;
      height: 40px;
      background: #FFFFFF;
      border-radius: 10px 10px 0px 0px;
      box-sizing: border-box;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 700;
      color: #434343;
      padding-left: 10px;
    }

    //商品一列的宽度
    .goods-width {
      width: 445px;
      box-sizing: border-box;
    }

    //单价一列的宽度
    .price-width {
      width: 180px;
      box-sizing: border-box;
    }

    //数量一列的宽度
    .amount-width {
      width: 200px;
      box-sizing: border-box;
    }

    //金额一列的宽度
    .money-width {
      width: 180px;
      box-sizing: border-box;
    }

    //操作一列的宽度
    .operation-width {
      width: 185px;
      box-sizing: border-box;
    }

    //购物车表头
    .shopping-cart-header {
      width: 100%;
      height: 40px;
      background: #FFFFFF;
      border-radius: 0px 0px 10px 10px;
      border-top: 1px solid #F3F3F3;
      box-sizing: border-box;
      padding-left: 10px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #434343;

      //全选+商品
      .goods {
        position: relative;

        // 全选
        .select-all {
          position: absolute;
          left: 0px;

          /deep/.el-checkbox__label {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }
        }
      }
    }

    // 购物车列表 滚动条
    .shoping-cart-content::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    // 购物车列表
    .shoping-cart-content {
      // position: absolute;
      // height: calc(100% - 160px);
      // overflow: auto;
      // top: 140px;
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      // padding-bottom: 70px;

      // 一家店铺里加购的商品
      .store-goods {
        width: 100%;
        background: #FFFFFF;
        border-radius: 10px;
        box-sizing: border-box;
        padding-top: 14px;
        margin-bottom: 20px;

        // 店铺名
        .store-name {
          margin-left: 10px;

          /deep/.el-checkbox__label {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }
        }

        .store-goods-main {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #434343;

          // 商品
          .goods {
            padding-left: 15px;
            margin: 20px 0px;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;

            img {
              width: 82px;
              height: 82px;
              border: 1px solid #E3E3E3;
              border-radius: 4px;
              margin: 0px 12px 0px 8px;
            }

            .goods-info {
              .name {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }

              // 型号
              .modle {
                cursor: pointer;
                position: relative;
                margin-top: 18px;
                padding: 8px 5px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #9C9C9C;
                border: 1px solid #F3F3F3;

                .iconfont {
                  margin-left: 9px;
                }
              }

              /* 消除小三角 */
              /deep/ .el-popper[x-placement^=bottom] .popper__arrow {
                display: none !important;
              }

              .el-popper .popper__arrow:after {
                border-width: 0px;
              }
            }
          }

          // 数量
          .amount-content {

            .add,
            .sub {
              width: 30px;
              height: 28px;
              background: #F5F5F5;
              border: 1px solid #EEEEEE;
              font-size: 20px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              cursor: pointer;
            }

            .amount {
              width: 60px;
              height: 28px;
              background: #FFFFFF;
              border: 1px solid #EEEEEE;
            }
          }

          // 操作
          .operation {
            cursor: pointer;
          }

          .operation:hover {
            color: #409eff;
          }
        }
      }
    }

    // 全选+删除+合计+结算
    .shopping-cart-bottom {
      box-shadow: 0px -1px 0px 0px #F6F6F6;
      z-index: 10;
      width: 100%;
      height: 70px;
      background: #FFFFFF;
      // background: #ff7535;
      border-radius: 10px;
      margin-top: 20px;
      padding-left: 10px;
      padding-right: 30px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      box-sizing: border-box;
      position: sticky;
      bottom: 0px;
      left: 0px;


      .chosed-goods-content {
        z-index: 10;
        position: absolute;
        left: 0;
        bottom: calc(100%);
        width: 100%;
        padding: 10px 20px;
        background-color: #fff;
        border: 1px solid #40A9FF;
        border-radius: 10px 10px 0px 0px;
        box-sizing: border-box;

        .sum-goods {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;

          span {
            color: #40A9FF;
            margin: 0px 5px;
          }
        }
      }

      .chosed-goods-content:before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        bottom: -24px;
        right: 220px;
        padding: 0;
        border-top: 12px solid #FFFFFF;
        border-bottom: 12px solid transparent;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        display: block;
        content: '';
        z-index: 12;
      }

      .chosed-goods-content:after {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        bottom: -28px;
        right: 218px;
        padding: 0;
        border-top: 14px solid #40A9FF;
        border-bottom: 14px solid transparent;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        display: block;
        content: '';
        z-index: 10;
      }

      /deep/.el-checkbox__label {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }

      // 删除
      .del-bottom {
        margin-left: 40px;
        cursor: pointer;
      }

      .del-bottom:hover {
        color: #409eff;
      }

      // 合计+结算
      .sum-settlement {

        // 已选择数量
        .chosed-num {
          padding: 5px 0px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin: 0 5px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
          }
        }

        // 合计
        .sum {
          margin-left: 40px;

          span {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
          }
        }

        .settlement {
          margin-left: 40px;
          width: 73px;
          height: 40px;
          background: #40A9FF;
          border-radius: 20px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
        }
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
