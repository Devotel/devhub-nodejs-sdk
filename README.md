# DevHub Node.js SDK 📡

[![npm version](https://badge.fury.io/js/@devotel%2Fdevhub.svg)](https://badge.fury.io/js/@devotel%2Fdevhub)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ESM](https://img.shields.io/badge/ESM-Ready-brightgreen.svg)](https://nodejs.org/api/esm.html)
[![CommonJS](https://img.shields.io/badge/CommonJS-Ready-brightgreen.svg)](https://nodejs.org/api/modules.html)

Official Node.js SDK for the DevHub Communication API.

## 📦 Installation

```bash
npm i @devotel/devhub
```

## 🔧 Module Compatibility

This SDK supports both **ESM** (ES Modules) and **CommonJS** module systems:

### ESM (ES Modules)

```javascript
// Default import (recommended)
import DevHubSDK from "@devotel/devhub";

// Named import
import { DevHubSDK } from "@devotel/devhub";

const devhub = new DevHubSDK({
  apiKey: "<your-api-key>",
});
```

### CommonJS

```javascript
// Default import (recommended)
const DevHubSDK = require("@devotel/devhub").default;

// Named import
const { DevHubSDK } = require("@devotel/devhub");

const devhub = new DevHubSDK({
  apiKey: "<your-api-key>",
});
```

## 🚀 Quick Start

```javascript
import DevHubSDK from "@devotel/devhub";

const devhub = new DevHubSDK({
  apiKey: "your-api-key",
});

// Send SMS
await devhub.sms.send({
  recipient: "+1234567890",
  message: "Hello from DevHub!",
  sender: "<sender>",
});

// Send Email
await devhub.email.send({
  recipient: "user@example.com",
  subject: "Hello",
  body: "<h1>Hello from DevHub!</h1>",
  sender: "sender@example.com",
});

// Send WhatsApp message
await devhub.whatsapp.sendNormalMessage({
  account_id: "your-account-id",
  to: "+1234567890",
  type: "text",
  text: { body: "Hello from DevHub!" },
});
```

## 📚 API Reference

### SMS Service

```javascript
// Send SMS
await devhub.sms.send({
  recipient: "+1234567890",
  message: "Your message",
  sender: "optional-sender-id",
});

// Get available senders
await devhub.sms.getSenders();

// Buy a number
await devhub.sms.buyNumber({
  country_code: "US",
  area_code: "555",
});

// Get available numbers
await devhub.sms.getNumbers();
```

### Email Service

```javascript
// Send email
await devhub.email.send({
  recipient: "recipient@example.com",
  subject: "Subject",
  body: "<p>HTML content</p>",
  sender: "sender@example.com",
});
```

### WhatsApp Service

```javascript
// Get WhatsApp accounts
await devhub.whatsapp.getAccounts();

// Send template message
await devhub.whatsapp.sendTemplateMessage("account-id", {
  to: "+1234567890",
  template: {
    name: "template-name",
    language: { code: "en" },
  },
});

// Send normal message
await devhub.whatsapp.sendNormalMessage({
  account_id: "your-account-id",
  to: "+1234567890",
  type: "text",
  text: { body: "Hello!" },
});

// Get templates
await devhub.whatsapp.getTemplates();
```

### Contacts Service

```javascript
// Get contacts
await devhub.contacts.getContacts();

// Create contact
await devhub.contacts.createContact({
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "+1234567890",
  email: "john@example.com",
});

// Update contact
await devhub.contacts.updateContact("contact-id", {
  firstName: "Jane",
});

// Create custom field
await devhub.contacts.createCustomField({
  label: "Company",
  component: "Input",
  required: false,
});
```

### RCS Service

```javascript
// Get RCS accounts
await devhub.rcs.getAccounts();

// Send RCS message
await devhub.rcs.send({
  account_id: "your-account-id",
  number: "+1234567890",
  contentMessage: {
    text: "Hello from RCS!",
  },
});

// Create RCS template
await devhub.rcs.createTemplate({
  name: "greeting",
  content: "Hello {{name}}!",
});
```

### Contact Groups Service

```javascript
// Get contact groups
await devhub.contactGroups.getContactGroups();

// Create contact group
await devhub.contactGroups.createContactGroup({
  name: "VIP Customers",
  description: "High value customers",
});

// Update contact group
await devhub.contactGroups.updateContactGroup("group-id", {
  name: "Premium Customers",
});
```

### Unified Messages Service

```javascript
// Send message via any channel
await devhub.messages.send({
  channel: "SMS",
  sms: {
    sender: "DevHub",
    recipient: "+1234567890",
    message: "Hello!",
  },
});
```

## ⚠️ Error Handling

All methods return a response object with the following structure:

```javascript
{
  success: boolean,
  data?: any,
  error?: string
}
```

Example:

```javascript
const result = await devhub.sms.send({
  recipient: "+1234567890",
  message: "Hello!",
});

if (result.success) {
  console.log("Message sent:", result.data);
} else {
  console.error("Error:", result.error);
}
```

## 🔷 TypeScript Support

The SDK is written in TypeScript and provides full type definitions. Available types:

### Core Types

```typescript
import { DevHubConfig, ApiResponse, ChannelType } from "@devotel/devhub";
```

### SMS Types

```typescript
import { SmsMessage, BuyNumberRequest } from "@devotel/devhub";

// Usage
const smsData: SmsMessage = {
  recipient: "+1234567890",
  message: "Hello!",
  sender: "DevHub",
};
```

### Email Types

```typescript
import { EmailMessage } from "@devotel/devhub";

// Usage
const emailData: EmailMessage = {
  recipient: "user@example.com",
  subject: "Hello",
  body: "<h1>Hello!</h1>",
  sender: "sender@example.com",
};
```

### WhatsApp Types

```typescript
import { WhatsAppTemplate, WhatsAppNormalMessage } from "@devotel/devhub";

// Template message
const templateData: WhatsAppTemplate = {
  to: "+1234567890",
  template: {
    name: "hello_world",
    language: { code: "en" },
  },
};

// Normal message
const normalData: WhatsAppNormalMessage = {
  account_id: "your-account-id",
  to: "+1234567890",
  type: "text",
  text: { body: "Hello!" },
};
```

### Contact Types

```typescript
import { Contact, CustomField } from "@devotel/devhub";

// Contact
const contactData: Contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phoneNumber: "+1234567890",
};

// Custom field
const fieldData: CustomField = {
  label: "Company",
  component: "Input",
  required: false,
};
```

### RCS Types

```typescript
import { RcsMessage } from "@devotel/devhub";

// Usage
const rcsData: RcsMessage = {
  account_id: "your-account-id",
  number: "+1234567890",
  contentMessage: {
    text: "Hello from RCS!",
  },
};
```

### Unified Messages

```typescript
import { UnifiedMessage } from "@devotel/devhub";

// Usage
const unifiedData: UnifiedMessage = {
  channel: "SMS",
  sms: {
    sender: "DevHub",
    recipient: "+1234567890",
    message: "Hello!",
  },
};
```

## 📄 License

MIT
