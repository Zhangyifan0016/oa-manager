<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.main {
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 70px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
