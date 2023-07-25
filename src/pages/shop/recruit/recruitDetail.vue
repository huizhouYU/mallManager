<template>
  <div class="demand-detail-content">
    <div class="positionType">{{positionType.join('>')}}</div>
    <div class="recurit-position-box">
      <div class="info-left">
        <span class="name">电子工程师</span>
        <div class="time-box">
          <img src="https://image.yijiequan.cn/yijiequan-client/attach/icon_time20230627.png" alt="">
          <span>更新于2028-06-18</span>
        </div>
        <span class="salary">8-88k</span>
        <ul class="ask-ul">
          <li>浙江-杭州</li>
          <li>经验不限</li>
          <li>小学</li>
          <li>全职</li>
        </ul>
      </div>
      <div class="info-right">
        <div class="tip">对我们发布的职位感兴趣吗？快用<font class="bule-font">微信扫码</font>和 我聊聊吧</div>
        <div class="qp-box">
          <img src="../../../assets/images/index/buyer/pic_erweima.png" alt="">
        </div>
      </div>
    </div>
    <div class="info-detial-box">
      <div class="detail-box">
        <div class="item-title">
          <span class="title">职位描述</span>
          <div class="line"></div>
        </div>
        <div class="describe">
          <span>
            岗位职责：
            1、参加医生查房，积极与医生沟通，及时了解患者治疗及护理重点；
            2、对患者进行正确评估，及时填写各类评估报告；
            3、及时正确完成患者所有的治疗护理工作，完成标本采集与送检，密切关注病人病情变化并及时报告医生；
            4、保证各项基础护理按时到位；
            5、及时了解患者需求，不断改善工作。

            岗位要求：有ICU工作经验优先，护士资格证的注册护士。
          </span>
        </div>
        <div class="item-title">
          <span class="title">职位要求</span>
          <div class="line"></div>
        </div>
        <div class="ask-item-box">
          <div class="ask-item">
            <span class="key">经验需求</span>
            <span class="value">8-88年</span>
          </div>
          <div class="ask-item">
            <span class="key">最低学历</span>
            <span class="value">小学及以下</span>
          </div>
          <div class="ask-item">
            <span class="key">工作地区</span>
            <span class="value">浙江-杭州</span>
          </div>
        </div>
        <div class="item-title">
          <span class="title">联系方式</span>
          <div class="line"></div>
        </div>
        <div class="ask-item-box">
          <div class="ask-item">
            <span class="key">联系人</span>
            <span class="value">于女士</span>
          </div>
          <div class="ask-item">
            <span class="key">联系电话</span>
            <span class="value">188 8888 8888</span>
          </div>
          <div class="ask-item address-item">
            <span class="key">详细地址</span>
            <span class="value">杭州滨江区华为技术有限公司杭州研究所Z9</span>
          </div>
        </div>

      </div>
      <div class="info-right-box">
        <RecruitEnter></RecruitEnter>
      </div>
    </div>
    <div class="similar-title">相似职位</div>
    <div class="similar-recurit-box">
      <div class="recruit-item" v-for="(item,index) in 4" :key="index" @click="toDetail({})">
        <div class="name-salary">
          <span class="name">高级税务专员</span>
          <span class="salary">8-88k</span>
        </div>
        <div class="store-area">
          <div class="store">
            <img src="https://image.yijiequan.cn/yijiequan-client/attach/icon_enterprise.png" alt="">
            <span>哈哈无限网络科技有限公司</span>
          </div>
          <div class="area">杭州</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RecruitEnter from '../../../pages/recruit/recruitEnter.vue'
  export default {
    components: {
      RecruitEnter
    },
    data() {
      return {
        positionType: ['医院/临床医疗（广东）', 'ICU护士']
      }
    },
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
  .demand-detail-content {
    width: 1200px;
    margin-bottom: 35px;
  }

  .positionType {
    margin: 15px 0px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }

  .recurit-position-box {
    width: 100%;
    height: 200px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .info-left {
      height: 100%;
      padding: 40px 55px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      .name {
        font-size: 24px;
        line-height: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        margin-bottom: 12px;
      }

      .time-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        line-height: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #9A9BA6;
        margin-bottom: 12px;

        img {
          width: 14px;
          height: 16px;
          margin-right: 4px;
        }
      }

      .salary {
        font-size: 24px;
        line-height: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #40A9FF;
        margin-bottom: 18px;
      }

      .ask-ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        line-height: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;

        li {
          padding-right: 10px;
        }

        li+li {
          padding-left: 10px;
          border-left: 1px solid #DDDDDD;
        }
      }
    }

    .info-right {
      width: 535px;
      height: 100%;
      background-image: url('https://image.yijiequan.cn/yijiequan-client/attach/pic_bg_arrow20230627.png');
      padding-left: 154px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .tip {
        width: 169px;
        height: 65px;
        font-size: 16px;
        line-height: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-right: 12px;

        .bule-font {
          color: #40A9FF;
        }
      }

      .qp-box {
        width: 145px;
        height: 145px;
        background: #FFFFFF;
        border: 1px solid #B4DDFF;
        border-radius: 10px;
        padding: 18px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .info-detial-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 45px;

    .detail-box {
      width: 850px;
      min-height: 100px;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 35px 55px;



      .item-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        line-height: 16px;
        margin-bottom: 30px;
        margin-top: 25px;

        .title {
          margin-right: 20px;
        }

        .line {
          width: 653px;
          height: 1px;
          border: 1px solid #EBEEF2;
        }
      }

      .item-title:first-child {
        margin-top: 0px;
      }

      .describe {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #555555;
        line-height: 28px;
      }

      .ask-item-box {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .ask-item {
          // margin-top: 15px;
          line-height: 30px;
          width: 50%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .key {
            width: 56px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            margin-right: 24px;
          }

          .value {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #555555;
          }
        }

        .address-item {
          width: auto;
        }
      }
    }

    .info-right-box {
      width: 350px;
      padding-left: 20px;
    }

  }

  .similar-title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
  }

  .similar-recurit-box {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: flex-start;
    grid-gap: 15px;

    .recruit-item {
      cursor: pointer;
      width: 390px;
      height: 91px;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 18px;

      .name-salary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        line-height: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        margin-bottom: 17px;

        .salary {
          color: #40A9FF;
        }
      }

      .store-area {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .store {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 13px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;

          img {
            width: 24px;
            height: 24px;
            margin-right: 12px;
          }
        }

        .area {
          font-size: 13px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
        }
      }
    }

    .recruit-item:hover {
      box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);

      .name-salary {
        .name {
          color: #40A9FF;
        }
      }
    }
  }
</style>
