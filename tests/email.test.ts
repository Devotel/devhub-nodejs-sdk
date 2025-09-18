import { EmailService } from '../src/services/email';
import { mockAxios } from './setup';

describe('EmailService', () => {
  let emailService: EmailService;

  beforeEach(() => {
    emailService = new EmailService({ apiKey: 'test-api-key' });
  });

  describe('send', () => {
    it('should send email successfully', async () => {
      const mockResponse = { success: true, data: { id: '123' } };
      mockAxios.onPost('/user-api/email/send').reply(200, mockResponse);

      const result = await emailService.send({
        to: 'test@example.com',
        subject: 'Test Subject',
        html: '<h1>Test</h1>',
        text: 'Test'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });

    it('should handle email send error', async () => {
      mockAxios.onPost('/user-api/email/send').reply(400, { message: 'Invalid email' });

      const result = await emailService.send({
        to: 'invalid-email',
        subject: 'Test Subject',
        html: '<h1>Test</h1>'
      });

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });
});