import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const certPath = path.resolve(__dirname, '../certs');

export const devHttps = {
  key: fs.readFileSync(path.join(certPath, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(certPath, 'localhost-cert.pem'))
};
