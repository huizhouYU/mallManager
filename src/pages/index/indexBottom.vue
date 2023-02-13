<template>
  <div>
    <!-- 模块七 四大模块 -->
    <div class="model7-box">
      <div class="flex-between-center content">
        <div class="item">
          <img src="../../assets/images/index/pic_word_shi.png" alt="">
          <div class="title">
            <p class="name">商家实名</p>
            <!-- <p class="remark">官方把关，服务商100%实名认证</p> -->
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_gui.png" alt="">
          <div class="title">
            <p class="name">交易合规</p>
            <!-- <p class="remark">所有交易均采用电子合同签署</p> -->
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_an.png" alt="">
          <div class="title">
            <p class="name">资金安全</p>
            <!-- <p class="remark">付款后，验收合格后卖家方可提款</p> -->
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/pic_word_bao.png" alt="">
          <div class="title">
            <p class="name">全程保障</p>
            <!-- <p class="remark">企业服务交易全流程线上保障</p> -->
          </div>
        </div>

      </div>
    </div>
    <div class="flex-center-center bottom-four-model">
      <router-link tag="a" class="flex-center-center item" to="./aboutUs">关于我们</router-link>
      <router-link tag="a" class="flex-center-center item" to="./residencyAgreement">入驻协议</router-link>
      <router-link tag="a" class="flex-center-center item" to="./tradingRules">交易规则</router-link>
      <router-link tag="a" class="flex-center-center item" to="./legalStatement">法律声明</router-link>
    </div>
    <!-- 模块九 底部链接 -->
    <div class="flex-column-around-center modle9-bottom">
      <p class="item1"> ©2022-至今 <a href="http://web.yijiequan.cn/">医界圈 yijiequan.cn版权所有 </a></p>
      <p class="item2">
        <a target="_blank" href="https://beian.miit.gov.cn/">皖ICP备2022012747-6 </a> |
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34019102001080">皖公网备案 34019102001080</a>
      </p>
     <!-- <p class="item3">
        <a target="_blank" href="https://image.yijiequan.cn/yijiequan-client/attach/20230107190205875_00(1)(1).png">企业营业执照</a> |
        <a target="_blank" href="https://image.yijiequan.cn/yijiequan-client/attach/医界圈-医疗器械备案凭证.png">医疗器械网络交易服务第三方平台备案凭证</a>
      </p>
      <p class="item3">
        <a target="_blank" href="https://image.yijiequan.cn/yijiequan-client/attach/医界圈-服务资格证书.png">互联网药品信息服务资格证书：(皖)-经营性-2022-0047</a> |
        <a target="_blank" href="https://image.yijiequan.cn/yijiequan-client/attach/20230107190205875_01(1)(1)(1).png">增值电信业务经营许可证：皖B2-20220523</a>
      </p> -->
      <!-- <p class="item3">公司名称：医界网络科技（安徽）有限公司 | 社会统一信用代码：91110105336460203N</p> -->
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

    .item:hover {
      color: #40A9FF;
    }

    .item+.item {
      border-left: 1px solid #CCCCCC;
    }

    .item:first-child {
      padding-left: 0px;
    }

    .item:last-child {
      padding-right: 0px;
    }
  }

  // 模块九 底部链接
  .modle9-bottom {

    background-color: #fff;
    width: 100%;
    // height: 90px;
    padding: 15px 0;
    box-sizing: border-box;

    p {
      font-size: 12px;
      color: #999;
      text-align: center;
      margin-bottom: 5px;
    }

    a {
      text-decoration: none;
      color: #999;
    }

  }
</style>
