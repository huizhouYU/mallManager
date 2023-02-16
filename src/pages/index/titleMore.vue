<!-- 模块头部：模块标题 + 查看更多 -->
<template>
  <div class="content">
    <div class="title">
      <div class="bule"></div>
      <div class="name">{{title}}</div>
    </div>
    <div class="more" @click="toMore">
      <span>查看更多</span>
      <i class="iconfont">&#xe63c;</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title','morePath'],
    data() {
      return {}
    },
    methods:{
      toMore(){
        this.$router.push({
          path:this.morePath
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      display: flex;
      align-items: center;

      .bule {
        width: 4px;
        height: 24px;
        background-color: #40A9FF;
        margin-right: 15px;

      }

      .name {
        font-size: 24px;
        font-family: Microsoft YaHei;
        color: #333333;
      }
    }

    .more {
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #454545;
      display: flex;
      align-items: center;
      cursor: pointer;

      i {
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 15px;
        border-radius: 50%;
        margin-left: 6px;
        background-color: #B0B0B0;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
    }

    .more:hover {
      color: #40A9FF;

      i {
        background-color: #40A9FF;
      }
    }
  }
</style>
