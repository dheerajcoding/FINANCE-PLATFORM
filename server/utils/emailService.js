const emailjs = require('@emailjs/nodejs');

const readEnv = (key) => {
  const value = process.env[key];
  if (value === undefined || value === null) return '';
  return String(value).trim();
};

const assertRequiredEnv = (keys) => {
  const missing = keys.filter((k) => readEnv(k).length === 0);
  if (missing.length > 0) {
    const error = new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
    error.code = 'MISSING_ENV';
    throw error;
  }
};

// Send inquiry email to business owner
const sendInquiryEmail = async (inquiryData) => {
  try {
    assertRequiredEnv([
      'EMAILJS_SERVICE_ID',
      'EMAILJS_TEMPLATE_ID',
      'EMAILJS_PUBLIC_KEY',
      'EMAILJS_PRIVATE_KEY',
    ]);

    const templateParams = {
      to_email: process.env.TO_EMAIL,
      cc_email: process.env.CC_EMAIL,
      from_name: process.env.FROM_NAME || 'ARS Financial Enterprises',
      customer_name: inquiryData.fullName,
      customer_email: inquiryData.email,
      customer_phone: inquiryData.phone,
      service_requested: inquiryData.service,
      message: inquiryData.message,
      preferred_time: inquiryData.preferredContactTime || 'Not specified',
      received_date: new Date(inquiryData.createdAt).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      }),
    };

    const response = await emailjs.send(
      readEnv('EMAILJS_SERVICE_ID'),
      readEnv('EMAILJS_TEMPLATE_ID'),
      templateParams,
      {
        publicKey: readEnv('EMAILJS_PUBLIC_KEY'),
        privateKey: readEnv('EMAILJS_PRIVATE_KEY'),
      }
    );

    console.log('✅ Inquiry email sent successfully:', response.status, response.text);
    return { success: true, status: response.status };
  } catch (error) {
    console.error('❌ Error sending inquiry email:', error);
    throw error;
  }
};

module.exports = { sendInquiryEmail };
