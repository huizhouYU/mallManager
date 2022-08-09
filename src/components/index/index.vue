<template>
  <el-container class="index-content">
    <el-header>
      <index-header class="index-header "></index-header>
    </el-header>
    <el-container class="index-main">
      <el-aside width="200px" class="main-aside">
        <img src="../../assets/images/login_bg.png" />
        <brand-nav></brand-nav>
        <!-- <el-menu class="el-menu-vertical-demo" :collapse="true">
          <el-submenu index="1">
            <template slot="title">
              <span slot="title">导航一</span>
              <span><i class="iconfont">&#xe63c;</i></span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu> -->
      </el-aside>
      <el-main>
        <div class="main-content">
          <equip-nav></equip-nav>
        </div>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
  import indexHeader from '../../components/index/indexHeader.vue'
  import equipNav from '../../components/index/equipNav.vue'
  import brandNav from '../../components/index/brandNav.vue'

  export default {
    components: {
      indexHeader,
      equipNav,
      brandNav
    },
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .index-content {
    padding: 0.625rem 3.125rem;
    height: 100%;
  }

  /* 清除浮动 */
  .clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;

  }

  /* 头部 */
  .index-header {
    height: 3.75rem;
  }

  .index-main {
    background-color: azure;
  }

  .main-aside {
    background-color: burlywood;

    img {
      width: 100%;
      height: 5rem;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

    .el-menu--collapse {
      width: 100%;
    }

    .el-submenu__title {
      display: flex;
      justify-content: space-around;
    }

    .el-menu--collapse .el-submenu__title span {
      width: auto;
      height: auto;
      visibility: visible;
    }

    .el-menu--collapse>.el-menu-item .el-submenu__icon-arrow,
    .el-menu--collapse>.el-submenu>.el-submenu__title>.el-submenu__icon-arrow {
      display: block;
      color: aqua;
    }
  }

  // .main-aside /deep/ .el-menu--collapse>.el-submenu>.el-submenu__title span {
  //   width: auto;
  //   height: auto;
  //   visibility: none !important;
  // }

  .el-main {
    padding: 0;
  }

  .main-content {
    height: 5rem;
  }
</style>
