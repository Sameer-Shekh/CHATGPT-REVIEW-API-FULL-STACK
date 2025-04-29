import React from 'react';

// CSS styles included in the same file
const styles = `
  .api-info-container {
    width: 90%;
    margin: 40px auto;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .api-info-container h2 {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .api-info h3 {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
    color: #34495e;
  }

  .api-info p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }

  pre {
    background-color: #333;
    padding: 15px;
    border-radius: 5px;
    font-size: 14px;
    font-family: monospace;
    color: #fff;
    overflow-x: auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  pre code {
    word-wrap: break-word;
  }

  .highlight-text {
    color: red;
    font-weight: bold;
  }
`;

const PostReviewInfo = () => {
  const apiInfo = {
    purpose: 'The POST API allows users to submit their review data (including the review text and rating) to the server. This API will receive the data, process it, and store it in the database.',
    method: 'POST',
    endpoint: '/api/reviews',
    headers: { 'Content-Type': 'application/json (Required)' },
    requestBodyExample: { Review: '"This is a great product!"', Ratings: 4 },
    responseStatus: {
      201: 'Created: If the review is successfully saved.',
      400: 'Bad Request: If the review or rating is invalid.',
      500: 'Internal Server Error: If there\'s an error in the backend.',
    },
    responseBodyExample: {
      id: '3',
      Rating: 4,
      Review: '"This is a great product!"',
      ReviewDate: '"2025-01-13T00:00:00Z"',
    },
  };

  // Inject styles into the document head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="api-info-container">
      <h2>API POST Review Info</h2>
      <div className="api-info">
        <h3>Purpose</h3>
        <p>{apiInfo.purpose}</p>

        <h3>API Description</h3>
        <p><strong>Method:</strong> <p style={{color: '#d6336c',backgroundColor: '#f4f4f4'}}>{apiInfo.method}</p></p>
        <p><strong>Endpoint:</strong><p style={{color: '#d6336c',backgroundColor: '#f4f4f4'}}>{apiInfo.endpoint}</p></p>
        <p><strong>Headers:</strong> {JSON.stringify(apiInfo.headers, null, 2)}</p>

        <h3>Request Body Example</h3>
        <pre>{`{
  "Review": ${apiInfo.requestBodyExample.Review},
  "Ratings": ${apiInfo.requestBodyExample.Ratings}
}`}</pre>

        <h3>Response Status Codes</h3>
        <pre>{`{
  201: "${apiInfo.responseStatus[201]}",
  400: "${apiInfo.responseStatus[400]}",
  500: "${apiInfo.responseStatus[500]}"
}`}</pre>

        <h3>Response Body Example</h3>
        <pre>{`{
  "id": "${apiInfo.responseBodyExample.id}",
  "Rating": ${apiInfo.responseBodyExample.Rating},
  "Review": ${apiInfo.responseBodyExample.Review},
  "ReviewDate": ${apiInfo.responseBodyExample.ReviewDate}
}`}</pre>
      </div>
    </div>
  );
};

export default PostReviewInfo;
