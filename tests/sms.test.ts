import { SmsService } from '../src/services/sms';
import { mockAxios } from './setup';

describe('SmsService', () => {
  let smsService: SmsService;

  beforeEach(() => {
    smsService = new SmsService({ apiKey: 'test-api-key' });
  });

  describe('send', () => {
    it('should send SMS successfully', async () => {
      const mockResponse = { success: true, data: { id: '123' } };
      mockAxios.onPost('/user-api/sms/quick-send').reply(200, mockResponse);

      const result = await smsService.send({
        to: '+1234567890',
        message: 'Test message'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });

    it('should handle SMS send error', async () => {
      mockAxios.onPost('/user-api/sms/quick-send').reply(400, { message: 'Invalid number' });

      const result = await smsService.send({
        to: 'invalid',
        message: 'Test message'
      });

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('getSenders', () => {
    it('should get senders successfully', async () => {
      const mockResponse = { senders: ['sender1', 'sender2'] };
      mockAxios.onGet('/user-api/me/senders').reply(200, mockResponse);

      const result = await smsService.getSenders();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('buyNumber', () => {
    it('should buy number successfully', async () => {
      const mockResponse = { success: true, number: '+1234567890' };
      mockAxios.onPost('/user-api/numbers/buy').reply(200, mockResponse);

      const result = await smsService.buyNumber({
        country_code: 'US',
        area_code: '555'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('getNumbers', () => {
    it('should get numbers successfully', async () => {
      const mockResponse = { numbers: ['+1234567890'] };
      mockAxios.onGet('/user-api/numbers').reply(200, mockResponse);

      const result = await smsService.getNumbers();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });
});