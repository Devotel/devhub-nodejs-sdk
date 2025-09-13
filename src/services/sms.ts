import { BaseService } from './base';
import { SmsMessage, BuyNumberRequest, ApiResponse } from '../types';

export class SmsService extends BaseService {
  async send(message: SmsMessage): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/sms/quick-send',
      data: message
    });
  }

  async getSenders(): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/me/senders'
    });
  }

  async buyNumber(request: BuyNumberRequest): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/numbers/buy',
      data: request
    });
  }

  async getNumbers(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/numbers',
      params
    });
  }
}