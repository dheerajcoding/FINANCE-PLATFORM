const emailjs = require('@emailjs/nodejs');

// Send inquiry email to business owner
const sendInquiryEmail = async (inquiryData) => {
  try {
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
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
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
