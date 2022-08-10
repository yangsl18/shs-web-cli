import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import pinia from './store';
import { useRoute } from './router';
import { setupI18n } from '@/locales';
import { ElMessageBox } from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

async function boot() {
  // 配置pinia
  app.use(pinia);
  // 配置vue-router
  const { router } = useRoute();
  app.use(router);
  // 配置i18n多语言
  const { i18n } = await setupI18n();
  app.use(i18n);
  // 全局注册MessageBox
  app.use(ElMessageBox);
  // 注册element-plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // mount
  app.mount('#app');
}

boot();

export default app;
