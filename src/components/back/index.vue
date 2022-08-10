<script setup>
import { ArrowLeftBold } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['to']);
const route = useRouter();
const back = () => {
  route.replace(props.to);
};
</script>
<template>
  <el-button
    class="back-text"
    @click="back"
    :title="$t('common.return')"
    link
    :icon="ArrowLeftBold"
  >
    <slot></slot>
  </el-button>
</template>
<style scoped>
.back-text {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
</style>
