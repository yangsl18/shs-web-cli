<script setup>
import LayoutHeader from './components/layout-header.vue';
import LayoutMenu from './components/layout-menu.vue';
import Breadcrumb from './components/breadcrumb.vue';
</script>
<template>
  <el-container style="height: 100vh">
    <el-header class="layout-header">
      <LayoutHeader></LayoutHeader>
    </el-header>
    <el-container>
      <el-aside width="210px" class="layout-menu">
        <el-scrollbar>
          <LayoutMenu></LayoutMenu>
        </el-scrollbar>
      </el-aside>
      <el-main class="layout-container">
        <el-scrollbar>
          <RouterView>
            <template #default="{ Component }">
              <Breadcrumb style="margin-bottom: 10px; font-size: 16px" />
              <component :is="Component" class="layout-main-container"></component>
            </template>
          </RouterView>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.layout-header {
  background-color: #242d4f;
  color: #fff;
  /* font-size: 24px; */
}

.layout-menu {
  height: 100%;
  background-color: #50597a;
}

.layout-container {
  height: 100%;
  background: #f5f7f9;
}

</style>
