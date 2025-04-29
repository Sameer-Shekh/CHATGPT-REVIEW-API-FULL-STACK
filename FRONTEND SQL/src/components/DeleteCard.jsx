import React, { useState } from "react";
import ApiDeleteInfo from "./API-INFO/DeleteInfo";

const DeleteReviewMsg = () => {
  const [reviewId, setReviewId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!reviewId) {
      setMessage("Please enter a review ID to delete.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/reviews/delete/${reviewId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        setMessage("Review successfully deleted");
      } else if (response.status === 404) {
        setMessage("Cannot find review");
      } else {
        setMessage("An error occurred while deleting the review");
      }
    } catch (error) {
      setMessage("An error occurred while deleting the review");
    }
  };

  return (
    <>
      <ApiDeleteInfo />
      <div
        style={{
          width: "80%",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f4f4f9",
        }}
      >
        <h2>Delete Review</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Base URL Section */}
          <div style={{ flex: 1, padding: "10px" }}>
            <label htmlFor="baseUrl" style={{ fontWeight: "bold" }}>
              Base URL:
            </label>
            <input
              id="baseUrl"
              type="text"
              value="http://localhost:8000/api/reviews/delete/"
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor: "#f1f1f1",
              }}
            />
          </div>

          {/* Review ID Input Section */}
          <div style={{ flex: 1, padding: "10px" }}>
            <label htmlFor="reviewId" style={{ fontWeight: "bold" }}>
              Review ID:
            </label>
            <input
              id="reviewId"
              type="text"
              value={reviewId}
              onChange={(e) => setReviewId(e.target.value)}
              placeholder="Enter review ID"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Delete Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleDelete}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete Review
          </button>
        </div>

        {/* Message Display */}
        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor:
                message === "Review successfully deleted"
                  ? "#d4edda"
                  : "#f8d7da",
              color:
                message === "Review successfully deleted"
                  ? "#155724"
                  : "#721c24",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteReviewMsg;
