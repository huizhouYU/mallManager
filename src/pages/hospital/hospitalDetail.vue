<template>
  <div class="hospital-detail-content">
    <div class="hospital-detail-top-bg">
      <img src="../../assets/images/hospital/pic_bg_hospital.png" alt="">
    </div>
    <div class="flex-column-start-center detail-content-box">
      <img src="http://yy.medcmz.cn/uploads/attach/2021/04/20210413/90ebb3989b5a6018a5545cf228660234.png" alt=""
        class="log">
      <div class="flex-between-center top-title-tag">
        <span>首页 > 医院频道 > {{hospitalInfo.name}}</span>
        <span>纠错</span>
      </div>
      <div class="flex-column-start-center title-publish-time">
        <span class="title">{{hospitalInfo.name}}</span>
      </div>
      <div class="content" v-html="hospitalInfo.content">
      </div>
      <div class="flex-between-center bottom-acticle">
        <div class="acticle-directory" @click="toNext(hospitalInfo.pre)">上一篇：
          <template v-if="hospitalInfo.pre != null">
            {{hospitalInfo.pre.name}}
          </template>
          <template v-else>无</template>
        </div>
        <div class="acticle-directory"  @click="toNext(hospitalInfo.next)">下一篇：
          <template v-if="hospitalInfo.next != null">
            {{hospitalInfo.next.name}}
          </template>
          <template v-else>无</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    hospitalDetail
  } from '@/api/index'
  export default {
    data() {
      return {
        hospitalInfo: {}
      }
    },
    mounted() {
      const id = this.$route.query.id
      this.getData(id)
    },
    methods: {
      getData(id) {

        hospitalDetail({
          id: id
        }).then(response => {

          if (response.code == 10000) {
            this.hospitalInfo = response.data
          } else {
            this.message.error(response.message)
          }
          document.documentElement.scrollTop = 0;
          console.log("获取的医院详情：", response)
        })
      },
      toNext(info){
        console.log("info:",info)
        if(info!=null){
          this.getData(info.id)
          // this.$router.push({
          //   path: '/hospitalDetail',
          //   query: {
          //     id:info.id
          //   }
          // })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .hospital-detail-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-width: 1200px;

    .hospital-detail-top-bg {
      width: 100%;

      img {
        width: 100%;
        height: 316px;
      }

    }

    .detail-content-box {
      position: relative;
      margin-bottom: 10px;
      margin-top: -116px;
      width: 1200px;
      margin: center center;
      background: #FFFFFF;

      .log {
        background-color: #FFFFFF;
        overflow: hidden;
        border-radius: 50%;
        position: absolute;
        width: 178px;
        height: 178px;
        top: -89px;
        left: 50%;
        transform: translate(-50%, 0);
      }

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

      .title-publish-time {
        padding-top: 95px;
        width: 100%;
        height: 160px;

        .title {
          line-height: 22px;
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }

        .publish-time {
          margin-top: 32px;
          line-height: 14px;

          .key {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #666666;
          }

          .value {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }

          .publish+.time {
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

      .bottom-acticle {
        width: 960px;
        height: 92px;

        .acticle-directory {
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
