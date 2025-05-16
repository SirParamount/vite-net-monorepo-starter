import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const certDir = path.resolve(__dirname, '../packages/config/certs');
fs.mkdirSync(certDir, { recursive: true });

console.log('📜 Exporting .NET dev-certs and converting to PEM for Vite...');

const pfxPath = path.join(certDir, 'aspnetcore-dev.pfx');
const keyPath = path.join(certDir, 'aspnetcore-dev.key');
const crtPath = path.join(certDir, 'aspnetcore-dev.crt');
const password = 'devcert';

try {
  // Generate a new .NET dev cert if not present
  execSync('dotnet dev-certs https --clean', { stdio: 'inherit' });
  execSync('dotnet dev-certs https --trust', { stdio: 'inherit' });

  // Export .NET dev cert as PFX
  execSync(`dotnet dev-certs https --export-path ${pfxPath} --password ${password}`, {
    stdio: 'inherit'
  });

  // Convert PFX to key and crt using OpenSSL
  execSync(
    `openssl pkcs12 -in ${pfxPath} -nocerts -out ${keyPath} -nodes -password pass:${password}`,
    {
      stdio: 'inherit'
    }
  );
  execSync(
    `openssl pkcs12 -in ${pfxPath} -clcerts -nokeys -out ${crtPath} -password pass:${password}`,
    {
      stdio: 'inherit'
    }
  );

  console.log(`✅ .NET dev cert generated, exported, and converted for Vite at: ${certDir}`);
  console.log('ℹ️  You can now use these in your vite.config.ts for HTTPS dev server.');
} catch {
  console.error(
    '❌ Failed to generate, export, or convert .NET dev cert. Make sure dotnet and openssl are installed.'
  );
  process.exit(1);
}
