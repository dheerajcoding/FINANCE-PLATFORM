# ARS Financial Enterprises Website (Frontend Only)

A professional single-page business website for **ARS Financial Enterprises** built with React + Vite + Tailwind.

**Tagline:** Min Fees · High Quality · Quick Service

## 🌟 Features

- ✨ **Single-Page Design** – Smooth scrolling navigation between sections
- 📱 **Responsive Layout** – Mobile-first design that works on all devices
- 🎯 **Professional Services Dropdown** – Categorized services menu with hover effects
- 💫 **Animated Service Cards** – Beautiful hover effects and transitions
-  **Contact Form** – Client-side validation + EmailJS send (no backend)
- 🎨 **Professional UI** – Modern design with gradient backgrounds and glass morphism
- ⚡ **Optimized Performance** – Code splitting, minification, and caching
- 🚀 **Production Ready** – Configured for easy deployment on Hostinger

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **EmailJS (Browser)** – Sends inquiry emails directly from the frontend

## 📁 Project Structure

```
FINANCE-PLATFORM/
├── client/              # App source (index.html + src/)
│   ├── index.html
│   └── src/
│       ├── components/  # React components
│       │   ├── Header.jsx   (with services dropdown)
│       │   ├── Services.jsx (enhanced with animations)
│       │   └── ...
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css    (custom animations)
├── dist/                # Production build output (generated)
├── .htaccess            # Apache config for deployment
├── DEPLOYMENT.md        # Hostinger deployment guide
├── build.ps1            # Build script
├── package.json
├── vite.config.js       # Optimized for production
├── tailwind.config.js   # Extended with animations
├── postcss.config.cjs
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **EmailJS Account** – https://www.emailjs.com/

### 1) Install

```powershell
npm install
```

### 2) Configure EmailJS (Frontend)

Create a `.env` at repo root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed setup instructions.

### 3) Run Dev Server

```powershell
npm run dev
```

Open: `http://localhost:3000`

## 📦 Build for Production

### Option 1: Using Build Script (Recommended)

```powershell
.\build.ps1
```

### Option 2: Manual Build

```powershell
npm run build
```

Build output goes to `dist/` at the repo root.

## 🌐 Deployment to Hostinger

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

**Quick Steps:**
1. Run `.\build.ps1` or `npm run build`
2. Upload all files from `dist/` folder to your Hostinger `public_html` directory
3. Ensure `.htaccess` is uploaded for proper routing
4. Enable SSL certificate in Hostinger control panel

## 🎨 New UI Features

### Services Dropdown Menu
- Categorized services in a professional dropdown
- Smooth hover animations
- Mobile-responsive with collapsible menu
- Click-to-scroll functionality

### Enhanced Service Cards
- Gradient backgrounds with images
- Hover effects with scale and translation
- Animated borders and overlays
- Professional tag badges
- Gallery thumbnails with animations

### Performance Optimizations
- Code splitting for vendor bundles
- Minification with Terser
- GZIP compression via .htaccess
- Browser caching headers
- Optimized asset loading

## 📧 EmailJS Template Variables

The contact form sends these template params:

- `customer_name`
- `customer_email`
- `customer_phone`
- `service_requested`
- `preferred_time`
- `message`
- `received_date`
- `from_name`

## 🎯 Services Offered

### Capital Desk
- Loan Facilities & Professional Services

### Compliance Suite
- GST Registration / GST Returns
- ESIC / PF Registration & Consultancy

### Tax Strategy
- Income Tax Return (ITR)

### Finance Desk
- Accounting Services

### Business Setup
- Firm / Shop Act Registration
- MSME (Udyam Certificate)

### Brand & Trade
- Digital Signature Certificate (DSC)
- Import Export Code (IEC)
- Trademark / IP Registration

### Governance
- Internal Auditing

## 👥 Support

- **Proprietor:** Anil Kumar Choudhary
- **Phone:** +91 9818774800, +91 9599402692
- **Email:** anil.choudhary6@yahoo.co.in, canil8931@gmail.com

---

**Built with ❤️ for professional financial services**
