import { BaseService } from './base';
import { Contact, CustomField, ApiResponse } from '../types';

export class ContactsService extends BaseService {
  // Custom Fields
  async getCustomFields(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/contacts/custom-fields',
      params
    });
  }

  async createCustomField(field: CustomField): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/contacts/custom-fields',
      data: field
    });
  }

  async updateCustomField(id: string, field: Partial<CustomField>): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/contacts/custom-fields/${id}`,
      data: field
    });
  }

  async deleteCustomField(ids: string[], tenantId: string, approve?: string): Promise<ApiResponse> {
    return this.request({
      method: 'DELETE',
      url: '/user-api/contacts/custom-fields',
      params: { approve },
      data: { ids, tenant_id: tenantId }
    });
  }

  // Contacts
  async getContacts(params?: Record<string, any>): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/user-api/contacts',
      params
    });
  }

  async createContact(contact: Contact): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/contacts',
      data: contact
    });
  }

  async updateContact(id: string, contact: Partial<Contact>): Promise<ApiResponse> {
    return this.request({
      method: 'PUT',
      url: `/user-api/contacts/${id}`,
      data: contact
    });
  }

  async deleteContacts(contactIds: string[], tenantId: string, approve?: string): Promise<ApiResponse> {
    return this.request({
      method: 'DELETE',
      url: '/user-api/contacts',
      params: { approve },
      data: { contact_ids: contactIds, tenant_id: tenantId }
    });
  }

  async assignToGroup(contactIds: string[], groupId: string, tenantId: string): Promise<ApiResponse> {
    return this.request({
      method: 'PATCH',
      url: '/user-api/contacts/assign-to-group',
      data: { contact_ids: contactIds, group_id: groupId, tenant_id: tenantId }
    });
  }

  async unassignFromGroup(contactIds: string[], groupId: string, tenantId: string): Promise<ApiResponse> {
    return this.request({
      method: 'PATCH',
      url: '/user-api/contacts/unassign-from-group',
      data: { contact_ids: contactIds, group_id: groupId, tenant_id: tenantId }
    });
  }

  async importFromCsv(csvData: any, approve?: string): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/user-api/contacts/csv',
      params: { approve },
      data: csvData
    });
  }
}