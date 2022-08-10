import { defineStore } from 'pinia';
import { localStorage } from '@/utils/storage';

const { get } = localStorage;
const locale = get('locale', 'zh-CN');

export const useSysStore = defineStore('sys', {
  state: () => {
    return {
      locale
    };
  }
});
