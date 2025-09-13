export interface DevHubConfig {
  apiKey: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// SMS Types
export interface SmsMessage {
  to: string;
  message: string;
  from?: string;
  user_id?: string;
}

export interface BuyNumberRequest {
  country_code: string;
  area_code?: string;
  user_id?: string;
  tenant_id?: string;
}

// Email Types
export interface EmailMessage {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  user_id?: string;
  tenant_id?: string;
}

// WhatsApp Types
export interface WhatsAppTemplate {
  to: string;
  template: {
    name: string;
    language: {
      code: string;
    };
    components?: any[];
  };
  user_id?: string;
}

export interface WhatsAppNormalMessage {
  to: string;
  type: 'text' | 'image' | 'document';
  text?: {
    body: string;
  };
  image?: {
    link: string;
  };
  document?: {
    link: string;
    filename: string;
  };
  user_id?: string;
}

// Contact Types
export interface Contact {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  customFields?: Record<string, any>;
  tenant_id?: string;
  user_id?: string;
}

export interface CustomField {
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean';
  required?: boolean;
  tenant_id?: string;
  user_id?: string;
}

// Unified Message Types
export enum ChannelType {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  WHATSAPP_TEMPLATE = 'WHATSAPP_TEMPLATE',
  WHATSAPP_NORMAL = 'WHATSAPP_NORMAL',
  RCS = 'RCS'
}

// RCS Types
export interface RcsMessage {
  to: string;
  content: any;
  user_id?: string;
}

export interface UnifiedMessage {
  channel: ChannelType;
  sms?: SmsMessage;
  email?: EmailMessage;
  whatsappTemplate?: WhatsAppTemplate;
  whatsappNormal?: WhatsAppNormalMessage;
  rcs?: RcsMessage;
}