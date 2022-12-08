<template>
  <div class="personal-data-box">
    <el-form ref="form" :model="form" label-width="90px" label-position="left">
      <el-form-item label="头像：">
        <label>
          <div class="upload-img">
            <img :src="form.avatar" alt="">
            <span class="edit-span">编辑头像</span>
            <input type="file" id="inputFile" accept="image/png, image/jpeg, image/gif, image/jpg" @change="previewFile"
              class="hiddenInput" multiple="multiple">
          </div>
        </label>
      </el-form-item>
      <el-form-item label="用户名：">
        <div>
          <el-input size="small" v-model="form.username" minlength="6" maxlength="16" show-word-limit></el-input>
          <div class="tip">字符范围在6-16位之间</div>
        </div>

      </el-form-item>
      <el-form-item label="真实姓名:">
        <el-input size="small" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号:">
        <el-input size="small" v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input size="small" v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'mobile'
      ])
    },
    mounted() {
      document.documentElement.scrollTop = 0;
      this.form.username = this.name
      this.form.avatar = this.avatar
      this.form.mobile = this.mobile
    },
    data() {
      return {
        form: {
          avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          username: '',
          name: '',
          mobile: '',
          email: ''
        }
      }
    },
    methods: {
      previewFile(e) {
        // 1.获取用户选择的文件对象
        const files = e.target.files
        if (files.length === 0) {
          // 2.1用户没有选择图片(使用默认图片)
        } else {
          // 2.2用户选择了图片(使用选择的图片)
          // ◆将 File 对象 转成 BASE64 字符串
          // 1.创建 FileReader 对象
          const fr = new FileReader()
          // 2.调用 readAsDataURL 函数，读取文件内容
          fr.readAsDataURL(files[0])
          // 3.监听 fr 的 onload 事件
          fr.onload = (e) => {
            let _this = this;
            const isLt2M = files[0].size / 1024 < 500;
            if (isLt2M) {

              // 通过 e.target.result 获取到读取的结果，值是 BASE64 格式的字符串
              // 法1
              // this.$refs.imgRef.src = e.target.result
              // 法2
              _this.form.avatar = e.target.result
            } else {
              _this.$message.warning({
                message: '上传文件的图片大小不能超过500kb!',
                btn: false
              })
            }

          }
        }
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" scoped>
  .personal-data-box {
    margin-top: 20px;
    background: #fff;
    width: 100%;
    height: 460px;
    padding: 26px 20px;

    /deep/ .el-form-item__label {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;

    }

    /deep/.el-input--small {
      font-size: 12px;
    }

    .tip {
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
    }

    .el-input {
      width: 300px;
    }

    .upload-img {
      position: relative;
      width: 60px;
      height: 60px;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }

      .edit-span {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.4);
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
      }

      .hiddenInput {
        top: 0px;
        left: 0px;
        position: absolute;
        width: 60px;
        height: 60px;
        display: none;
      }
    }

    .submit {
      /deep/ .el-form-item__content {
        width: 300px;
        display: flex;
        justify-content: center;
      }
    }

  }
</style>
