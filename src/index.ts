import { DevHubConfig } from './types';
import { SmsService } from './services/sms';
import { EmailService } from './services/email';
import { WhatsAppService } from './services/whatsapp';
import { RcsService } from './services/rcs';
import { ContactsService } from './services/contacts';
import { ContactGroupsService } from './services/contact-groups';
import { MessagesService } from './services/messages';

export class DevHubSDK {
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

export * from './types';
export * from './services/sms';
export * from './services/email';
export * from './services/whatsapp';
export * from './services/rcs';
export * from './services/contacts';
export * from './services/contact-groups';
export * from './services/messages';

export default DevHubSDK;