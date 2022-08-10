<script setup>
import logo from '@/assets/images/tcl-logo.png';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

const { name: username } = storeToRefs(useUserStore());
const logout = () => {
};
</script>
<template>
  <el-row :gutter="20" align="middle" style="margin: 18px 0">
    <el-col :span="12" style="display: flex; align-items: center">
      <el-image style="width: 40px; height: 24px; margin-right: 10px" :src="logo" fit="contain" />
      <span>{{ $t('sys.name') }}</span>
    </el-col>
    <el-col :span="12">
      <span style="float: right">
        <el-button type="primary" link @click="logout">{{ $t('sys.logout') }}</el-button>
        <span style="margin-left: 8px; font-size: 18px">{{ username }}</span>
      </span>
    </el-col>
  </el-row>
</template>
<style scoped></style>
