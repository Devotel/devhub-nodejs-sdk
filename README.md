# DevHub Node.js SDK

Official Node.js SDK for the DevHub Communication API.

## Installation

```bash
npm install @devotel/devhub
```

## Quick Start

```javascript
import DevHubSDK from "@devotel/devhub";

const devhub = new DevHubSDK({
  apiKey: "your-api-key",
});

// Send SMS
await devhub.sms.send({
  to: "+1234567890",
  message: "Hello from DevHub!",
});

// Send Email
await devhub.email.send({
  to: "user@example.com",
  subject: "Hello",
  html: "<h1>Hello from DevHub!</h1>",
});

// Send WhatsApp message
await devhub.whatsapp.sendNormalMessage({
  to: "+1234567890",
  type: "text",
  text: { body: "Hello from DevHub!" },
});
```

## API Reference

### SMS Service

```javascript
// Send SMS
await devhub.sms.send({
  to: "+1234567890",
  message: "Your message",
  from: "optional-sender-id",
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
  to: "recipient@example.com",
  subject: "Subject",
  html: "<p>HTML content</p>",
  text: "Plain text content",
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
  name: "Company",
  type: "text",
  required: false,
});
```

### RCS Service

```javascript
// Get RCS accounts
await devhub.rcs.getAccounts();

// Send RCS message
await devhub.rcs.send({
  to: "+1234567890",
  content: { text: "Hello from RCS!" },
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
    to: "+1234567890",
    message: "Hello!",
  },
});
```

## Error Handling

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
  to: "+1234567890",
  message: "Hello!",
});

if (result.success) {
  console.log("Message sent:", result.data);
} else {
  console.error("Error:", result.error);
}
```

## License

MIT
