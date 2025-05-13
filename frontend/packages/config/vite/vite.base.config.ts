import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export const baseConfig = defineConfig({
  plugins: [tsconfigPaths(), tailwindcss(), react(), checker({ typescript: true })]
});
