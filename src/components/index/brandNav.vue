<template>
    <ul class="brand-nav-box">
      <li v-for="(item,index) in brandList" :key="item.id">{{item.name}}<i class="iconfont">&#xe63c;</i></li>
    </ul>
</template>

<script>
  export default {
    data() {
      return {
        brandList: [{
            id: '1',
            name: '西门子'
          },
          {
            id: '2',
            name: '东软'
          },
          {
            id: '3',
            name: '万东'
          },
          {
            id: '4',
            name: '安科'
          },
          {
            id: '5',
            name: '明峰'
          },
          {
            id: '6',
            name: '万东'
          },
          {
            id: '7',
            name: '新奥博伟'
          },
          {
            id: '8',
            name: '鑫高益'
          },
          {
            id: '9',
            name: '贝斯达'
          },

          {
            id: '10',
            name: '开普/宽腾'
          }

        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .brand-nav-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // ul {
    //   width: 100%;
    //   // height: 100%;
    //   padding: 0;
    // }

    li {
      list-style: none;
      // height: 3.125rem;
      height: calc((100%)/10);
      box-sizing: border-box;
      background-color: #fff;
      padding: 0rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      border: 1px solid #e0e0e0;
      cursor: pointer;
    }
     li:hover{
      background-color: #e0e0e0;
    }
  }
</style>
