import { App } from 'vue';
import registerProPerties from './register-properties';
export function globalRegister(app: App): void {
  app.use(registerProPerties);
}
