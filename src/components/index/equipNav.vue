<template>
  <div class="equipNav-box">
    <el-menu default-active="0" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-submenu index="5">
        <template slot="title">我的工作台</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        <el-submenu index="5-4">
          <template slot="title">选项4</template>
          <el-menu-item index="5-4-1">选项1</el-menu-item>
          <el-menu-item index="5-4-2">选项2</el-menu-item>
          <el-menu-item index="5-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="6">消息中心</el-menu-item>
      <el-menu-item index="7">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
  .equipNav-box {
    height: 100%;

  }
  .el-menu{
    background-color:  #f5f5f5;
  }
  .el-menu.el-menu--horizontal{
    border: none;
  }

  .el-menu.el-menu--horizontal {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    // border-bottom: 2px solid #409EFF;
    border-bottom: none;
    color: #409EFF;
  }

  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: none;
    color: #409EFF;
  }
</style>
