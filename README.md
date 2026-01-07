# ARS Financial Enterprises Website (Frontend Only)

A professional single-page business website for **ARS Financial Enterprises** built with React + Vite + Tailwind.

**Tagline:** Min Fees · High Quality · Quick Service

## 🌟 Features

- **Single-Page Design** – Smooth scrolling navigation between sections
- **Responsive Layout** – Mobile-first design that works on all devices
- **Contact Form** – Client-side validation + EmailJS send (no backend)
- **Professional UI** – Clean design with Tailwind CSS

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
├── dist/                # Production build output (generated)
├── package.json         # Single root project
├── vite.config.js       # Root Vite config (uses client/ as root)
├── tailwind.config.js
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

Create a `.env` at repo root (or set these variables in your hosting provider):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

See `.env.example` for the keys.

### 3) Run Dev Server

```powershell
npm run dev
```

Open: `http://localhost:3000`

## 📦 Build for Production

```powershell
npm run build
```

Build output goes to `dist/` at the repo root.

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

## 👥 Support

- **Proprietor:** Anil Kumar Choudhary
- **Phone:** +91 9818774800, +91 9599402692
- **Email:** anil.choudhary6@yahoo.co.in, canil8931@gmail.com
