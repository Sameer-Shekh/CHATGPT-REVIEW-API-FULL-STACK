import React, { useState } from "react";
import FilterReviewInfo from "./API-INFO/FilterReviewInfo";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FilterReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noReviewsFound, setNoReviewsFound] = useState(false);

  const BASE_URL = "http://localhost:8000/api/reviews/search/rating";

  const fetchReviewsByRating = async () => {
    setLoading(true);
    setError(null);
    setNoReviewsFound(false);

    const ratingInNum = Number(rating);

    if (isNaN(ratingInNum) || ratingInNum < 1 || ratingInNum > 5) {
      setError("Please enter a valid rating between 1 and 5.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}?rat=${ratingInNum}`);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews. Please try again later.");
      }

      const data = await response.json();

      if (data.length === 0) {
        setNoReviewsFound(true);
        setReviews([]);
      } else {
        setReviews(data);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FilterReviewInfo />
      <div style={containerStyle}>
        <h2 style={headingStyle}>⭐ Filter Reviews by Rating</h2>

        {error && <p style={errorStyle}>{error}</p>}

        <div style={inputGroupStyle}>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter rating (1 - 5)"
            style={inputStyle}
            min="1"
            max="5"
          />
          <button
            onClick={fetchReviewsByRating}
            style={buttonStyle}
            disabled={loading || !rating}
          >
            {loading ? "Loading..." : "Filter"}
          </button>
        </div>

        {noReviewsFound && (
          <p style={noReviewStyle}>No reviews found for this rating.</p>
        )}

        <div style={cardContainerStyle}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Card
                key={review.id || review.user_id}
                sx={{
                  maxWidth: 250,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 12,
                  },
                }}
              >
                <CardContent sx={{ paddingBottom: "12px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#1976d2",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Review ID: {review.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                      height: "90px", // To give consistent height to the review content section
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {review.content}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 16px",
                    backgroundColor: "#f9f9f9",
                    borderTop: "1px solid #ddd",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      fontSize: "0.8rem",
                      backgroundColor: "#1976d2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Rating: {review.rating}
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      fontSize: "0.8rem",
                      color: "#1976d2",
                      "&:hover": {
                        color: "#1565c0",
                      },
                    }}
                  >
                    {review.created_at
                      ? new Date(review.created_at).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })
                      : "No Date"}
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            !loading && !noReviewsFound && (
              <p style={infoTextStyle}>No reviews available to display.</p>
            )
          )}
        </div>
      </div>
    </>
  );
};

// 💅 Styling
const containerStyle = {
  width: "90%",
  maxWidth: "1100px",
  margin: "40px auto",
  textAlign: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  marginBottom: "25px",
  color: "#222",
  fontWeight: "600",
  fontSize: "24px",
};

const errorStyle = {
  color: "#d9534f",
  fontWeight: "500",
  marginBottom: "12px",
};

const noReviewStyle = {
  color: "#999",
  fontStyle: "italic",
  fontSize: "15px",
};

const infoTextStyle = {
  color: "#666",
  marginTop: "10px",
};

const inputGroupStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const inputStyle = {
  padding: "10px",
  width: "200px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  transition: "border 0.3s ease",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  background: "#3c4d7b",
  color: "#fff",
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "background 0.3s ease",
};

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
  padding: "20px",
};

export default FilterReviewCard;
