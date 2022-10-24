<template>
  <div>
    <div class="current-chosed">{{currentChosed.join('>')}}</div>
    <div class="main-box">
      <div class="left-box">
        <div class="title">
          <div class="name">Philips MR维修及配件供应
            <img src="../../../assets/images/index/icon_new_red.png" alt="">
          </div>
          <span class="publish-time">发布时间：2028.12.16</span>
        </div>
        <!-- 基本信息 -->
        <div class="basic-information">
          <div class="public-top-title">
            <img src="../../../assets/images/shop/icon_triangle_right.png" alt="">
            <span>基本信息</span>
          </div>
          <div class="two-lines">
            <ul class="one">
              <li>信息类型</li>
              <li>设备名称</li>
              <li>设备品牌</li>
              <li>设备型号</li>
            </ul>
            <ul class="two">
              <li>求购设备</li>
              <li>核磁</li>
              <li>设备品牌</li>
              <li>philips MR</li>
            </ul>
          </div>
        </div>
        <!-- 详细描述 -->
        <div class="detailed-description">
          <div class="public-top-title">
            <img src="../../../assets/images/shop/icon_triangle_right.png" alt="">
            <span>详细描述</span>
          </div>
          <div class="description">
            <span>
              专业维修飞利浦MR全部型号（包含不限于intera，achieva，multiva，ingenia，prodiva，elitios），原厂的技术，第三方专业高效的服务态度，飞利浦MR各型号配件齐全，工程师目前常驻华东区安徽跟山东，及东北区辽宁省，期待你的来电洽谈，承接飞利浦MR维修维保，GPS各型号MR配件供应，技术支持等服务，仓库在总部安徽，可安排仓管发航空件，急客户所急，合肥迅即影像科技有限公司全力为您服务，18855651129许齐（MR技术部技术总监）。
            </span>
            <img src="../../../assets/images/shop/pic_Commodity Details_ct.png" alt="">
            <img src="../../../assets/images/index/demand/pic_gongqiu_tj.png" alt="">
          </div>
        </div>
        <div class="remark">请主动联系我，联系时请说明是在“医界商城”看到的，谢谢！</div>
      </div>
      <div class="right-box">
        <div class="contact">
          <div class="item">
            <div class="key">联系人:</div>
            <div class="value">***</div>
          </div>
          <div class="item">
            <div class="key spacing">电话:</div>
            <div class="value">188*****888</div>
          </div>
          <div class="item">
            <div class="key spacing">地区:</div>
            <div class="value">*****</div>
          </div>
          <div class="btn-login">
            登录查看联系方式
          </div>
        </div>
        <!-- 店内相关求购 -->
        <div class="shop-demand">
          <div class="title">店内相关求购</div>
          <ul>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
          </ul>
        </div>
        <!-- 其他相关求购 -->
        <div class="shop-demand">
          <div class="title">其他相关求购</div>
          <ul>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>急需一个封魔盒，求</li>
            <li>要碗牛肉面，只要牛肉，不要面，满满的牛肉</li>
            <li>急需一个封魔盒，求</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentChosed: ['供求信息', '店铺供求', 'Philips MR维修及配件供应']
      }
    }
  }
</script>

<style lang="less" scoped>
  .current-chosed {
    margin: 10px 0px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }

  .main-box {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;

    .left-box {
      width: 950px;
      margin-right: 20px;
      background-color: #fff;
      padding-bottom: 40px;

      .title {
        width: 100%;
        height: 100px;
        padding: 0px 0px 0px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #F6F6F6;

        .name {
          margin-bottom: 15px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          img {
            margin-left: 10px;
            width: 20px;
            height: 14px;
          }
        }

        .publish-time {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }
      }

      // 公共的模块标题
      .public-top-title {
        margin-bottom: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;

        img {
          width: 8px;
          height: 8px;
          margin-right: 8px;
        }
      }

      // 基本信息
      .basic-information {
        width: 100%;
        border-bottom: 1px solid #F6F6F6;
        padding: 20px;

        .two-lines {
          height: 80px;
          width: 910px;
          border: 1px solid #F5F5F5;
          display: flex;
          flex-direction: column;

          .one {
            background: #F5F5F5;

          }

          .two {}

          .one,
          .two {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
              flex: 1;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              text-align: center;
            }
          }
        }
      }

      // 详细描述
      .detailed-description {
        border-bottom: 1px solid #F6F6F6;
        padding: 20px;

        .description {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;

          img {
            width: 910px;
            height: 512px;
            margin: 15px 0px;
          }
        }
      }

      .remark {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }

    }

    .right-box {
      width: 230px;

      // 联系方式
      .contact {
        width: 100%;
        height: 200px;
        background-color: #fff;
        margin-bottom: 20px;
        padding: 35px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;

        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .key {
            width: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .spacing {
            letter-spacing: 6px;
          }
        }

        .btn-login {
          margin-top: 10px;
          cursor: pointer;
          width: 190px;
          height: 38px;
          background: #40A9FF;
          border-radius: 6px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

      .shop-demand {
        height: 294px;
        background: #FFFFFF;
        margin-bottom: 20px;

        .title {
          height: 50px;
          padding-left: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          border-bottom: 1px solid #EEEEEE;
        }

        ul {
          margin-top: 5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          flex: 1;

          li {
            margin: 10px;
            width: 200px;
            padding-left:15px;
            box-sizing: border-box;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

    }
  }
</style>
