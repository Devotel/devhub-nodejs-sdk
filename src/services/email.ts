import { BaseService } from './base';
import { EmailMessage, ApiResponse } from '../types';

export class EmailService extends BaseService {
  async send(message: EmailMessage): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/email/send',
      data: message
    });
  }
}