const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const contactRoutes = require('./routes/contact');

// Load environment variables.
// This project keeps .env under /server for local dev, but many hosts set env vars
// or place .env at repo root. Load both locations when present.
const envCandidates = [
  path.join(__dirname, '.env'),
  path.join(__dirname, '..', '.env'),
];

for (const envPath of envCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

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
