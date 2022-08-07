Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@huizhouYU
huizhouYU
/
mallManager
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
mallManager/src/components/home/home.vue
@huizhouYU
huizhouYU 登录模块
Latest commit cc4b35c 4 hours ago
 History
 1 contributor
31 lines (29 sloc)  601 Bytes

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    created() {
      console.log(this.$router)
      //获取token
      const token = localStorage.getItem('token')
      console.log('token', token)
      if (!token) {
        //没有token 返回登录页
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<style>
</style>

