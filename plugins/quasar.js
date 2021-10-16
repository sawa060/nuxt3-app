import { Quasar } from 'quasar';
import * as All from 'quasar';

export default ({ app }) => {
  app.use(Quasar, {
    config: {},
    component: All,
    plugins: {
    }
  });
};
