import { BaseService } from './base.js';
import { WhatsAppTemplate, WhatsAppNormalMessage, ApiResponse } from '../types/index.js';

export class WhatsAppService extends BaseService {
  async getAccounts(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/whatsapp/accounts',
      params
    });
  }

  async createTemplate(accountId: string, template: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/whatsapp/templates',
      params: { account_id: accountId },
      data: template
    });
  }

  async getTemplates(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/whatsapp/templates',
      params
    });
  }

  async getTemplateByName(name: string): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: `/user-api/whatsapp/templates/${name}`
    });
  }

  async uploadFile(file: File | Buffer, filename?: string): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('file', file, filename);

    return this.request({
      method: 'POST',
      url: '/user-api/whatsapp/upload',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  async sendTemplateMessage(accountId: string, message: WhatsAppTemplate): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/whatsapp/send-message-by-template',
      params: { account_id: accountId },
      data: message
    });
  }

  async sendNormalMessage(message: WhatsAppNormalMessage): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/whatsapp/send-normal-message',
      data: message
    });
  }
}