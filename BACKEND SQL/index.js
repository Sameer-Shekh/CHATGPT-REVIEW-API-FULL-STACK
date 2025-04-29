require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const { rateLimit } = require('express-rate-limit');

const reviewRouter = require('./routes/reviewRoutes');

const app = express();
const port = process.env.PORT || 3000;

// 🔒 Enable response compression (gzip) for faster performance
app.use(compression());

// 🌐 Enable CORS
app.use(cors());

// 📦 Parse incoming requests (JSON & URL-encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Optional: you can remove this if already using express.json()

// 🛡️ Apply rate limiting to avoid abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per windowMs per IP
  standardHeaders: true, 
  legacyHeaders: false,
  message: {
    status: 429,
    message: 'Too many requests. Please try again after some time.'
  }
});

// 🛣️ Use limiter and routes
app.use('/api/reviews', limiter, reviewRouter);

// 🚀 Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
