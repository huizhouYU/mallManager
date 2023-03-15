<template>
  <div class="personal-data-box">
    <el-form ref="form" :model="form" label-width="90px" label-position="left">
      <el-form-item label="头像：">
        <label>
          <div class="upload-img">
            <template v-if="showImgUrl.indexOf('https://')=='-1'">
              <img :src="showImgUrl" alt="">
            </template>
            <template v-else>
              <img :src="showImgUrl" alt="">
            </template>
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
        <el-input size="small" v-model="form.realName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input size="small" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码:">
        <div class="get-code-item">
          <div class="g-remove-check-code_content" @keyup="fnCheckCodeKeyup" @keydown="fnCheckCodeKeydown"
            @paste="fnCheckCodeKeyPaste" @input="fnCheckCodeInputEvent">
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[0] !== ''}" max="9" min="0" maxlength="1"
              data-index="0" v-model.trim.number="aCheckCodeInputComputed[0]" type="number" ref="firstInputRef" />
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[1] !== ''}" max="9" min="0" maxlength="1"
              data-index="1" v-model.trim.number="aCheckCodeInputComputed[1]" type="number" />
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[2] !== ''}" max="9" min="0" maxlength="1"
              data-index="2" v-model.trim.number="aCheckCodeInputComputed[2]" type="number" />
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[3] !== ''}" max="9" min="0" maxlength="1"
              data-index="3" v-model.trim.number="aCheckCodeInputComputed[3]" type="number" />
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[4] !== ''}" max="9" min="0" maxlength="1"
              data-index="4" v-model.trim.number="aCheckCodeInputComputed[4]" type="number" />
            <input :class="{'g-code-input_color': aCheckCodeInputComputed[5] !== ''}" max="9" min="0" maxlength="1"
              data-index="5" v-model.trim.number="aCheckCodeInputComputed[5]" type="number" />
          </div>
          <!-- <span class="get-code">获取验证码</span> -->
          <span class="get-code" @click="getCode" v-show="countDown == 0">获取验证码</span>
          <span class="count-down" v-show="countDown>0">{{countDown}}s</span>
        </div>
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
  import {
    getInfo,
    updateInfo,
    sendUpdateMsg
  } from '@/api/user'
  import {
    uploadImage
  } from '@/api/public'
  export default {
    computed: {
      // ...mapGetters([
      //   'name',
      //   'userid',
      //   'avatar',
      // ]),
      // 验证码计算属性
      aCheckCodeInputComputed() {
        if (this.aCheckCodePasteResult.length === 6) {
          return this.aCheckCodePasteResult;
        } else if (this.aCheckCodeInput && Array.isArray(this.aCheckCodeInput) && this.aCheckCodeInput.length === 6) {
          return this.aCheckCodeInput;
        } else if (/^\d{6}$/.test(this.aCheckCodeInput.toString())) {
          return this.aCheckCodeInput.toString().split("");
        } else {
          return new Array(6);
        }
      }
    },

    mounted() {
      this.getData()
    },
    data() {
      return {
        countDown: 0,
        aCheckCodeInput: ['', '', '', '', '', ''], // 存储输入验证码内容
        aCheckCodePasteResult: [], // 粘贴的验证码
        imgFile: '',
        showImgUrl: '',
        form: {
          // avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          portrait: '',
          username: '',
          userId: '',
          realName: '',
          email: '',
          captcha: ''
        }
      }
    },
    methods: {
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
          return false
        } else {
          return true
        }
      },
      getData() {
        getInfo().then(response => {
          this.form = response.data.user
          this.showImgUrl = 'https://image.yijiequan.cn/yijiequan/attach/default-logo.jpg'
          if (this.form.portrait != undefined && this.form.portrait != null && this.form.portrait != '') {
            if (this.form.portrait.indexOf("https://") != -1 || this.form.portrait.indexOf("http://") != -1) {
              this.showImgUrl = this.form.portrait
            }
          }
        })
      },
      //获取手机短信验证码
      getCode() {
        //axios请求
        sendUpdateMsg({}).then(response => {
          if(response.code != 10000){
            this.$message.error(response.message)
          }else{
            this.$message.success(response.data)
          }
        })
        // 验证码倒计时
        if (!this.timer) {
          this.countDown = 60;
          // this.showRegisterGetVCode = false;
          this.timer = setInterval(() => {
            if (this.countDown > 0 && this.countDown <= 60) {
              this.countDown--;
            } else {
              // this.showRegisterGetVCode = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      },
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
              // _this.form.avatar = e.target.result
              _this.imgFile = files[0]
              _this.showImgUrl = e.target.result
            } else {
              _this.$message.warning({
                message: '上传文件的图片大小不能超过500kb!',
                btn: false
              })
            }

          }
        }
      },
      async onSubmit() {
        let _this = this;
        this.form.captcha = this.aCheckCodeInput.join('')
        this.form.userId = this.userid

        if (this.form.captcha == '') {
          this.$message.error("请填写短信验证码！")
          return false
        } else {
          let param = new FormData(); //创建form对象
          param.append('file', this.imgFile); //通过append向form对象添加数据
          //上传图片
          if (this.imgFile != '') {
            await uploadImage(param).then(response => {
              this.form.portrait = response.data
            })
          }
          //信息提交
          await updateInfo(this.form).then(response => {
            if (response.code == 10000) {
              this.$message.success("信息修改成功！")
              this.$router.push({
                path:'/personal',
                replace:true
              })
            }else{
              this.$message.error(response.message)
            }
          })
        }
      },
      // 输入验证码，更新验证码数据
      fnCheckCodeKeyup(e) {
        let index = e.target.dataset.index * 1;
        let el = e.target;
        // 解决输入e的问题
        el.value = el.value
          .replace(/Digit|Numpad/i, "")
          .slice(0, 1);
        if (/Digit|Numpad/i.test(e.code)) {
          // 必须在这里赋值，否则输入框会是空值
          this.aCheckCodeInput.splice(index, 1, e.code.replace(/Digit|Numpad/i, ""));
          el.nextElementSibling && el.nextElementSibling.focus();
          if (index === 5) {
            if (this.aCheckCodeInput.join("").length === 6) document.activeElement.blur();
          }
        }
      },
      // 输入验证码，检测位置变化
      fnCheckCodeKeydown(e) {
        let index = e.target.dataset.index * 1;
        let el = e.target;
        if (e.key === "Backspace") {
          if (this.aCheckCodeInput[index].length > 0) {
            this.aCheckCodeInput.splice(index, 1, '');
          } else {
            if (el.previousElementSibling) {
              el.previousElementSibling.focus();
              this.aCheckCodeInput[index - 1] = '';
            }
          }
        } else if (e.key === 'Delete') {
          if (this.aCheckCodeInput[index].length > 0) {
            this.aCheckCodeInput.splice(index, 1, '');
          } else {
            if (el.nextElementSibling) {
              el.nextElementSibling.focus();
              this.aCheckCodeInput[++index] = '';
            }
          }
        } else if (e.key === "Home") {
          el.parentElement.children[0] && el.parentElement.children[0].focus();
        } else if (e.key === "End") {
          el.parentElement.children[this.aCheckCodeInput.length - 1] &&
            el.parentElement.children[this.aCheckCodeInput.length - 1].focus();
        } else if (e.key === "ArrowLeft") {
          if (el.previousElementSibling) el.previousElementSibling.focus();
        } else if (e.key === "ArrowRight") {
          if (el.nextElementSibling) el.nextElementSibling.focus();
        }
      },
      // 输入验证码，解决一个输入框输入多个字符的问题
      fnCheckCodeInputEvent(e) {
        let index = e.target.dataset.index * 1;
        let el = e.target;
        el.value = el.value
          .replace(/Digit|Numpad/i, "")
          .slice(0, 1);
        this.aCheckCodeInput[index] = el.value;
      },
      // 验证码粘贴
      fnCheckCodeKeyPaste(e) {
        e.clipboardData.items[0].getAsString((str) => {
          if (str.toString().length === 6) {
            this.aCheckCodePasteResult = str.split("");
            document.activeElement.blur();
            this.aCheckCodeInput = this.aCheckCodeInputComputed;
            this.aCheckCodePasteResult = [];
          } else {
            // 如果粘贴内容不合规，清除所有内容
            this.aCheckCodeInput = ['', '', '', '', '', ''];
          }
        });
      },
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

    .get-code-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .g-remove-check-code .g-remove-check-code_title {
        font-size: 14px;
        color: #666;
      }

      .g-remove-check-code_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .g-remove-check-code_content input {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        font-size: 14px;
        text-align: center;
        border: none;
        outline: none;
        border: solid 1px rgba(187, 187, 187, 100);
        border-radius: 4px;
        box-sizing: border-box;
        -moz-appearance: textfield;
      }

      .g-remove-check-code_content input.g-code-input_color {
        border-color: #5290FF;
      }

      .g-remove-check-code_content input::-webkit-outer-spin-button,
      .g-remove-check-code_content input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
      }


      .get-code,
      .count-down {
        margin-left: 30px;
        cursor: pointer;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
      }

      .count-down {
        color: #495060;
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
