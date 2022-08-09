<template>
  <div class="brand-nav-box">
    <ul>
      <li v-for="(item,index) in brandList" :key="item.id">{{item.name}}<i class="iconfont">&#xe63c;</i></li>
    </ul>
  </div>
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

        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .brand-nav-box {
    ul {
      width: 100%;
      padding: 0;
    }

    ul li {
      list-style: none;
      height: 3.125rem;
      background-color: #fff;
      padding: 0rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
    }
  }
</style>
