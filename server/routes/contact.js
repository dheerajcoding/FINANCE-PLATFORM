const express = require('express');
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');
const { sendInquiryEmail, sendAutoReplyEmail } = require('../utils/emailService');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 10, max: 15 })
    .withMessage('Please provide a valid phone number'),
  
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Please select a service'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
  
  body('preferredContactTime')
    .optional()
    .isIn(['morning', 'afternoon', 'evening', ''])
    .withMessage('Invalid preferred contact time'),
];

// POST /api/contact - Submit inquiry
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array().map(err => err.msg)
      });
    }

    const { fullName, email, phone, service, message, preferredContactTime } = req.body;

    // Create new inquiry
    const inquiry = new Inquiry({
      fullName,
      email,
      phone,
      service,
      message,
      preferredContactTime: preferredContactTime || '',
    });

    // Save to database
    await inquiry.save();
    console.log('✅ Inquiry saved to database:', inquiry._id);

    // Send emails (inquiry notification and auto-reply)
    try {
      // Send inquiry email to business owner
      await sendInquiryEmail(inquiry.toObject());
      console.log('✅ Inquiry email notification sent');
      
      // Send auto-reply to customer
      await sendAutoReplyEmail(inquiry.toObject());
      console.log('✅ Auto-reply email sent to customer');
    } catch (emailError) {
      console.error('⚠️ Email sending failed but inquiry was saved:', emailError);
      // Don't fail the request if email fails - inquiry is already saved
    }

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiryId: inquiry._id,
    });

  } catch (error) {
    console.error('❌ Error processing inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

// GET /api/contact - Get all inquiries (for future admin panel if needed)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    console.error('❌ Error fetching inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiries',
    });
  }
});

module.exports = router;
