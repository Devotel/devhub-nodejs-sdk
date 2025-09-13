import { BaseService } from './base';
import { ApiResponse } from '../types';

export interface ContactGroup {
  name: string;
  description?: string;
  tenant_id?: string;
  user_id?: string;
}

export class ContactGroupsService extends BaseService {
  async getContactGroups(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/contacts-group',
      params
    });
  }

  async createContactGroup(group: ContactGroup): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/contacts-group',
      data: group
    });
  }

  async updateContactGroup(id: string, group: Partial<ContactGroup>): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/contacts-group/${id}`,
      data: group
    });
  }

  async deleteContactGroups(ids: string[], tenantId: string, approve?: string): Promise<ApiResponse> {
    return this.request({
      method: 'DELETE',
      url: '/user-api/contacts-group',
      params: { approve },
      data: { ids, tenant_id: tenantId }
    });
  }
}