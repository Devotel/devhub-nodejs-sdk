import { BaseService } from './base';
import { UnifiedMessage, ApiResponse } from '../types';

export class MessagesService extends BaseService {
  async send(message: UnifiedMessage): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/messages/send',
      data: message
    });
  }
}