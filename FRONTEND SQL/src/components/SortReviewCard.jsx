import React, { useState } from "react";
import SortReviewInfo from "./API-INFO/SortReviewInfo";

const SortReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const BASE_URL = "http://localhost:8000/api/reviews/sort";

  const fetchSortedReviews = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      if (!response.ok) {
        throw new Error("Failed to fetch sorted reviews");
      }
      const data = await response.json();
      setReviews(data);
      setSortOption(endpoint);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SortReviewInfo />
      <div style={containerStyle}>
        <h2 style={headingStyle}>🌟 Sorted Reviews</h2>
        {error && <p style={errorStyle}>{error}</p>}

        <div style={buttonGroupStyle}>
          <button onClick={() => fetchSortedReviews("rating")} style={buttonStyle}>
            🔼 Rating (Asc)
          </button>
          <button onClick={() => fetchSortedReviews("rating-desc")} style={buttonStyle}>
            🔽 Rating (Desc)
          </button>
        </div>

        {loading && <p style={loadingStyle}>Loading...</p>}
        {sortOption && <p>Showing sorted by: <strong>{sortOption.replace("-", " ")}</strong></p>}

        <div style={cardContainerStyle}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} style={cardStyle}>
                <p style={ratingStyle}>⭐ {review.rating}</p>
                <p style={reviewTextStyle}>{review.content}</p>
                <p style={dateStyle}>
                  🗓 {review.created_at
                    ? new Date(review.created_at).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "No Date"}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews available to display</p>
          )}
        </div>
      </div>
    </>
  );
};

// 💅🏻 Styles
const containerStyle = {
  width: "85%",
  maxWidth: "1000px",
  margin: "30px auto",
  textAlign: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  marginBottom: "20px",
  color: "#333",
  fontWeight: "bold",
};

const errorStyle = {
  color: "#f44336",
  fontWeight: "bold",
};

const loadingStyle = {
  fontSize: "1.2rem",
  color: "#888",
  fontStyle: "italic",
};

const buttonGroupStyle = {
  marginBottom: "25px",
};

const buttonStyle = {
  marginRight: "10px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  background: "#007bff",
  color: "white",
  fontSize: "14px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(4, 2, 2, 0.1)",
  transition: "transform 0.2s ease",
  color: "white",
};

const ratingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#ff9800",
};

const reviewTextStyle = {
  marginTop: "10px",
  fontSize: "14px",
  color: "#000000",
};

const dateStyle = {
  marginTop: "10px",
  fontSize: "12px",
  color: "#000000",
};

export default SortReviewCard;
