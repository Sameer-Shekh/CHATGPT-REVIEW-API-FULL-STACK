import { useState } from "react";
import ApiPostReviewInfo from "./API-INFO/PostReviewInfo";

export default function PostReviews() {
  const [Review, setReview] = useState(""); // Note: updated to match backend field name
  const [Ratings, setRatings] = useState(1); // Note: updated to match backend field name
  const [submissionError, setSubmissionError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmissionError(null);
    setSuccessMessage(null);

    // Validate input
    if (!Review.trim()) {
      setSubmissionError("Review is required.");
      return;
    }

    if (!Ratings || Ratings < 1 || Ratings > 5) {
      setSubmissionError("Rating must be between 1 and 5.");
      return;
    }

    const data = {
      Review: Review, // Renamed to match the backend structure
      Ratings: Ratings,
    };

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:8000/api/reviews/post-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText);
      }

      setReview("");
      setRatings(1);
      setSuccessMessage("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      setSubmissionError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <ApiPostReviewInfo />
      </div>
      <div>
        <form onSubmit={handleSubmit} style={formStyles}>
          <h2 style={headingStyles}>Review Form</h2>
          <div style={fieldStyle}>
            <label htmlFor="review" style={labelStyles}>Your Thought:</label>
            <textarea
              id="review"
              value={Review} // Updated variable name
              onChange={(e) => setReview(e.target.value)}
              required
              style={{ ...inputStyles, height: "100px" }}
            />
          </div>
          <div style={fieldStyle}>
            <label htmlFor="rating" style={labelStyles}>Rating:</label>
            <select
              id="rating"
              value={Ratings} // Updated variable name
              onChange={(e) => setRatings(parseInt(e.target.value))}
              required
              style={selectStyles}
            >
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Star{i + 1 > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" style={submitButtonStyles} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Review"}
          </button>
          {submissionError && (
            <div style={{ ...messageStyles, color: "red" }}>{submissionError}</div>
          )}
          {successMessage && (
            <div style={{ ...messageStyles, color: "green" }}>{successMessage}</div>
          )}
        </form>
      </div>
    </>
  );
}

const formStyles = {
  width: "420px",
  margin: "40px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  textAlign: "center",
};

const headingStyles = {
  fontSize: "1.8rem",
  marginBottom: "15px",
  color: "#1976d2",
  fontWeight: "bold",
};

const fieldStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const labelStyles = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "bold",
  fontSize: "1rem",
  color: "#555",
};

const inputStyles = {
  width: "100%",
  padding: "12px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  textAlign: "left",
  backgroundColor: "#f9f9f9",
  boxSizing: "border-box",
  transition: "border 0.3s ease",
};

const selectStyles = {
  ...inputStyles,
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  paddingRight: "10px",
};

const submitButtonStyles = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
};

const messageStyles = {
  marginTop: "15px",
  fontWeight: "bold",
  textAlign: "center",
};
