import { ContactGroupsService } from '../src/services/contact-groups';
import { mockAxios } from './setup';

describe('ContactGroupsService', () => {
  let contactGroupsService: ContactGroupsService;

  beforeEach(() => {
    contactGroupsService = new ContactGroupsService({ apiKey: 'test-api-key' });
  });

  describe('getContactGroups', () => {
    it('should get contact groups successfully', async () => {
      const mockResponse = { groups: [{ id: '1', name: 'VIP' }] };
      mockAxios.onGet('/user-api/contacts-group').reply(200, mockResponse);

      const result = await contactGroupsService.getContactGroups();

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('createContactGroup', () => {
    it('should create contact group successfully', async () => {
      const mockResponse = { success: true, groupId: '123' };
      mockAxios.onPost('/user-api/contacts-group').reply(200, mockResponse);

      const result = await contactGroupsService.createContactGroup({
        name: 'VIP Customers',
        description: 'High value customers'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('updateContactGroup', () => {
    it('should update contact group successfully', async () => {
      const mockResponse = { success: true };
      mockAxios.onPut('/user-api/contacts-group/123').reply(200, mockResponse);

      const result = await contactGroupsService.updateContactGroup('123', {
        name: 'Premium Customers'
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });

  describe('deleteContactGroups', () => {
    it('should delete contact groups successfully', async () => {
      const mockResponse = { success: true };
      mockAxios.onDelete('/user-api/contacts-group').reply(200, mockResponse);

      const result = await contactGroupsService.deleteContactGroups(['123'], 'tenant-id', 'approve');

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockResponse);
    });
  });
});