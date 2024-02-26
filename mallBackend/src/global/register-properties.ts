import { formatUtcToString } from '@/utils/data-format';
import { App } from 'vue';
export default function registerProPerties(app: App) {
  app.config.globalProperties.$tool = {
    formatTime(value: string) {
      return formatUtcToString(value);
    }
  };
}
