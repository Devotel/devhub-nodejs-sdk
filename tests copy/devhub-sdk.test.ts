import { DevHubSDK } from '../src';
import { mockAxios } from './setup';

describe('DevHubSDK', () => {
  let sdk: DevHubSDK;

  beforeEach(() => {
    sdk = new DevHubSDK({ apiKey: 'test-api-key' });
  });

  it('should initialize all services', () => {
    expect(sdk.sms).toBeDefined();
    expect(sdk.email).toBeDefined();
    expect(sdk.whatsapp).toBeDefined();
    expect(sdk.rcs).toBeDefined();
    expect(sdk.contacts).toBeDefined();
    expect(sdk.contactGroups).toBeDefined();
    expect(sdk.messages).toBeDefined();
  });
});