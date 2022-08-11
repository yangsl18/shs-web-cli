<script setup>
import { computed } from '@vue/reactivity';
import { toRefs } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
const props = defineProps({
  menu: {
    type: Object,
    default() {
      return {};
    }
  },
  parentPath: {
    type: String,
    default: ''
  }
});
const { menu = {}, parentPath } = toRefs(props);
const { children = [], path = '', meta = {} } = menu.value;
const { title = '' } = meta;
const childrenMenu = computed(() => {
  return children.filter((child = {}) => {
    const { hideInMenu = false } = child;
    return !hideInMenu;
  });
});
const fullPath = computed(() => {
  return path.startsWith('/') ? path : `${parentPath.value}/${path}`;
});
</script>
<template>
  <el-sub-menu class="menu-item" v-if="childrenMenu.length > 1" :index="fullPath">
    <template #title>
      <svg-icon
        v-if="menu.meta && menu.meta.icon"
        :icon-class="menu.meta.icon"
      ></svg-icon>
      <span class="ml5">{{ $t(title)}}</span>
    </template>
    <MenuItem
      v-for="subMenu in childrenMenu"
      :key="subMenu.path"
      :menu="subMenu"
      :parentPath="fullPath"
    ></MenuItem>
  </el-sub-menu>
  <MenuItem
    v-else-if="childrenMenu.length === 1"
    :key="path"
    :menu="childrenMenu[0]"
    :parentPath="fullPath"
  ></MenuItem>
  <el-menu-item v-else class="menu-item" :index="fullPath">
    <template #title>
      <svg-icon
        v-if="menu.meta && menu.meta.icon"
        :icon-class="menu.meta.icon"
      ></svg-icon>
      <span class="ml5">{{ $t(title)}}</span>
    </template>
  </el-menu-item>
</template>
<style scoped>
.menu-item {
  background-color: #50597a;
}
</style>
