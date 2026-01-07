# EmailJS Setup Guide for ARS Financial Enterprises

This guide will help you set up EmailJS for sending inquiry notifications.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Yahoo Mail** (for anil.choudhary6@yahoo.co.in)
   - **Gmail** (for canil8931@gmail.com)
   - Or use both as separate services
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

### Template: Inquiry Notification (to Business Owner)

1. Go to **Email Templates** → **Create New Template**
2. **Template Name:** Inquiry Notification
3. **Template Content:**

```
Subject: New Inquiry from {{customer_name}}

From: {{from_name}}
To: {{to_email}}
CC: {{cc_email}}

---

NEW INQUIRY RECEIVED

Customer Details:
------------------
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Service Requested:
------------------
{{service_requested}}

Preferred Contact Time:
-----------------------
{{preferred_time}}

Message:
--------
{{message}}

---

Received on: {{received_date}}

This email was automatically generated from the ARS Financial Enterprises website.
```

4. Click **Save** and copy the **Template ID** (e.g., `template_xyz456`)

EmailJS can handle customer auto-replies on the EmailJS side (for example, via your EmailJS template/service setup) so the website backend does not need a separate auto-reply template.

## Step 4: Get Your API Keys

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abcdefghijk`)
3. Go to **Account** → **API Keys**
4. Generate or copy your **Private Key** (keep this secure!)

## Step 5: Update .env File

Copy `server/.env.example` to `server/.env` and fill in your EmailJS credentials:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/ars-financial

# EmailJS Configuration
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_xyz456
EMAILJS_PUBLIC_KEY=user_abcdefghijk
EMAILJS_PRIVATE_KEY=your_private_key_here

# Email Configuration
TO_EMAIL=anil.choudhary6@yahoo.co.in
CC_EMAIL=canil8931@gmail.com
FROM_NAME=ARS Financial Enterprises

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Step 6: Install Dependencies

```powershell
cd server
npm install
```

This will install `@emailjs/nodejs` package.

## Step 7: Test the Setup

1. Start the server:
```powershell
cd server
npm run dev
```

2. Start the frontend:
```powershell
cd client
npm run dev
```

3. Open `http://localhost:3000`
4. Fill out the contact form and submit
5. Check:
   - Your inbox (anil.choudhary6@yahoo.co.in) for the inquiry notification

## EmailJS Features

✅ **Inquiry Notifications:**
- Business owner receives inquiry notification

✅ **Free Tier Limits:**
- 200 emails per month (free)
- Upgrade for more emails if needed

✅ **Benefits:**
- No SMTP configuration needed
- No app passwords required
- Works with any email provider
- Easy template management
- Real-time dashboard
- Delivery tracking

## Troubleshooting

### Emails Not Sending?

1. **Check EmailJS Dashboard:**
   - Go to History tab
   - Look for failed requests
   - Check error messages

2. **Verify Service Connection:**
   - Email Services → Test Connection
   - Make sure service is active

3. **Check Template IDs:**
   - Ensure template IDs in `.env` match your EmailJS templates
   - Templates should be published/active

4. **API Keys:**
   - Verify public and private keys are correct
   - No extra spaces or quotes

5. **Monthly Limit:**
   - Check if you've exceeded 200 emails/month
   - Upgrade plan if needed

### Testing Templates

Use EmailJS dashboard to send test emails:
1. Go to Email Templates
2. Click on your template
3. Click "Test It"
4. Fill in sample data
5. Send test email

## Security Notes

- ✅ Private key is stored in `.env` (server-side only)
- ✅ Public key can be safely exposed in frontend
- ✅ Never commit `.env` file to version control
- ✅ Use environment variables in production

## Support

EmailJS Documentation: https://www.emailjs.com/docs/

For ARS Financial Enterprises support:
- Phone: +91 9818774800, +91 9599402692
- Email: anil.choudhary6@yahoo.co.in

---

**Setup Complete!** Your website now sends professional inquiry notifications and auto-replies using EmailJS.
