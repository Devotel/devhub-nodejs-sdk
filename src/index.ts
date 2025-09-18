import { DevHubConfig } from './types/index.js';
import { SmsService } from './services/sms.js';
import { EmailService } from './services/email.js';
import { WhatsAppService } from './services/whatsapp.js';
import { RcsService } from './services/rcs.js';
import { ContactsService } from './services/contacts.js';
import { ContactGroupsService } from './services/contact-groups.js';
import { MessagesService } from './services/messages.js';

class DevHubSDK {
  public sms: SmsService;
  public email: EmailService;
  public whatsapp: WhatsAppService;
  public rcs: RcsService;
  public contacts: ContactsService;
  public contactGroups: ContactGroupsService;
  public messages: MessagesService;

  constructor(config: DevHubConfig) {
    this.sms = new SmsService(config);
    this.email = new EmailService(config);
    this.whatsapp = new WhatsAppService(config);
    this.rcs = new RcsService(config);
    this.contacts = new ContactsService(config);
    this.contactGroups = new ContactGroupsService(config);
    this.messages = new MessagesService(config);
  }
}

export * from './types/index.js';
export * from './services/sms.js';
export * from './services/email.js';
export * from './services/whatsapp.js';
export * from './services/rcs.js';
export * from './services/contacts.js';
export * from './services/contact-groups.js';
export * from './services/messages.js';

export { DevHubSDK };
export default DevHubSDK;