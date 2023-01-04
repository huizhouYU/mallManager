<template>
  <div class="equipNav-box">
    <ul>
      <li v-for="(item,index) in chooseItemData" :key="index" @click="chooseClick(index)" :class="{'selected':selectIndex == index }">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectIndex: '-1',
        chooseItemData: [{
            id: '1',
            name: 'MRI'
          },
          {
            id: '2',
            name: 'CT'
          },
          {
            id: '3',
            name: 'PET/ct'
          },
          {
            id: '4',
            name: 'X-线'
          },
          {
            id: '5',
            name: 'DR'
          },
          {
            id: '6',
            name: '血压仪'
          },
          {
            id: '7',
            name: '探测仪'
          },
          {
            id: '8',
            name: '超声波'
          },
        ]
      }

    },
    methods:{
      chooseClick(key){
        this.selectIndex=key;
      }
    }

  }
</script>

<style scoped lang="less">
  .equipNav-box {
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        height: 100%;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666;
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        cursor: pointer;
      }

      .selected,
      li:hover {
        color: #40A9FF;
        border-bottom: 1px solid #40A9FF;
      }
    }
  }

  // .el-menu{
  //   background-color:  #f5f5f5;
  // }
  // .el-menu.el-menu--horizontal{
  //   border: none;
  // }

  // .el-menu.el-menu--horizontal {
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  //   height: 100%;
  // }

  // .el-menu--horizontal>.el-menu-item.is-active {
  //   // border-bottom: 2px solid #409EFF;
  //   border-bottom: none;
  //   color: #409EFF;
  // }

  // .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  //   border-bottom: none;
  //   color: #409EFF;
  // }
</style>
