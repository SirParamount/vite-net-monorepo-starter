import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const certDir = path.resolve(__dirname, '../../../packages/config/certs');

export const devHttps = {
  key: fs.readFileSync(path.join(certDir, 'aspnetcore-dev.key')),
  cert: fs.readFileSync(path.join(certDir, 'aspnetcore-dev.crt'))
};
