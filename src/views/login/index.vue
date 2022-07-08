<template>
  <div class="login">
    <el-card class="login-wrapper">
      <div class="title">火星</div>
      <el-form :model="loginForm" :rules="loginRules" ref="LoginRef">
        <el-form-item prop="username">
          <el-input
            prefix-icon="User"
            placeholder="请输入用户名"
            v-model="loginForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="View"
            placeholder="请输入密码"
            v-model="loginForm.userPwd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  userName: '',
  userPwd: ''
})
// 校验规则
const loginRules = reactive({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  userPwd: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    },
    { min: 6, max: 20, message: '密码不能小于6位或者大于20位', trigger: 'blur' }
  ]
})
const LoginRef = ref(null)
const handleLogin = () => {
  LoginRef.value.validate(async (valid) => {
    if (!valid) return
    if (valid) {
      const res = await store.dispatch('users/handleLogin', loginForm)
      console.log(res)
      router.push('/')
    }
  })
}
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
