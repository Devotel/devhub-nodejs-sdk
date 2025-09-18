import { MessagesService } from '../src/services/messages';
import { ChannelType } from '../src/types';
import { mockAxios } from './setup';

describe('MessagesService', () => {
  let messagesService: MessagesService;

  beforeEach(() => {
    messagesService = new MessagesService({ apiKey: 'test-api-key' });
  });

  describe('send', () => {
    it('should send SMS via unified messages successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/messages/send').reply(200, mockResponse);

      const result = await messagesService.send({
        channel: ChannelType.SMS,
        sms: {
          sender: 'DevHub',
          recipient: '+1234567890',
          message: 'Hello!'
        }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });

    it('should send email via unified messages successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/messages/send').reply(200, mockResponse);

      const result = await messagesService.send({
        channel: ChannelType.EMAIL,
        email: {
          sender: 'sender@example.com',
          recipient: 'test@example.com',
          subject: 'Hello',
          body: '<h1>Hello!</h1>'
        }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });

    it('should send WhatsApp template via unified messages successfully', async () => {
      const mockResponse = { success: true, messageId: '123' };
      mockAxios.onPost('/user-api/messages/send').reply(200, mockResponse);

      const result = await messagesService.send({
        channel: ChannelType.WHATSAPP_TEMPLATE,
        whatsappTemplate: {
          to: '+1234567890',
          template: {
            name: 'hello_world',
            language: { code: 'en' }
          }
        }
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });

    it('should handle unified message send error', async () => {
      mockAxios.onPost('/user-api/messages/send').reply(400, { message: 'Invalid channel' });

      const result = await messagesService.send({
        channel: ChannelType.SMS,
        sms: {
          sender: 'DevHub',
          recipient: 'invalid',
          message: 'Hello!'
        }
      });

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });
});