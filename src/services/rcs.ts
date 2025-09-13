import { BaseService } from './base';
import { ApiResponse } from '../types';

export class RcsService extends BaseService {
  // Accounts
  async createAccount(account: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/accounts',
      data: account
    });
  }

  async verifyAccount(verification: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/accounts/verify',
      data: verification
    });
  }

  async getAccounts(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/rcs/accounts',
      params
    });
  }

  async updateAccount(accountId: string, account: any): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/rcs/accounts/${accountId}`,
      data: account
    });
  }

  async getAccountDetails(accountId: string): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: `/user-api/rcs/accounts/${accountId}`
    });
  }

  // Messages
  async send(message: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/send',
      data: message
    });
  }

  async getMessages(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/rcs/messages',
      params
    });
  }

  // Templates
  async createTemplate(template: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/templates',
      data: template
    });
  }

  async getTemplates(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/rcs/templates',
      params
    });
  }

  async updateTemplate(templateId: string, template: any): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/rcs/templates/${templateId}`,
      data: template
    });
  }

  async deleteTemplates(ids: string[], tenantId: string, approve?: string): Promise<ApiResponse> {
    return this.request({
      method: 'DELETE',
      url: '/user-api/rcs/templates',
      params: { approve },
      data: { ids, tenant_id: tenantId }
    });
  }

  // Brands
  async getBrands(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/rcs/brands',
      params
    });
  }

  async createBrand(brand: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/brands',
      data: brand
    });
  }

  async updateBrand(brandId: string, brand: any): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/rcs/brands/${brandId}`,
      data: brand
    });
  }

  // Testers
  async addTester(tester: any): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/rcs/testers',
      data: tester
    });
  }

  async getTesters(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/rcs/testers',
      params
    });
  }
}