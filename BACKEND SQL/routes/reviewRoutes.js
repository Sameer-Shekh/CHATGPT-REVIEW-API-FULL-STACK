const express = require('express');
const reviewRouter = express.Router();
const pool = require('../connections'); // Assuming connection.js exports a configured pool instance

// Get all reviews
reviewRouter.get('/', async (req, res) => {
  try {
    console.log("Connected to PostgreSQL");
    const result = await pool.query('SELECT * FROM reviews');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get a single review by ID
reviewRouter.get('/:id', async (req, res) => {
  try {
    const reviewId = req.params.id;
    const result = await pool.query('SELECT * FROM reviews WHERE id = $1', [reviewId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Create a new review
reviewRouter.post('/post-review', async (req, res) => {
  const { Review, Ratings } = req.body; // Destructure Review and Ratings from request body

  // Validate input
  if (!Review || typeof Ratings !== 'number' || Ratings < 1 || Ratings > 5) {
    return res.status(400).json({
      message: 'Invalid input. Review and Ratings are required, and Ratings must be between 1 and 5.',
    });
  }

  try {
    // Insert the review data into the database
    const result = await pool.query(
      `INSERT INTO reviews (content, rating, created_at) 
      VALUES ($1, $2, NOW()) RETURNING *`, 
      [Review, Ratings] // Pass only Review and Ratings
    );

    res.status(201).json(result.rows[0]); // Respond with the inserted review data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});



// Update a review
reviewRouter.patch('/update/:id', async (req, res) => {
  const reviewId = req.params.id;
  const { Review, Ratings } = req.body;

  try {
    const result = await pool.query(
      'UPDATE reviews SET content = $1, rating = $2 WHERE id = $3 RETURNING *',
      [Review, Ratings, reviewId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

// Delete a review
reviewRouter.delete('/delete/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const result = await pool.query('DELETE FROM reviews WHERE id = $1 RETURNING *', [reviewId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

// Sort reviews by rating (ascending)
reviewRouter.get('/sort/rating', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY rating ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Sort reviews by rating (descending)
reviewRouter.get('/sort/rating-desc', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY rating DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Search reviews by rating
reviewRouter.get('/search/rating', async (req, res) => {
  const rating = req.query.rat; 
  const ratingInNum = Number(rating);
  try {
    const result = await pool.query('SELECT * FROM reviews WHERE rating = $1', [ratingInNum]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Pagination
reviewRouter.get('/search/pagination', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const result = await pool.query('SELECT * FROM reviews LIMIT $1 OFFSET $2', [limit, skip]);
    const totalReviewsResult = await pool.query('SELECT COUNT(*) FROM reviews');
    const totalReviews = parseInt(totalReviewsResult.rows[0].count);
    const totalPages = Math.ceil(totalReviews / limit);

    res.json({
      reviews: result.rows,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch reviews');
  }
});

module.exports = reviewRouter;
