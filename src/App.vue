<script setup>
import { storeToRefs } from 'pinia';
import { useSysStore } from './store/sys';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import { computed } from '@vue/reactivity';

const { locale } = storeToRefs(useSysStore());
const elLocales = {
  'zh-CN': zhCn,
  'en-US': en
};
const elLocale = computed(() => elLocales[locale.value]);
</script>

<template>
  <el-config-provider :locale="elLocale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
