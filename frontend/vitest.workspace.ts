import path from 'path';
import { fileURLToPath } from 'url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineWorkspace } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const setupFile = path.resolve(__dirname, 'packages/config/vitest/vitest.setup.ts');

function project(name: string, relativeRoot: string) {
  return {
    plugins: [tsconfigPaths()],
    test: {
      name,
      root: path.resolve(__dirname, relativeRoot),
      globals: true,
      setupFiles: [setupFile],
      environment: 'jsdom',
      include: ['src/**/*.test.{ts,tsx}']
    }
  };
}

export default defineWorkspace([
  project('app1', 'apps/app1'),
  project('app2', 'apps/app2'),
  project('shared', 'packages/shared'),
  project('core', 'packages/core')
]);
