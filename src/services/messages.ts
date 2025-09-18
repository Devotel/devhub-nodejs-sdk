import { BaseService } from './base.js';
import { UnifiedMessage, ApiResponse } from '../types/index.js';

export class MessagesService extends BaseService {
  async send(message: UnifiedMessage): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/messages/send',
      data: message
    });
  }
}