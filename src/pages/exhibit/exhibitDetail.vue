<template>
  <div class="exhibit-detail-content">
    <div class="exhibit-detail-top-bg">
      <img src="../../assets/images/exhibit/pic_bg_zhanhui.png" alt="">
    </div>
    <div class="flex-column-start-center detail-content-box">
      <div class="flex-between-center top-title-tag">
        <span>首页 > 展会频道 > 襄阳市第一人民医院移动DR 项目的询价文件</span>
        <span>纠错</span>
      </div>
      <div class="flex-column-start-center title-publish-time">
        <span class="title">CMAC-2023 中国医美抗衰老大会暨展览会</span>
        <div class="flex-center-center publish-time">
          <div class="publish">
            <span class="key">发布者：</span>
            <span class="value">高性能医疗器械展 </span>
          </div>
          <div class="time">
            <span class="key">发布时间：</span>
            <span class="value">2018-06-18</span>
          </div>
        </div>
      </div>
     <div class="content">
       文章内容
     </div>
     <div class="flex-between-center bottom-acticle">
       <div class="acticle-directory">上一篇：郎溪县中医院超声科设备采购公告</div>
       <div class="acticle-directory">下一篇：无</div>
     </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
  .exhibit-detail-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-width: 1200px;

    .exhibit-detail-top-bg {
      width: 100%;
      img {
        width: 100%;
        height: 316px;
      }

    }

    .detail-content-box {
      margin-bottom: 10px;
      margin-top: -216px;
      width: 1200px;
      margin: center center;
      background: #FFFFFF;

      .top-title-tag {
        padding: 0px 20px;
        width: 100%;
        height: 32px;
        background: #F3F3F3;
        line-height: 12px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }
      .title-publish-time{
        padding-top: 64px;
        width: 100%;
        height: 160px;
        .title{
          line-height: 22px;
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }
        .publish-time{
          margin-top: 32px;
            line-height: 14px;
          .key{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #666666;
          }
          .value{
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }
          .publish+.time{
            margin-left: 182px;
          }
        }
      }
      .content {
         min-height: 100px;
        min-height: 100px;
        padding: 45px 76px 45px 0px;
        border-top: 1px solid #E5E5E5;
        border-bottom: 1px solid #E5E5E5;
        width: 960px;
      }
      .bottom-acticle{
        width: 960px;
        height: 92px;
        .acticle-directory{
          cursor: pointer;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }
      }
    }
  }
</style>
