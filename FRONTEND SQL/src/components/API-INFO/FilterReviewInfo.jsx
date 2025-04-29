import React from "react";

const FilterReviewInfo = () => {
  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Filter Reviews by Rating</h3>
      <p style={descriptionStyle}>
        Use the filter feature to view reviews based on specific ratings. You can filter reviews by providing a rating from 1 to 5, and the system will show all reviews that match that rating.
      </p>
      
      <div style={infoBoxStyle}>
        <h4 style={infoTitleStyle}>How to Use the Filter:</h4>
        <ul style={infoListStyle}>
          <li>
            <strong>Step 1:</strong> Enter a rating between 1 and 5 in the input box.
          </li>
          <li>
            <strong>Step 2:</strong> Click the "Filter by Rating" button.
          </li>
          <li>
            <strong>Step 3:</strong> The page will display reviews that have the selected rating.
          </li>
        </ul>
      </div>

      <div style={exampleBoxStyle}>
        <h4 style={infoTitleStyle}>Example of Usage:</h4>
        <p style={exampleTextStyle}>
          If you want to see all reviews with a rating of 4, enter "4" in the input field and click "Filter by Rating." This will show only the reviews with a rating of 4.
        </p>
      </div>

      <div style={queryBoxStyle}>
        <h4 style={infoTitleStyle}>How the Query Parameter Works:</h4>
        <p style={queryTextStyle}>
          The query parameter is passed as <code>?rat=[rating]</code> in the URL. The parameter "rat" determines the rating value you want to filter by. For example:
        </p>
        <pre style={codeExampleStyle}>
          <code>?rat=4</code>
        </pre>
        <p style={queryTextStyle}>
          In this case, the application will filter the reviews and display only those with a rating of 4.
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "30px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "1300px",
  margin: "20px auto",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "24px",
  color: "#333",
};

const descriptionStyle = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.5",
  marginBottom: "20px",
};

const infoBoxStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  marginBottom: "20px",
};

const infoTitleStyle = {
  fontSize: "18px",
  color: "#333",
  marginBottom: "10px",
};

const infoListStyle = {
  listStyleType: "none",
  paddingLeft: "0",
  fontSize: "16px",
  color: "#555",
};

const exampleBoxStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  marginBottom: "20px",
};

const exampleTextStyle = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.5",
};

const queryBoxStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const queryTextStyle = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.5",
  marginBottom: "10px",
};

const codeExampleStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  fontFamily: "'Courier New', monospace",
  fontSize: "14px",
  marginTop: "10px",
};

export default FilterReviewInfo;
