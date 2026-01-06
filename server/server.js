const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const contactRoutes = require('./routes/contact');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
