<template>
  <div class="navbar">
    <Breadcrumb></Breadcrumb>
    <div>
      <el-icon class="notice"><Bell /></el-icon>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"> {{ userInfo.userName }} </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              邮箱: {{ userInfo.userEmail }}
            </el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import Breadcrumb from '../../components/Breadcrumb'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const store = useStore()
const router = useRouter()
const userInfo = computed(() => {
  return store.getters.manager
})
// 下拉菜单点击事件
const handleCommand = (command) => {
  switch (command) {
    case 'logout':
      handleLogout()
      break
  }
}
// 退出登录
const handleLogout = async () => {
  try {
    await store.dispatch('users/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  height: 50px;
  background-color: #fff;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  z-index: 9999;
  left: 200px;
  .notice {
    margin-right: 15px;
    line-height: 30px;
    cursor: pointer;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    margin-top: 2px;
  }
  .el-dropdown-link {
    color: #409eff;
  }
}
</style>
