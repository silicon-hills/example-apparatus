import { Adapter } from './types';
import {
  createApp,
  appListen,
  registerEjs,
  registerSwagger
} from '~/bootstrap';

const adapter = Adapter.Express;

(async () => {
  const app = await createApp(adapter);
  await registerEjs(app, adapter);
  registerSwagger(app);
  await appListen(app, adapter);
})();