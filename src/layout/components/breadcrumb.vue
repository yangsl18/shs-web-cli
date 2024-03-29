<template>
  <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="
            item.redirect === 'noredirect' || index === breadcrumbs.length - 1
          "
          class="no-redirect"
          >{{ $t(item.meta.title) }}</span
        >
        <a v-else @click.prevent="handleLink(item)">
          {{ $t(item.meta.title) }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { compile } from 'path-to-regexp';
import { router } from '@/router/index';

const currentRoute = useRoute();
const pathCompile = (path) => {
  const { params } = currentRoute;
  const toPath = compile(path);
  return toPath(params);
};

const breadcrumbs = ref([]);

function getBreadcrumb() {
  let matched = currentRoute.matched.filter(
    item => item.meta && item.meta.title
  );

  breadcrumbs.value = matched.filter(item => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false;
  });
}


function handleLink(item) {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect).catch(err => {
      console.warn(err);
    });
    return;
  }
  router.push(pathCompile(path)).catch(err => {
    console.warn(err);
  });
}

watch(
  () => currentRoute.path,
  path => {
    if (path.startsWith('/redirect/')) {
      return;
    }
    getBreadcrumb();
  }
);

onBeforeMount(() => {
  getBreadcrumb();
});
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
