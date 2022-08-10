<script setup>
import { initRoutes } from '@/router/routes';
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
import MenuItem from './menu-item.vue';
const menus = initRoutes().filter((menu) => !menu.hideInMenu);
const route = useRoute();
const { fullPath } = toRefs(route);
</script>
<template>
  <el-menu class="menu" mode="vertical" :default-active="fullPath" :router="true">
    <template v-for="menu in menus" :key="menu.path">
      <MenuItem :menu="menu"></MenuItem>
    </template>
  </el-menu>
</template>
<style scoped>
.menu {
  --el-menu-text-color: #a1a6af;
  --el-menu-hover-bg-color: #50597a;
  border: none;
}
</style>
