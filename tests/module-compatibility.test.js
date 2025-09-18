// ESM Test
import DevHubSDK from '../dist/esm/index.js';
import { DevHubSDK as NamedDevHubSDK } from '../dist/esm/index.js';

console.log('✅ ESM imports successful');

// Test ESM instantiation
const esmSdk1 = new DevHubSDK({ apiKey: 'test' });
const esmSdk2 = new NamedDevHubSDK({ apiKey: 'test' });

if (esmSdk1.sms && esmSdk2.sms) {
  console.log('✅ ESM SDK instantiation successful');
} else {
  console.error('❌ ESM SDK instantiation failed');
  process.exit(1);
}