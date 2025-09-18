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
  recipient: string;
  message: string;
  sender?: string;
  user_id?: string;
  tenant_id?: string;
  scheduleDate?: string;
  hlrValidation?: boolean;
  isOptoutEnabled?: boolean;
  optId?: string;
  language?: string;
}

export interface BuyNumberRequest {
  country_code: string;
  area_code?: string;
  user_id?: string;
  tenant_id?: string;
}

// Email Types
export interface EmailMessage {
  recipient: string;
  subject: string;
  body: string;
  sender?: string;
  user_id?: string;
  tenant_id?: string;
  customId?: string;
  campaignId?: string;
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
  tenant_id?: string;
}

export interface WhatsAppNormalMessage {
  account_id: string;
  to: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'document';
  text?: {
    body: string;
  };
  image?: {
    caption?: string;
    link: string;
  };
  video?: {
    caption?: string;
    link: string;
  };
  audio?: {
    link: string;
  };
  document?: {
    link: string;
    filename: string;
  };
  user_id?: string;
  tenant_id?: string;
}

// Contact Types
export interface Contact {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  birthday?: string;
  language?: string;
  gender?: 'male' | 'female' | 'other';
  avatarUrl?: string;
  whatsappSubscribed?: boolean;
  emailSubscribed?: boolean;
  smsSubscribed?: boolean;
  mmsSubscribed?: boolean;
  rcsSubscribed?: boolean;
  status?: 'enabled' | 'disabled';
  contactGroups?: string[];
  customFields?: Record<string, any>;
  tags?: string[];
  tenant_id?: string;
  user_id?: string;
}

export interface CustomField {
  label: string;
  component: 'Input' | 'PhoneInput' | 'Select' | 'DatePicker' | 'TimePicker' | 'Switch';
  required?: boolean;
  min?: number;
  max?: number;
  options?: Array<{id: string; label: string; value: string}>;
  defaultOption?: string;
  type?: string;
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
  account_id: string;
  number: string;
  contentMessage: {
    text?: string;
    suggestions?: Array<{
      reply?: {
        text: string;
        postbackData: string;
      };
      action?: {
        text: string;
        postbackData: string;
        openUrlAction?: {
          url: string;
        };
        dialAction?: {
          phoneNumber: string;
        };
      };
    }>;
    contentInfo?: {
      fileUrl: string;
      forceRefresh?: boolean;
      thumbnailUrl?: string;
    };
    richCard?: any;
  };
  user_id?: string;
  tenant_id?: string;
}

export interface UnifiedMessage {
  channel: ChannelType;
  sms?: {
    sender: string;
    recipient: string;
    message: string;
    user_id?: string;
    tenant_id?: string;
  };
  email?: {
    sender: string;
    recipient: string;
    subject: string;
    body: string;
    user_id?: string;
    tenant_id?: string;
  };
  whatsappTemplate?: WhatsAppTemplate;
  whatsappNormal?: WhatsAppNormalMessage;
  rcs?: RcsMessage;
}