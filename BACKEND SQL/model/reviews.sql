CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
