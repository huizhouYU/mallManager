<template>
  <div class="change-pwd-box">
    <el-form ref="form" :model="form" label-width="90px" label-position="left">
      <el-form-item label="用户名：">
        <el-input size="small" v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="新密码：">
        <el-input size="small" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:">
        <el-input size="small" v-model="form.againPassword"></el-input>
      </el-form-item>
      <el-form-item label="手机号:">
        <el-input size="small" v-model="form.mobile" disabled></el-input>
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
          <span class="get-code">获取验证码</span>
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
  export default {
    computed: {
      ...mapGetters([
        'name',
        'mobile'
      ]),
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
      this.form.username = this.name
      this.form.mobile = this.mobile
    },
    data() {
      return {
        aCheckCodeInput: ['', '', '', '', '', ''], // 存储输入验证码内容
        aCheckCodePasteResult: [], // 粘贴的验证码
        form: {
          username: '',
          password: '',
          againPassword: '',
          mobile: '',
          code: ''
        }
      }
    },
    methods: {
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" scoped>
  .change-pwd-box {
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

    .el-input {
      width: 300px;
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


      .get-code {
        margin-left: 30px;
        cursor: pointer;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #40A9FF;
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
