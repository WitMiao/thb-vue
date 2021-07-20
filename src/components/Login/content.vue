<template>
  <div>
    <v-card-title class="pa-0">
      <v-col></v-col>
      <v-col class="d-flex justify-center">
        <v-img alt="THB Logo" class="shrink" contain src="@/assets/img/logo/logo2.png" width="120" />
      </v-col>
      <v-col class="d-flex justify-end align-self-start pa-1">
        <v-btn icon>
          <v-icon x-large color="#cefefb" @click="closeAllDialog">mdi-close-circle</v-icon>
        </v-btn>
      </v-col>
    </v-card-title>
    <v-card-text v-if="showMod.isLogin" class="d-flex justify-center">
      <div class="login-animate" :class="{ 'username-animate': isUserNameFocus, 'password-animate': isPasswordFocus }">
        <div class="head">
          <div class="skin" :style="{ left: getPosition(-0.7, 1) }"></div>
          <div class="left-eye" :class="{ doe: isDoe }" :style="{ left: getPosition(0.5, 1) }"></div>
          <div class="right-eye" :class="{ doe: isDoe }" :style="{ left: getPosition(4, 1) }"></div>
          <div class="mask"></div>
          <div class="face" :style="{ left: getPosition(0, 1) }">
            <div class="nose"></div>
            <div class="mouth" :class="{ show: isPwdShow, doe: isDoe }"></div>
          </div>
        </div>
        <div class="body"></div>
        <div class="left-ear" :style="{ left: getPosition(1.8, -1) }"></div>
        <div class="right-ear" :style="{ left: getPosition(7.3, -1) }"></div>
        <div class="left-arm" :class="{ show: isPwdShow }"></div>
        <div class="right-arm" :class="{ show: isPwdShow }"></div>
      </div>
    </v-card-text>
    <v-card-text class="pb-0 text-h4 d-flex justify-center mb-4 white--text" v-else>
      {{ showMod.title }}
    </v-card-text>

    <v-form ref="loginForm">
      <v-text-field
        v-for="(item, name, i) in showMod.form"
        :key="i"
        :label="item.label"
        :append-icon="item.isText ? '' : item.pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="item.isText || item.pwdShow ? 'text' : 'password'"
        :placeholder="item.placeholder"
        required
        filled
        background-color="white"
        class="rounded ma-0 py-0 px-15"
        :error-messages="inputErrors(name, item)"
        @click:append="item.pwdShow = !item.pwdShow"
        @input="vInput(name)"
        @blur="vBlur(name, item)"
        @focus="item.isFocus = true"
        v-model="item.val"
      ></v-text-field>
    </v-form>
    <v-card-actions class="justify-center pb-0">
      <v-btn color="warning" large @click="showMod.isLogin ? login() : register()" width="75%">
        <span class="text-h6 font-weight-black">{{ showMod.btnStr }}</span>
      </v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center pa-0 pb-16">
      <span>{{ showMod.spanStr }}</span>
      <v-btn text @click="showMod.isLogin ? openRegisterDialog() : closeRegisterDialog()">
        {{ showMod.toggleBtnStr }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { signIn } from '@/api';
import { required, minLength, maxLength, alphaNum } from 'vuelidate/lib/validators';
export default {
  name: 'LoginContent',
  data() {
    return {
      loginMod: {
        isLogin: true,
        form: {
          username: {
            label: '账号',
            placeholder: '请输入账号',
            isText: true,
            isFocus: false,
            val: '',
          },
          password: {
            label: '密码',
            placeholder: '请输入密码',
            isText: false,
            pwdShow: false,
            isFocus: false,
            val: '',
          },
        },
        btnStr: '立即登录',
        spanStr: '没有账号？',
        toggleBtnStr: '免费注册',
      },
      registerMod: {
        isLogin: false,
        title: '注册账号',
        form: {
          rUsername: { label: '账号', placeholder: '(字母+数字组合，6位含以上)', isText: true, val: '' },
          nickname: { label: '昵称', placeholder: '(可输入中文、字母或者数字)', isText: true, val: '' },
          rPassword: {
            label: '密码',
            placeholder: '(6-16位，至少包含数字跟字母)',
            isText: false,
            pwdShow: false,
            val: '',
          },
          rePassword: { label: '确认密码', placeholder: '(再次确认密码)', isText: false, pwdShow: false, val: '' },
        },
        btnStr: '立即注册',
        spanStr: '已有账号？',
        toggleBtnStr: '立即登录',
      },
    };
  },
  validations: {
    loginMod: {
      form: {
        username: {
          val: {
            required,
            alphaNum,
            minLength: minLength(6),
          },
        },
        password: {
          val: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(16),
          },
        },
      },
    },
    registerMod: {
      form: {
        rUsername: {
          val: {
            required,
            alphaNum,
            minLength: minLength(6),
          },
        },
        nickname: {
          val: {
            required,
            minLength: minLength(1),
            isNickname(value) {
              const regExp = /^[a-z0-9\u4e00-\u9fa5]+$/i;
              return regExp.test(value);
            },
          },
        },
        rPassword: {
          val: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(16),
            isPassword(value) {
              const regExp = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
              return regExp.test(value);
            },
          },
        },
        rePassword: {
          val: {
            sameAsPassword: function() {
              return this.isSameAsPassword;
            },
          },
        },
      },
    },
  },
  computed: {
    ...mapState({
      registerDialog: (state) => state.header.registerDialog,
    }),
    showMod() {
      return this.registerDialog ? this.registerMod : this.loginMod;
    },
    formName() {
      return this.registerDialog ? 'registerMod' : 'loginMod';
    },
    loginForm() {
      return this.loginMod.form;
    },
    registerForm() {
      return this.registerMod.form;
    },
    isSameAsPassword() {
      return this.registerForm.rPassword.val === this.registerForm.rePassword.val;
    },
    isPwdShow() {
      return this.loginForm.password.pwdShow;
    },
    isUserNameFocus() {
      return this.loginForm.username.isFocus;
    },
    isPasswordFocus() {
      return this.loginForm.password.isFocus;
    },
    isDoe() {
      return this.loginForm.username.val.length >= 6;
    },
    leftLength() {
      const { length } = this.loginForm.username.val;
      const leftLength = parseFloat((0.8 / 20) * length);
      return leftLength > 1 ? 1 : leftLength;
    },
  },
  methods: {
    getPosition(init, plusOrMinus) {
      return this.isUserNameFocus ? init + plusOrMinus * this.leftLength + 'em' : '';
    },
    initFormVal() {
      const form = this[this.formName].form;
      for (const item in form) {
        form[item].val = '';
      }
      this.$v.$reset();
    },
    closeLoginDialog() {
      this.initFormVal();
      this.$store.commit('CLOSELOGINDIALOG');
    },
    closeRegisterDialog() {
      this.initFormVal();
      this.$store.commit('CLOSEREGISTERDIALOG');
    },
    openRegisterDialog() {
      this.initFormVal();
      this.$store.commit('OPENREGISTERDIALOG');
    },
    closeAllDialog() {
      this.initFormVal();
      this.$store.dispatch('closeAllDialog');
    },
    vInput(name) {
      this.$v[this.formName].form[name].val.$touch();
    },
    vBlur(name, item) {
      item.isFocus = false;
      this.vInput(name);
    },
    inputErrors(name, item) {
      const errors = [];
      const inputVal = this.$v[this.formName].form[name].val;
      if (!inputVal.$dirty) return errors;
      alphaNum;
      inputVal.hasOwnProperty('required') && !inputVal.required && errors.push(item.label + '为必填项！');
      inputVal.hasOwnProperty('alphaNum') && !inputVal.alphaNum && errors.push(item.label + '只能包含字母和数字！');
      inputVal.hasOwnProperty('minLength') && !inputVal.minLength && errors.push(item.label + '至少六个字符！');
      inputVal.hasOwnProperty('maxLength') && !inputVal.maxLength && errors.push(item.label + '最多十六个字符！');
      inputVal.hasOwnProperty('sameAsPassword') && !inputVal.sameAsPassword && errors.push('两次密码不一致！');
      inputVal.hasOwnProperty('isNickname') &&
        !inputVal.isNickname &&
        errors.push(item.label + '只能包含中文、字母和数字！');
      inputVal.hasOwnProperty('isPassword') &&
        !inputVal.isPassword &&
        errors.push(item.label + '至少包含数字跟字母，可以有常用字符！');
      return errors;
    },
    async login() {
      const vLoginForm = this.$v.loginMod.form;
      vLoginForm.$touch();
      if (!vLoginForm.$invalid) {
        const {
          username: { val: uname },
          password: { val: pwd },
        } = this.loginForm;
        const result = await signIn(uname, pwd);
        console.log(result);
        this.closeAllDialog();
      }
    },
    register() {
      const vRegisterForm = this.$v.registerMod.form;
      vRegisterForm.$touch();
      if (!vRegisterForm.$invalid) {
        this.closeRegisterDialog();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-animate {
  width: 10em;
  height: 10em;
  border-radius: 5em;
  background: #cefefb;
  position: relative;
  overflow: hidden;

  div {
    transition: all 0.5s;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  .body {
    background-image: url(../../assets/img/loginBear/body.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 10em;
    height: 14em;
    position: absolute;
    bottom: -3.5em;
    left: calc(50% - 5.2em);
    z-index: 0;
  }

  .mask {
    background-image: url(../../assets/img/loginBear/mask.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 10em;
    height: 8.3em;
    position: absolute;
    bottom: -1.5em;
    left: calc(50% - 5.2em);
    z-index: 0;
  }

  .head {
    background-image: url(../../assets/img/loginBear/face.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 6.8em;
    height: 6.3em;
    position: absolute;
    bottom: 2.2em;
    left: calc(50% - 3.4em);
    z-index: 1;
  }

  .left-ear {
    background-image: url(../../assets/img/loginBear/left-ear.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 2em;
    height: 2em;
    position: absolute;
    bottom: 6em;
    left: calc(50% - 3.8em);
  }

  .right-ear {
    background-image: url(../../assets/img/loginBear/right-ear.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 2em;
    height: 2em;
    position: absolute;
    bottom: 6em;
    left: calc(50% + 2em);
  }

  .left-eye {
    background-image: url(../../assets/img/loginBear/left-eye.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 1.6em;
    height: 2.4em;
    position: absolute;
    bottom: 2.8em;
    left: calc(50% - 2.5em);
  }

  .right-eye {
    background-image: url(../../assets/img/loginBear/right-eye.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 1.6em;
    height: 2.4em;
    position: absolute;
    bottom: 2.8em;
    left: calc(50% + 0.9em);
  }

  .face {
    background-image: url(../../assets/img/loginBear/muzzle.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 6.5em;
    height: 2.8em;
    position: absolute;
    bottom: 0.5em;
    left: calc(50% - 3.3em);
  }

  .skin {
    background-image: url(../../assets/img/loginBear/skin.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 8em;
    height: 3em;
    position: absolute;
    bottom: -0.1em;
    left: calc(50% - 4em);
  }

  .nose {
    background-image: url(../../assets/img/loginBear/nose.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 1.3em;
    height: 1.1em;
    position: absolute;
    bottom: 1.6em;
    left: calc(50% - 0.5em);
  }

  .mouth {
    background-image: url(../../assets/img/loginBear/mouth-smile.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 2.8em;
    height: 2.7em;
    position: absolute;
    top: 0.2em;
    left: calc(50% - 1.35em);
  }

  .left-arm {
    background-image: url(../../assets/img/loginBear/left-arm.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 3.5em;
    height: 7.2em;
    position: absolute;
    bottom: -7.5em;
    left: 1em;
    z-index: 2;
    transition: bottom 0.5s;
  }

  .right-arm {
    background-image: url(../../assets/img/loginBear/right-arm.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 3.5em;
    height: 7.2em;
    position: absolute;
    bottom: -7.5em;
    left: 5.5em;
    z-index: 2;
    transition: bottom 0.5s;
  }
}

.password-animate {
  .mouth.show {
    background-image: url(../../assets/img/loginBear/mouth-circle.png);
  }

  .left-arm.show {
    bottom: -2em !important;
  }

  .right-arm.show {
    bottom: -2em !important;
  }

  .left-arm {
    bottom: 0.2em;
  }

  .right-arm {
    bottom: 0.2em;
  }
}

.username-animate {
  .left-eye {
    left: 0.5em;
    bottom: 2.3em;
  }

  .left-eye.doe {
    background-image: url(../../assets/img/loginBear/left-eye-doe.png);
  }

  .right-eye.doe {
    background-image: url(../../assets/img/loginBear/right-eye-doe.png);
  }

  .right-eye {
    left: 4em;
    bottom: 2.3em;
  }

  .face {
    bottom: 0em;
  }

  .skin {
    bottom: -0.6em;
  }

  .nose {
    left: 2.3em;
  }

  .mouth {
    left: 1.5em;
    background-image: url(../../assets/img/loginBear/mouth-half.png);
  }

  .mouth.doe {
    background-image: url(../../assets/img/loginBear/mouth-open.png);
  }
}
</style>
