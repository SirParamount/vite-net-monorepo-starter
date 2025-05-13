import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const certDir = path.resolve(__dirname, '../packages/config/certs');

fs.mkdirSync(certDir, { recursive: true });

console.log('📜 Generating HTTPS certificates for localhost...');

try {
  execSync(
    `mkcert -key-file ${certDir}/localhost-key.pem -cert-file ${certDir}/localhost-cert.pem localhost`,
    {
      stdio: 'inherit'
    }
  );
  console.log(`✅ Certificates created at: ${certDir}`);
} catch {
  console.error('❌ Failed to generate certificates. Please make sure mkcert is installed.');
  process.exit(1);
}
