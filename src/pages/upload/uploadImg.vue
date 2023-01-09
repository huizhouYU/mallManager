<template>
  <div>
    上传图片:
    <input type="file" id="inputFile" accept="image/png, image/jpeg, image/gif, image/jpg" @change="previewFile" multiple="multiple">
    <button @click="submit">提交</button>
    <br />
    返回结果：
    <div>{{result}}</div>
  </div>
</template>

<script>
  import {
    uploadImage
  } from '@/api/public'
  export default{
    data(){
      return{
        imgFile:'',
        result:''
      }
    },
    methods:{
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
            const isLt3M = files[0].size / 1024 / 1024 < 3;
            if (isLt3M) {

              // 通过 e.target.result 获取到读取的结果，值是 BASE64 格式的字符串
              // 法1
              // this.$refs.imgRef.src = e.target.result
              // 法2
              // _this.form.avatar = e.target.result
              _this.imgFile = files[0]
            } else {
              _this.$message.warning({
                message: '上传文件的图片大小不能超过3M!',
                btn: false
              })
            }

          }
        }
      },
     submit(){
        let param = new FormData(); //创建form对象
        param.append('file', this.imgFile); //通过append向form对象添加数据
        //上传图片
        if (this.imgFile != '') {
           uploadImage(param).then(response => {
            this.result = response.data
          })
        }
      }
    }
  }
</script>

<style>
</style>
