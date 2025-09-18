import { WhatsAppService } from '../src/services/whatsapp';
import { mockAxios } from './setup';

describe('WhatsAppService', () => {
  let whatsappService: WhatsAppService;

  beforeEach(() => {
    whatsappService = new WhatsAppService({ apiKey: 'test-api-key' });
  });

  describe('getAccounts', () => {
    it('should get accounts successfully', async () => {
      const mockResponse = { accounts: [{ id: '1', name: 'Account 1' }] };
      mockAxios.onGet('/user-api/whatsapp/accounts').reply(200, mockResponse);

      const result = await whatsappService.getAccounts();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('sendTemplateMessage', () => {
    it('should send template message successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/whatsapp/send-message-by-template').reply(200, mockResponse);

      const result = await whatsappService.sendTemplateMessage('account-id', {
        to: '+1234567890',
        template: {
          name: 'hello_world',
          language: { code: 'en' }
        }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('sendNormalMessage', () => {
    it('should send normal message successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/whatsapp/send-normal-message').reply(200, mockResponse);

      const result = await whatsappService.sendNormalMessage({
        account_id: 'test-account',
        to: '+1234567890',
        type: 'text',
        text: { body: 'Hello World' }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('getTemplates', () => {
    it('should get templates successfully', async () => {
      const mockResponse = { templates: [{ name: 'hello_world' }] };
      mockAxios.onGet('/user-api/whatsapp/templates').reply(200, mockResponse);

      const result = await whatsappService.getTemplates();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createTemplate', () => {
    it('should create template successfully', async () => {
      const mockResponse = { success: true, templateId: '123' };
      mockAxios.onPost('/user-api/whatsapp/templates').reply(200, mockResponse);

      const result = await whatsappService.createTemplate('account-id', {
        name: 'test_template',
        category: 'MARKETING',
        language: 'en'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });
});