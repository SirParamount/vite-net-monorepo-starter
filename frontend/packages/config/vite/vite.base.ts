import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import tailwindcss from '@tailwindcss/vite';

export const baseConfig = defineConfig({
  plugins: [tailwindcss(), react(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@app1': path.resolve(__dirname, '../../../apps/app1/src'),
      '@app2': path.resolve(__dirname, '../../../apps/app2/src'),
      '@core': path.resolve(__dirname, '../../../packages/core/src'),
      '@shared': path.resolve(__dirname, '../../../packages/shared/src')
    }
  },
});