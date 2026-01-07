const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const contactRoutes = require('./routes/contact');

// Load environment variables
// Prefer `server/.env` (this folder) for local/dev. In production, hosting env vars take precedence.
const serverDotenvPath = path.join(__dirname, '.env');
if (fs.existsSync(serverDotenvPath)) {
  dotenv.config({ path: serverDotenvPath });
} else {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Log EmailJS configuration status (never log secret values)
const requiredEmailJsVars = [
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_PRIVATE_KEY',
];
const missingEmailJsVars = requiredEmailJsVars.filter((key) => {
  const value = process.env[key];
  return !value || String(value).trim().length === 0;
});
if (missingEmailJsVars.length > 0) {
  console.warn(
    `⚠️  EmailJS env missing: ${missingEmailJsVars.join(', ')}. Email sending will fail until these are set.`
  );
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Serve built client (Vite) when available (typical production deploy)
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
const clientIndexHtml = path.join(clientDistPath, 'index.html');

if (fs.existsSync(clientDistPath) && fs.existsSync(clientIndexHtml)) {
  app.use(express.static(clientDistPath));

  // SPA fallback (but never for API routes)
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(clientIndexHtml);
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong on the server' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
