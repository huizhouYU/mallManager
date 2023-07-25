<template>
  <div class="recruit-item-content">
    <div class="recruit-item-box" @click="toDetail({})">
      <div class="item-left">
        <div class="one-line">
          <span class="name">电子信息工程师</span>
          <span class="area">【浙江-杭州】</span>
          <span class="salary">8-88k</span>
        </div>
        <div class="two-line">
          <span class="experience">6-66年</span>
          <span class="education">小学</span>
        </div>
        <div class="three-line">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/icon_enterprise.png" alt="">
          <span class="storename">哈哈哈无限责任有限公司</span>
          <div class="line"></div>
          <span class="store-type">企业类型</span>
        </div>
      </div>

      <div class="item-right">
        <img src="https://image.yijiequan.cn/yijiequan-client/attach/icon_hr.png" alt="">
        <div class="contact-box">
          <!-- <div class="my-message-icon"></div> -->
          <i class="iconfont my-iconfont-message">&#xe620;</i>
          <!-- <img src="../../assets/images/index/brands/icon_double-right.png" alt=""> -->
          <span>立即联系</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      toDetail(item){
        this.$router.push({
          path: '/recruitDetail',
          query: {
            id:item.id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .recruit-item-content {
    // background-color: bisque;

    .recruit-item-box {
      margin-bottom: 20px;
      width: 100%;
      height: 128px;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-left {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .one-line,
        .two-line,
        .three-line {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .one-line {
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;

          .name,
          .area,
          .salary {
            margin-right: 20px;
          }

          .salary {
            color: #40A9FF;
          }
        }

        .two-line {
          margin-top: 14px;
          padding-left: 10px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;

          .experience {
            margin-right: 24px;
          }
        }

        .three-line {
          margin-top: 20px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;

          img {
            width: 26px;
            height: 26px;
            margin-right: 8px;
          }

          .line {
            margin: 0px 10px;
            width: 1px;
            height: 12px;
            border: 1px solid #E6EAF1;
          }

          .store-type {
            line-height: 12px;
            height: 12px;
            color: #999999;
          }
        }
      }

      .item-right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          margin-bottom: 10px;
        }

        .contact-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 94px;
          height: 22px;
          background: #FFFFFF;
          border: 1px solid #E6EAF1;
          border-radius: 6px;
          font-size: 14px;
          line-height: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;

          .my-iconfont-message {
            font-size: 14px;
            line-height: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #40A9FF;
            margin-right: 4px;
          }

          // .my-message-icon {
          //   width: 14px;
          //   height: 14px;
          //   margin-right: 4px;
          //   background-image: url('https://image.yijiequan.cn/yijiequan-client/attach/icon_contact_del.png');
          // }

          // img {
          //   width: 14px;
          //   height: 14px;
          //   margin-right: 4px;
          // }
        }
      }
    }

    .recruit-item-box:hover {
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

      .item-right {
        .contact-box {
          background: #40A9FF;
          color: #FFFFFF;

          // .my-message-icon {
          //   background-image: url('https://image.yijiequan.cn/yijiequan-client/attach/icon_contact_sel.png');
          // }

          .my-iconfont-message {
            color: #FFFFFF;
          }
        }
      }
    }


  }
</style>
