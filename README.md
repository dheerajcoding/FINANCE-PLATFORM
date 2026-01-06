# ARS Financial Enterprises Website

A professional business website for **ARS Financial Enterprises** built with Express, React, and Node.js.

**Tagline:** Min Fees · High Quality · Quick Service

## 🌟 Features

- **Single-Page Design** - Smooth scrolling navigation between sections
- **Responsive Layout** - Mobile-first design that works on all devices
- **Contact Form** - Fully functional inquiry form with validation
- **Email Notifications** - Automatic email alerts for new inquiries
- **Professional UI** - Clean design with Tailwind CSS

## 📋 Services Offered

- GST Registration / GST Returns
- Income Tax Return (ITR)
- Accounting Services
- Firm Registration / Shop Act Registration
- Digital Signature Certificate (DSC)
- Import Export Code (IEC)
- Logo / Trademark / Copyright Registration
- ESIC / PF Registration & Consultancy
- Internal Auditing
- Loan Facilities & Other Professional Services

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **EmailJS** - Email service for notifications and auto-replies
- **Express Validator** - Server-side validation

## 📁 Project Structure

```
ARSFNC/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.cjs
│
├── server/                # Express backend
│   ├── routes/
│   │   └── contact.js    # API routes
│   ├── utils/
│   │   └── emailService.js
│   ├── server.js         # Entry point
│   ├── package.json
│   └── .env.example
│
├── package.json          # Root package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **EmailJS Account** - Free account at [EmailJS.com](https://www.emailjs.com/) for sending emails

### Step 1: Clone or Download

Clone this repository or download the project files to your local machine.

### Step 2: Install Dependencies

Install dependencies for both the root, client, and server:

```powershell
# Install root dependencies (for running both together)
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Go back to root
cd ..
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `server` folder:

```powershell
cd server
copy .env.example .env
```

Edit the `.env` file with your configuration:

```env
# EmailJS Configuration
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key

# Email Configuration
TO_EMAIL=anil.choudhary6@yahoo.co.in
CC_EMAIL=canil8931@gmail.com
FROM_NAME=ARS Financial Enterprises

# Server Configuration
PORT=5000
NODE_ENV=development
```

#### 📧 EmailJS Setup

**See the complete setup guide: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**

Quick steps:
1. Create free account at [EmailJS.com](https://www.emailjs.com/)
2. Add your email service (Yahoo/Gmail)
3. Create two email templates:
   - **Inquiry Notification** (sent to business owner)
   - **Auto-Reply** (sent to customer)
4. Copy Service ID, Template IDs, and API Keys
5. Add them to your `.env` file

**Benefits:**
- ✅ No SMTP configuration needed
- ✅ Automatic inquiry notifications
- ✅ Instant auto-reply to customers
- ✅ 200 free emails per month
- ✅ Easy template management

### Step 4: Run the Application

#### Development Mode (Both Frontend & Backend)

From the root directory:

```powershell
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend dev server on `http://localhost:3000`

#### Run Frontend and Backend Separately

**Backend only:**
```powershell
cd server
npm run dev
```

**Frontend only:**
1. Fill out all required fields in the contact form
2. Submit the form
3. Check:
   - ✅ Success message appears on the website
   - ✅ Business owner receives inquiry notification email
   - ✅ Customer receives auto-reply confirmation email
   - ✅ Data is saved in MongoDB (check using MongoDB Compass or Atlas)

Open your browser and navigate to:
```
http://localhost:3000
```

## 🧪 Testing the Contact Form

1. Fill out all required fields in the contact form
2. Submit the form
3. Check:
   - Success message appears on the website
   - Email is received at the configured `TO_EMAIL`
   - Data is saved in MongoDB (check using MongoDB Compass or Atlas)

## 📦 Building for Production

### Build the Frontend

```powershell
cd client
npm run build
```

This creates an optimized production build in `client/dist`.

### Serve Production Build

You can serve the production build using Express by adding static file serving:

```javascript
// In server/server.js, add after other middleware:
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```

Then run:
```powershell
cd server
npm start
```

## 🔒 Security Considerations

- Never commit `.env` file to version control
- Use strong passwords for MongoDB
- Use app-specific passwords for email
- Implement rate limiting for production (consider `express-rate-limit`)
- Add input sanitization for production use
- Consider adding CAPTCHA for spam prevention

## 📧 API Endpoints

### POST `/api/contact`
Submit a new inquiry

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "service": "GST Registration / GST Returns",
  "message": "I need help with GST registration",
  "preferredContactTime": "morning"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": "64abc123..."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Email is required", "Message is required"]
}
```

### GET `/api/contact`
Retrieve all inquiries (for future admin panel)

**Success Response:**
```json
{
  "success": true,
  "count": 10,
  "inquiries": [...]
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod --version`
- Check the `MONGO_URI` in `.env`
- For Atlas, check IP whitelist and database user credentials
### Email Not Sending
- Check EmailJS dashboard → History tab for errors
- Verify all EmailJS credentials in `.env` are correct
- Ensure email templates are published/active
- Check if you've exceeded 200 emails/month limit
- Test templates directly in EmailJS dashboard
- Try a different SMTP port (465 for SSL)

### Port Already in Use
- Change `PORT` in `server/.env`
- Change `port` in `client/vite.config.js`

### CORS Issues
- Ensure the backend CORS is properly configured
- Check that the proxy in `vite.config.js` matches your backend port

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a8a', // Navy blue
    dark: '#1e293b',
    light: '#3b82f6',
  },
  accent: {
    DEFAULT: '#dc2626', // Red
    dark: '#991b1b',
    light: '#ef4444',
  },
}
```

### Services
Edit the `services` array in `client/src/components/Services.jsx` and `client/src/components/Contact.jsx`.

### Contact Information
Update phone, email, and hours in:
- `client/src/components/Contact.jsx`
- `client/src/components/Footer.jsx`

## 📝 License

MIT License - feel free to use this project for your business.

## 👥 Support

For any questions or issues:
- **Proprietor:** Anil Kumar Choudhary
- **Phone:** +91 9818774800, +91 9599402692
- **Email:** anil.choudhary6@yahoo.co.in, canil8931@gmail.com

---

**Built with ❤️ for ARS Financial Enterprises**
