<template>
  <div class="flex-horizontal-start-start more-modle-select">
    <span>型号</span>
    <ul>
      <li v-for="(modle,i) in modles" @click="" :class="{'chosed':chosedModle==modle}" @click="changeModle(modle)">{{modle}}
      <div class="right-bottom_bg"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['modles','selectedModel'],
    mounted(){
      this.chosedModle = this.selectedModel
    },
    data(){
      return{
        chosedModle:''
      }
    },
    methods:{
      changeModle(modle){
        this.chosedModle = modle
        this.$emit("changeModle",this.chosedModle)
      }
    }
  }
</script>

<style lang="less" scoped>
  //公共的样式：横向+水平左对齐+垂直上对齐
  .flex-horizontal-start-start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  //选择更多型号
  .more-modle-select {
    margin-top: 24px;
    background-color: #fff;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: -100%;
    padding: 10px 15px;
    // box-shadow: 0 0 16px 0 rgba(0,0,0,.1);
    border: 1px solid #CCCCCC;

    span {
      min-width: 32px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #A0A0A0;
      line-height: 24px;
    }

    ul {
      margin-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      li {
        position: relative;
        cursor: pointer;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 5px 10px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #9C9C9C;
        border: 1px solid #F3F3F3;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        .right-bottom_bg{
          display: none;
          width: 13px;
          height: 13px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      .chosed{
        border: 1px solid #40A9FF;
        .right-bottom_bg{
          display: block;
          background-image: url('../../assets/images/shop/pic_sel_bg.png');
        }

      }
    }
  }
</style>
