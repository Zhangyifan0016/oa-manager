<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      <el-icon> </el-icon>
      {{ item.meta.title }}
    </el-menu-item>
  </template>
  <template v-if="item && item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon> </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Item
        v-for="(childItem, index) in item.children"
        :menuList="childItem"
        :key="index"
      ></Item>
    </el-sub-menu>
  </template>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
// eslint-disable-next-line vue/no-setup-props-destructure
const item = props.menuList
</script>
<style scoped></style>
