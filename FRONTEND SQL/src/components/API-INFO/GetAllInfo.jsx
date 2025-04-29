import React from 'react';

const GelAllInfo = () => {
  const jsonData = [
    {
      id: "1",
      Rating: 5,
      Review: "Excellent product! Highly recommend.",
      ReviewDate: "2024-07-04T10:30:00Z",
    },
    {
      id: "2",
      Rating: 3,
      Review: "Product could be improved in this area...",
      ReviewDate: "2024-07-05T15:15:00Z",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "90%",
        margin: "30px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#333" }}>API Documentation: Get All Reviews</h3>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          <strong>Purpose:</strong> This API endpoint retrieves a list of all available reviews within the system.
          Reviews represent user feedback on products, services, or experiences.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          <strong>BASE URL:</strong> <code style={{ color:"#d6336c",background: "#e0e0e0", padding: "2px 4px", borderRadius: "4px" }}>http://localhost:7000/</code>
        </p>

        <h4 style={{ color: "#444" }}>Request</h4>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li><strong>Method:</strong> <span style={{color:"#d6336c", fontWeight: "normal" }}>GET</span></li>
          <li><strong>Endpoint:</strong> <span style={{color:"#d6336c",  fontWeight: "normal" }}>/api/reviews</span></li>
          <li><strong>Headers:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
              <li><strong>Content-Type:</strong> <span style={{color:"#d6336c", fontWeight: "normal" }}>application/json (Optional, but recommended)</span></li>
            </ul>
          </li>
        </ul>

        <h4 style={{ color: "#444" }}>Response</h4>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li><strong>Status Code:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
              <li><strong>200 OK:</strong> A list of reviews is returned.</li>
              <li><strong>500 Internal Server Error:</strong> Error during retrieval.</li>
            </ul>
          </li>
        </ul>

        <h4 style={{ color: "#444" }}>Response Body</h4>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li><strong>id</strong>: Unique identifier for the review.</li>
          <li><strong>Rating</strong>: Numerical rating (1-5 stars).</li>
          <li><strong>Review</strong>: The actual text of the review.</li>
          <li><strong>ReviewDate</strong>: Timestamp of when the review was created.</li>
        </ul>

        <h4 style={{ color: "#444" }}>Example Response</h4>
        <pre
          style={{
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "1rem",
            fontFamily: "'Courier New', Courier, monospace",
            color: "#fff",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {JSON.stringify(jsonData, null, 2)}
        </pre>

        <h4 style={{ color: "#444" }}>Notes</h4>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>This description provides a general outline. Specific implementations may vary depending on system design.</li>
          <li>Consider adding pagination or filtering options to handle large datasets efficiently.</li>
          <li>Implement security measures to protect sensitive data.</li>
          <li>Clear documentation ensures better understanding and easy integration by developers.</li>
        </ul>
      </div>
    </div>
  );
};

export default GelAllInfo;
