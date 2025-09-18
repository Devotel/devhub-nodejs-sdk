import { BaseService } from '../src/services/base';
import { mockAxios } from './setup';

class TestService extends BaseService {
  async testRequest() {
    return this.request({
      method: 'GET',
      url: '/test'
    });
  }
}

describe('BaseService', () => {
  let testService: TestService;

  beforeEach(() => {
    testService = new TestService({ apiKey: 'test-api-key' });
  });

  it('should make successful request', async () => {
    const mockResponse = { data: 'test' };
    mockAxios.onGet('/test').reply(200, mockResponse);

    const result = await testService.testRequest();

    expect(result.success).toBe(true);
    expect(result.data).toEqual(mockResponse);
  });

  it('should handle request error', async () => {
    mockAxios.onGet('/test').reply(400, { message: 'Bad request' });

    const result = await testService.testRequest();

    expect(result.success).toBe(false);
    expect(result.error).toBe('Bad request');
  });

  it('should handle network error', async () => {
    mockAxios.onGet('/test').networkError();

    const result = await testService.testRequest();

    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });

  it('should set correct headers', () => {
    expect(testService['client'].defaults.headers['x-api-key']).toBe('test-api-key');
    expect(testService['client'].defaults.headers['Content-Type']).toBe('application/json');
  });

  it('should set correct base URL', () => {
    expect(testService['client'].defaults.baseURL).toBe('https://global-api-development.devotel.io/api/v1');
  });
});