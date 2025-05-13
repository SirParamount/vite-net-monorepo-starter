import { mergeConfig } from 'vite';
import { devHttps } from '../../packages/config/vite/dev-https';
import { baseConfig } from '../../packages/config/vite/vite.base.config';

export default mergeConfig(baseConfig, {
  server: {
    port: 5001,
    https: devHttps
  }
});
