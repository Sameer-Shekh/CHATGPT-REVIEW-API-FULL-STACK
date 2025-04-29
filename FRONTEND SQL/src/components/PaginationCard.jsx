import React, { useState, useEffect } from "react";
import PaginationInfo from "./API-INFO/PaginationInfo";

const PaginationCard = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noReviewsFound, setNoReviewsFound] = useState(false);

  const BASE_URL = "http://localhost:8000/api/reviews/search/pagination";
  const limit = 9;

  const fetchReviews = async (page, limit) => {
    setLoading(true);
    setError(null);
    setNoReviewsFound(false);

    try {
      const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews. Please try again later.");
      }
      const data = await response.json();

      if (data.reviews.length === 0) {
        setNoReviewsFound(true);
      } else {
        setReviews(data.reviews);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(currentPage, limit);
  }, [currentPage]);

  const handlePagination = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <PaginationInfo />
      <div style={containerStyle}>
        <h2 style={headingStyle}>📄 Paginated Reviews</h2>
        {error && <p style={errorStyle}>{error}</p>}
        {noReviewsFound && <p>No reviews found for this page.</p>}

        {loading && <p style={loadingStyle}>Loading...</p>}

        <div style={cardContainerStyle}>
          {!loading &&
            reviews.map((review) => (
              <div key={review._id} style={cardStyle}>
                <p style={ratingStyle}>⭐ {review.rating}</p>
                <p style={reviewTextStyle}>
                  <strong>ReviewId:</strong> {review.id}
                </p>
                <p style={reviewTextStyle}>
                  <strong>Review:</strong> {review.content}
                </p>
                <p style={dateStyle}>
                  🗓{" "}
                  {review.created_at
                    ? new Date(review.created_at).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "No Date"}
                </p>
              </div>
            ))}
        </div>

        <div style={paginationContainerStyle}>
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
            style={buttonStyle}
          >
            ⬅️ Previous
          </button>
          <span style={paginationTextStyle}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={buttonStyle}
          >
            Next ➡️
          </button>
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

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const cardStyle = {
  background: "#435b88",
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
  color: "#ffffff",
};

const dateStyle = {
  marginTop: "10px",
  fontSize: "12px",
  color: "#ffffff",
};

const paginationContainerStyle = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  background: "#435b88",
  color: "white",
  fontSize: "14px",
  cursor: "pointer",
  margin: "0 10px",
  transition: "background 0.3s ease",
};

const paginationTextStyle = {
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#333",
};

export default PaginationCard;
