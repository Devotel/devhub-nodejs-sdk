import { ContactsService } from '../src/services/contacts';
import { mockAxios } from './setup';

describe('ContactsService', () => {
  let contactsService: ContactsService;

  beforeEach(() => {
    contactsService = new ContactsService({ apiKey: 'test-api-key' });
  });

  describe('getContacts', () => {
    it('should get contacts successfully', async () => {
      const mockResponse = { contacts: [{ id: '1', firstName: 'John' }] };
      mockAxios.onGet('/user-api/contacts').reply(200, mockResponse);

      const result = await contactsService.getContacts();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createContact', () => {
    it('should create contact successfully', async () => {
      const mockResponse = { success: true, contactId: '123' };
      mockAxios.onPost('/user-api/contacts').reply(200, mockResponse);

      const result = await contactsService.createContact({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+1234567890',
        email: 'john@example.com'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('updateContact', () => {
    it('should update contact successfully', async () => {
      const mockResponse = { success: true };
      mockAxios.onPut('/user-api/contacts/123').reply(200, mockResponse);

      const result = await contactsService.updateContact('123', {
        firstName: 'Jane'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('deleteContacts', () => {
    it('should delete contacts successfully', async () => {
      const mockResponse = { success: true };
      mockAxios.onDelete('/user-api/contacts').reply(200, mockResponse);

      const result = await contactsService.deleteContacts(['123'], 'tenant-id', 'approve');

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createCustomField', () => {
    it('should create custom field successfully', async () => {
      const mockResponse = { success: true, fieldId: '123' };
      mockAxios.onPost('/user-api/contacts/custom-fields').reply(200, mockResponse);

      const result = await contactsService.createCustomField({
        label: 'Company',
        component: 'Input',
        required: false
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('assignToGroup', () => {
    it('should assign contacts to group successfully', async () => {
      const mockResponse = { success: true };
      mockAxios.onPatch('/user-api/contacts/assign-to-group').reply(200, mockResponse);

      const result = await contactsService.assignToGroup(['123'], 'group-id', 'tenant-id');

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });
});