<template>
  <div>
    <!-- 模块七 四大模块 -->
    <div class="model7-box">
      <div class="flex-between-center content">
        <div class="item">
          <img src="../../assets/images/index/pic_word_shi.png" alt="">
          <div class="title">
            <p class="name">商家实名</p>
            <p class="remark">官方把关，服务商100%实名认证</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_gui.png" alt="">
          <div class="title">
            <p class="name">交易合规</p>
            <p class="remark">所有交易均采用电子合同签署</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_an.png" alt="">
          <div class="title">
            <p class="name">资金安全</p>
            <p class="remark">付款后，验收合格后卖家方可提款</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_bao.png" alt="">
          <div class="title">
            <p class="name">全程保障</p>
            <p class="remark">企业服务交易全流程线上保障</p>
          </div>
        </div>

      </div>
    </div>
    <div class="flex-center-center bottom-four-model">
      <router-link tag="a" class="flex-center-center item" target="_blank" to="./aboutUs">关于我们</router-link>
      <router-link tag="a" class="flex-center-center item" target="_blank" to="./residencyAgreement">入驻协议</router-link>
      <router-link tag="a" class="flex-center-center item" target="_blank" to="./tradingRules">交易规则</router-link>
      <router-link tag="a" class="flex-center-center item" target="_blank" to="./legalStatement">法律声明</router-link>
    </div>
    <!-- 模块九 底部链接 -->
    <div class="flex-column-around-center modle9-bottom">
      <p class="item1"> ©2019-2021 yijiequan.cn版权所有 </p>
      <p class="item2">京ICP备08010314号-6</p>
      <p class="item3">公司名称：医界网络科技（安徽）有限公司 | 社会统一信用代码：91110105336460203N</p>
    </div>

  </div>
</template>

<script>
</script>

<style scoped lang="less">
  // 模块七 四大模块
  .model7-box {

    width: 100%;
    height: 70px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    .content {
      width: 1200px;
      height: 100%;
      margin: auto;

      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 56px;
          height: 56px;
        }

        .title {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 12px;

          .name {
            font-size: 20px;
            color: #333;
          }

          .remark {
            font-size: 12px;
            color: #999;
          }
        }

      }
    }

  }

  // 关于我们+ 入驻协议 + 交易规则 + 法律声明
  .bottom-four-model {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 92px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-bottom: 1px solid #EEEEEE;

    .item {
      height: 16px;
      cursor: pointer;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      padding: 0px 40px;
      text-decoration: none;
    }
    .item:hover{
      color: #40A9FF;
    }

    .item+.item {
      border-left: 1px solid #CCCCCC;
    }
    .item:first-child{
      padding-left: 0px;
    }
    .item:last-child{
      padding-right: 0px;
    }
  }

  // 模块九 底部链接
  .modle9-bottom {

    background-color: #fff;
    width: 100%;
    height: 90px;
    padding: 15px 0;
    box-sizing: border-box;

    p {
      font-size: 12px;
      color: #999;
      text-align: center;
    }

  }
</style>
