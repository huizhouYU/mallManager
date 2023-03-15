<!-- 关于我们 -->
<template>
  <div class="article-content">
    <div class="title">
      关于<font>我们</font>
      <div class="english">COMPANY PROFILE</div>
    </div>
    <div class="content">
      <p>
       医界网络科技（安徽）有限公司，成立于2022年。由多位具有丰富互联网门户网站运营经验及多位长期深耕于医疗设备销售、维护行业的人士创立。公司于2023年元月正式上线医疗行业门户网站：医界圈。
      </p>
      <p>
        医界圈（www.yijiequan.cn）是一家关于医疗行业综合门户网站。医界商城作为其重要板块之一。通过专业的信息分享，丰富的医疗设备数据积累，高质量的医疗设备维修工程师合作。链接医院、第三方维修公司、设备厂家、配件销售企业、设备维修工程师。致力于服务广大医疗设备维修维护公司，医疗设备销售公司以及为全国医疗单位提供方便快捷的服务。
      </p>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="less" scoped>
  .article-content {
    padding: 15px 25px 63px;
    line-height: 30px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;

    .title {
      position: relative;
      padding: 43px 0px;
      height: 20px;
      height: 100%;
      text-align: center;
      font-size: 28px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;

      font {
        color: #40A9FF;
       }
       .english{
         width: 100%;
         position: absolute;
         font-size: 40px;
         font-family: Microsoft YaHei;
         font-weight: 400;
         color: #333333;
         line-height: 24px;
         opacity: 0.1;
         left: 50%;
         transform: translate(-50%,-20%);
       }
    }

    .content {
      padding-top: 30px;

      h4 {
        width: 100%;
        text-align: center;
      }
    }

    p {
      text-indent: 24pt
    }
  }
</style>
