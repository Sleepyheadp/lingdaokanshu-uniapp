<style scoped lang="less">
  input::-webkit-input-placeholder {
    color: #5694d1;
  }
  .input-wrapper {
    display: table;
    width: 354px;
    height: 51px;
    position: relative;
    font-size: 12px;
    top: 1px;
    background-image: url("../../assets/images/login/input-bg.png");
    background-size: 354px 76px;
    background-repeat: no-repeat;
    &.focus {
      background: url("../../assets/images/login/input-bg-focus.png");
      background-size: 354px 76px;
      background-repeat: no-repeat;
    }
    img {
      height: 25px;
      width: 25px;
    }
    .input-group-prepend{
      display: table-cell;
      padding: 24px 20px 24px 28px;
      font-size: inherit;
      font-weight: normal;
      line-height: 1;
      text-align: center;
      width: 85px;
      height: 30px;
    }
    .input-container {

    }
    .login-input-default {
      color: #ffffff;
      background: transparent !important;
      width: 210px;
      height: 32px;
      border: 0px;
      margin-top: 20px;
      position: absolute;
      z-index: 2;
      padding: 5px;
      top: 3px;
      outline: medium;
    }
  }
</style>
<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName" style="margin-bottom: 0px;">
      <div class="input-wrapper" :class="{'focus':inputFocus==='user'}">
        <div class="input-group-prepend">
          <img v-if="inputFocus!=='user'" src="../../assets/images/login/login-user.png" />
          <img v-else-if="inputFocus==='user'" src="../../assets/images/login/login-user-focus.png" />
        </div>
        <div class="input-container">
          <input v-model="form.userName" class="login-input-default" @focus="inputFocus='user'" @blur="inputFocus=''" placeholder="请输入用户名" />
        </div>
      </div>
    </FormItem>
    <FormItem prop="password">
      <div class="input-wrapper" :class="{'focus':inputFocus==='lock'}">
        <div class="input-group-prepend">
          <img v-if="inputFocus!=='lock'" src="../../assets/images/login/login-lock.png" />
          <img v-else-if="inputFocus==='lock'" src="../../assets/images/login/login-lock-focus.png" />
        </div>
        <div class="input-container">
          <input type="password" v-model="form.password" class="login-input-default" @focus="inputFocus='lock'" @blur="inputFocus=''" placeholder="请输入密码" />
        </div>
      </div>
    </FormItem>
    <FormItem style="text-align: center">
      <Button @click="handleSubmit" style="width: 185px;" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      inputFocus: '',
      form: {
        userName: 'super_admin',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleFocus(type) {
      console.log('选中');
      this.inputFocus = type;
    },
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
