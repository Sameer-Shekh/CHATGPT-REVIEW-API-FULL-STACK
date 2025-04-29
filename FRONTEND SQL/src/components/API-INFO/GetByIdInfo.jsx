import React from 'react';

// CSS styles included in the same file for simplicity
const styles = {
  container: {
    width: '90%',
    margin: '40px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#7f8c8d',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '15px',
  },
  code: {
    backgroundColor: '#f4f4f4',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#d6336c',
  },
  note: {
    backgroundColor: '#eef1f6',
    padding: '12px',
    borderLeft: '5px solid #3498db',
    fontSize: '1rem',
    color: '#555',
    marginTop: '20px',
  },
};

const GetByIdInfo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>API Information: Get Review by ID</h2>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Purpose</h3>
        <p style={styles.cardText}>
          This API endpoint allows users to retrieve a specific review from the system by providing its unique ID.
          A review represents feedback on products, services, or other entities in the system.
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Request</h3>
        <p style={styles.cardText}><strong>Method:</strong> <code style={styles.code}>GET</code></p>
        <p style={styles.cardText}><strong>Endpoint:</strong> <code style={styles.code}>/api/reviews/:id</code></p>
        <p style={styles.cardText}><strong>URL Format:</strong> <code style={styles.code}>http://localhost:7000/api/reviews/:id</code></p>
        <p style={styles.cardText}><strong>Parameters:</strong></p>
        <ul>
          <li><strong>:id</strong> (required): The unique identifier of the review you want to retrieve.</li>
        </ul>
        <p style={styles.cardText}><strong>Headers:</strong></p>
        <ul>
          <li><strong>Content-Type:</strong> <code style={styles.code}>application/json</code> (Optional, but recommended)</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Response</h3>
        <p style={styles.cardText}><strong>Status Codes:</strong></p>
        <ul>
          <li><strong>200 OK:</strong> If the review is found, a JSON object containing the review data will be returned.</li>
          <li><strong>404 Not Found:</strong> If no review is found with the specified ID, the server will return a "Review Not Found" message.</li>
          <li><strong>500 Internal Server Error:</strong> If an error occurs on the server while processing the request, a generic error message will be returned.</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Response Body</h3>
        <p style={styles.cardText}>The response body will contain the following fields:</p>
        <ul>
          <li><strong>id:</strong> The unique identifier of the review.</li>
          <li><strong>Rating:</strong> The numerical rating (e.g., 1-5 stars) provided in the review.</li>
          <li><strong>Review:</strong> The textual content of the review.</li>
          <li><strong>ReviewDate:</strong> The date and time when the review was created in ISO 8601 format.</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Example Request</h3>
        <pre style={styles.cardText}>{`GET http://localhost:8000/api/reviews/12345`}</pre>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Example Response (Successful)</h3>
        <pre style={styles.cardText}>
          {`{
  "id": "12345",
  "Rating": 4,
  "Review": "This product exceeded my expectations!",
  "ReviewDate": "2025-01-13T00:00:00Z"
}`}
        </pre>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Example Response (Error - Review Not Found)</h3>
        <pre style={styles.cardText}>
          {`{
  "message": "Review Not Found"
}`}
        </pre>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Notes</h3>
        <div style={styles.note}>
          <ul>
            <li>This API is designed to retrieve reviews based on their unique ID.</li>
            <li>If the review ID does not exist, the server will return a 404 error with a relevant message.</li>
            <li>Ensure that the review ID is valid, and handle errors gracefully in your application.</li>
            <li>This API can be extended in the future to support additional features such as pagination or filtering by rating.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetByIdInfo;
