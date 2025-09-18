import { RcsService } from '../src/services/rcs';
import { mockAxios } from './setup';

describe('RcsService', () => {
  let rcsService: RcsService;

  beforeEach(() => {
    rcsService = new RcsService({ apiKey: 'test-api-key' });
  });

  describe('getAccounts', () => {
    it('should get RCS accounts successfully', async () => {
      const mockResponse = { accounts: [{ id: '1', name: 'RCS Account' }] };
      mockAxios.onGet('/user-api/rcs/accounts').reply(200, mockResponse);

      const result = await rcsService.getAccounts();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createAccount', () => {
    it('should create RCS account successfully', async () => {
      const mockResponse = { success: true, accountId: '123' };
      mockAxios.onPost('/user-api/rcs/accounts').reply(200, mockResponse);

      const result = await rcsService.createAccount({
        name: 'Test Account',
        brandId: 'brand-123'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('send', () => {
    it('should send RCS message successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/rcs/send').reply(200, mockResponse);

      const result = await rcsService.send({
        to: '+1234567890',
        content: { text: 'Hello from RCS!' }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createTemplate', () => {
    it('should create RCS template successfully', async () => {
      const mockResponse = { success: true, templateId: '123' };
      mockAxios.onPost('/user-api/rcs/templates').reply(200, mockResponse);

      const result = await rcsService.createTemplate({
        name: 'greeting',
        content: 'Hello {{name}}!'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('getTemplates', () => {
    it('should get RCS templates successfully', async () => {
      const mockResponse = { templates: [{ name: 'greeting' }] };
      mockAxios.onGet('/user-api/rcs/templates').reply(200, mockResponse);

      const result = await rcsService.getTemplates();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('getBrands', () => {
    it('should get RCS brands successfully', async () => {
      const mockResponse = { brands: [{ id: '1', name: 'Brand 1' }] };
      mockAxios.onGet('/user-api/rcs/brands').reply(200, mockResponse);

      const result = await rcsService.getBrands();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createBrand', () => {
    it('should create RCS brand successfully', async () => {
      const mockResponse = { success: true, brandId: '123' };
      mockAxios.onPost('/user-api/rcs/brands').reply(200, mockResponse);

      const result = await rcsService.createBrand({
        name: 'Test Brand',
        description: 'Test brand description'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });
});