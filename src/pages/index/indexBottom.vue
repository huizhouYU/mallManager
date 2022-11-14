<template>
  <div>
    <!-- 模块七 四大模块 -->
    <div class="model7-box">
      <div class="content">
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">资金安全</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/index/modle7_item1.png" alt="">
          <div class="title">
            <p class="name">专业服务</p>
            <p class="remark">服务3100万用户，覆盖各类服务</p>
          </div>
        </div>
    
      </div>
    </div>
    <!-- 模块八 关于商城 -->
    <div class="modle8-box">
      <div class="content">
        <div class="item-left">
          <div class="left-item1">
            <p class="title">关于商城</p>
            <p class="remark">
              360商城是奇虎360公司的官方电商平台，主要经营
              360安全智能设备，以及相关领域消费品。提供最新
              的360智能设备，最贴心的售后服务，360社区一手
              评测资讯，享受360安全、安心、放心的购物体验。
            </p>
            <div class="about-we">
              <p>关于我们</p>
              <img src="../../assets/images/index/wx.png" alt="">
              <img src="../../assets/images/index/xl.png" alt="">
    
            </div>
          </div>
          <div class="left-item2">
            <p class="title">售后服务</p>
            <ul>
              <li>7日无理由退货</li>
              <li>质量问题15日内换货</li>
              <li>保修条款</li>
              <li>服务流程</li>
              <li>许可协议</li>
              <li>隐私政策</li>
            </ul>
          </div>
        </div>
        <div class="item-right">
          <div class="right-item1">
            <p class="title">帮助中心</p>
            <ul>
              <li>用户注册</li>
              <li>会员说明</li>
              <li>登录与密码找回</li>
              <li>购买指南</li>
              <li>支付方式</li>
              <li>配送与说明</li>
            </ul>
          </div>
          <div class="right-item2">
            <p class="title">联系我们</p>
            <div class="remark"> </div>
            <p class="mobile">400-123-1234</p>
            <p class="time">周一至周日 9:00-18:00（仅收市话费）</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 模块九 底部链接 -->
    <div class="modle9-bottom">
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
      // margin-top: 25px;
      border-bottom: 1px solid #eee;
    
      .content {
        width: 1200px;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
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
  // 模块八 关于商城
  .modle8-box {
    
      width: 100%;
      height: 350px;
      background-color: #fff;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
    
      .content {
        width: 1200px;
        height: 350px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 60px 0px;
    
        .item-left,
        .item-right {
          width: 600px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
    
          .title {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: #333333;
            margin-bottom: 40px;
          }
    
          ul {
            li {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              margin: 10px 0px;
              cursor: pointer;
            }
          }
    
        }
    
        .left-item1 {
          width: 430px;
          height: 100%;
    
          .remark {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            width: 340px;
            line-height: 24px;
          }
    
          .about-we {
            margin-top: 30px;
            padding-top: 30px;
            width: 340px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: start;
    
            p {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-right: 20px;
            }
    
            img {
              width: 22px;
              height: 18px;
              margin-right: 20px;
            }
          }
        }
    
        .left-item2 {
          width: 170px;
          height: 100%;
        }
    
        .right-item1 {
          padding-left: 20px;
          width: 250px;
          height: 100%;
        }
    
        .right-item2 {
          width: 350px;
          height: 100%;
          border-left: 1px solid #eee;
    
          .title {
            text-align: center;
          }
    
          .remark {
            display: flex;
            flex-direction: column;
          }
    
          .mobile {
            font-size: 28px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            text-align: center;
          }
    
          .time {
            margin-top: 15px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            text-align: center;
          }
        }
      }
  }
  // 模块九 底部链接
  .modle9-bottom {
    
      background-color: #fff;
      width: 100%;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 15px 0;
      box-sizing: border-box;
    
      p {
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    
  }
</style>