import { mergeConfig } from 'vite';
import { baseConfig } from '../../packages/config/vite/vite.base';
import path from 'path';
import { devHttps } from '../../packages/config/vite/dev-https';

export default mergeConfig(baseConfig, {
  server: {
    port: 5002,
    https: devHttps
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        '../../packages/config/vitest/vitest.config.ts'
      )
    ],
    include: ['apps/app2/src/**/*.test.ts', 'apps/app2/src/**/*.test.tsx'],  }
});
