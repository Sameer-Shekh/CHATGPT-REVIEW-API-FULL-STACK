import React, { useState } from "react";
import GetByIdInfo from "./API-INFO/GetByIdInfo";

const ReviewCard = () => {
  const [reviewId, setReviewId] = useState("");
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:8000/api/reviews/";

  const getReview = async () => {
    if (!reviewId) {
      setError("Please enter a review ID");
      setReviewData(null);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}${reviewId}`);
      if (!response.ok) {
        throw new Error("Review not found");
      }
      const data = await response.json();
      setReviewData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setReviewData(null);
    }
  };

  return (
    <>
      <GetByIdInfo />
      <div style={containerStyle}>
        <h2 style={titleStyle}>🔍 Get Review by ID</h2>

        <div style={inputSectionStyle}>
          <label htmlFor="reviewId" style={labelStyle}>Review URL:</label>
          <div style={inputWrapperStyle}>
            <span style={urlPrefixStyle}>http://localhost:7000/api/reviews/</span>
            <input
              type="text"
              id="reviewId"
              value={reviewId}
              onChange={(e) => setReviewId(e.target.value)}
              placeholder="Enter review ID"
              style={inputStyle}
            />
          </div>
          <button
            onClick={getReview}
            style={buttonStyle}
          >
            Get Review
          </button>
        </div>

        {error && <p style={errorStyle}>{error}</p>}

        {reviewData && (
          <div style={cardWrapperStyle}>
            <h3 style={cardHeadingStyle}>📄 Review Details</h3>
            <div style={reviewCardStyle}>
              <p><strong>🆔 Review ID:</strong> {reviewData.id}</p>
              <p><strong>⭐ Rating:</strong> {reviewData.rating}</p>
              <p><strong>💬 Review:</strong> {reviewData.content}</p>
              <p>
                <strong>🗓 Date:</strong>{" "}
                {reviewData.created_at
                  ? new Date(reviewData.created_at).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })
                  : "No Date"}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// 💅 Styled Components
const containerStyle = {
  width: "90%",
  maxWidth: "700px",
  margin: "40px auto",
  padding: "30px",
  borderRadius: "12px",
  backgroundColor: "#f9faff",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#2c3e50",
};

const inputSectionStyle = {
  marginBottom: "30px",
};

const labelStyle = {
  fontWeight: "bold",
  display: "block",
  marginBottom: "8px",
};

const inputWrapperStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  gap: "10px",
  flexWrap: "wrap",
};

const urlPrefixStyle = {
  fontSize: "14px",
  color: "#555",
};

const inputStyle = {
  flex: "1",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
  minWidth: "200px",
};

const buttonStyle = {
  padding: "10px 16px",
  backgroundColor: "#435b88",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  marginTop: "10px",
};

const errorStyle = {
  color: "red",
  fontWeight: "bold",
  textAlign: "center",
};

const cardWrapperStyle = {
  marginTop: "30px",
};

const cardHeadingStyle = {
  color: "#34495e",
  fontSize: "18px",
  marginBottom: "10px",
};

const reviewCardStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  lineHeight: "1.6",
};

export default ReviewCard;
