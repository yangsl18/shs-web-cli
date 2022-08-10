import { storeToRefs } from 'pinia';
import { useSysStore } from '@/store/sys';
import { createI18n } from 'vue-i18n';
import { genMessage } from './helper';
import zhModules from './lang/zh-CN';
import enModules from './lang/en-US';

let i18n;

export const setupI18n = async () => {
  if (!i18n) {
    const messages = {
      'zh-CN': await genMessage(zhModules),
      'en-US': await genMessage(enModules)
    };
    const { locale } = storeToRefs(useSysStore());
    i18n = createI18n({
      messages,
      locale: locale.value
    });
  }
  return {
    i18n,
    t: i18n.global.t
  };
};

export const useI18n = () => {
  return {
    i18n,
    t: i18n.global.t
  };
};
