import React, { useState } from "react";
import UpdateReviewInfo from "./API-INFO/UpdateReviewInfo";

const UpdateReviewCard = () => {
  const [reviewId, setReviewId] = useState("");
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    if (!reviewId || !newReview || !newRating) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/reviews/update/${reviewId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Review: newReview,
            Ratings: parseInt(newRating, 10),
          }),
        }
      );

      if (response.ok) {
        setMessage("Review successfully updated");
      } else if (response.status === 404) {
        setMessage("Cannot find review");
      } else {
        setMessage("An error occurred while updating the review");
      }
    } catch (error) {
      setMessage("An error occurred while updating the review");
    }
  };

  return (
    <>
      <UpdateReviewInfo />
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
        <h2>Update Review</h2>
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
              value="http://localhost:8000/api/reviews/update/"
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

        {/* Review Text Input */}
        <div style={{ padding: "10px" }}>
          <label htmlFor="newReview" style={{ fontWeight: "bold" }}>
            New Review Text:
          </label>
          <textarea
            id="newReview"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Enter new review text"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              resize: "none",
            }}
          />
        </div>

        {/* Rating Input */}
        <div style={{ padding: "10px" }}>
          <label htmlFor="newRating" style={{ fontWeight: "bold" }}>
            New Rating:
          </label>
          <input
            id="newRating"
            type="number"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
            placeholder="Enter new rating (1-5)"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Update Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleUpdate}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Update Review
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
              backgroundColor: message.includes("successfully")
                ? "#d4edda"
                : "#f8d7da",
              color: message.includes("successfully") ? "#155724" : "#721c24",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateReviewCard;
