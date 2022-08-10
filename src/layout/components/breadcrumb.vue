<script setup>
import { useI18n } from '@/locales/index.js';
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue-demi';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const breadcrumbs = computed(() =>
  route.matched
    .filter((item) => {
      const { meta = {} } = item;
      const { hideInBreadcrumb = false } = meta;
      return !hideInBreadcrumb;
    })
    .map(({ name }) => {
      return {
        name: t(name),
        key: name
      };
    })
);
</script>
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="{ name, key } in breadcrumbs" :key="key">{{
      name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped></style>
