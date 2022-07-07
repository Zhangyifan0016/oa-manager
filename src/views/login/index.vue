<template>
  <div class="login">
    <el-card class="login-wrapper">
      <div class="title">火星</div>
      <el-form :model="loginForm" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const loginForm = reactive({
  username: '',
  password: ''
})
</script>
<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  .login-wrapper {
    width: 500px;
    height: 392px;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .el-input {
      height: 40px;
    }
    .submit {
      width: 358px;
    }
  }
}
</style>
