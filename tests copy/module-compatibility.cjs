// CommonJS Test
const DevHubSDK = require('../dist/cjs/index.js').default;
const { DevHubSDK: NamedDevHubSDK } = require('../dist/cjs/index.js');

console.log('✅ CommonJS imports successful');

// Test CommonJS instantiation
const cjsSdk1 = new DevHubSDK({ apiKey: 'test' });
const cjsSdk2 = new NamedDevHubSDK({ apiKey: 'test' });

if (cjsSdk1.sms && cjsSdk2.sms) {
  console.log('✅ CommonJS SDK instantiation successful');
} else {
  console.error('❌ CommonJS SDK instantiation failed');
  process.exit(1);
}