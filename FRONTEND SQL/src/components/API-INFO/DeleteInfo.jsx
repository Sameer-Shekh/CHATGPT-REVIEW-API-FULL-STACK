import React from 'react';

const ApiDeleteInfo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>API Information: Delete Review by ID</h2>
      <div style={styles.content}>
        <h3 style={styles.subHeading}>Purpose</h3>
        <p style={styles.text}>
          This API endpoint allows users to delete a specific review from the system by providing the review's unique ID.
          Deleting a review might be useful when a review is no longer relevant, contains inappropriate content, or needs to be removed for other reasons.
        </p>

        <h3 style={styles.subHeading}>Request</h3>
        <p style={styles.text}>
          <strong>Method:</strong> <code style={styles.code}>DELETE</code>
        </p>
        <p style={styles.text}>
          <strong>Endpoint:</strong> <code style={styles.code}>/api/reviews/:id</code>
        </p>
        <p style={styles.text}>
          <strong>URL Format:</strong> <code style={styles.code}>http://localhost:7000/api/reviews/:id</code>
        </p>
        <p style={styles.text}><strong>Parameters:</strong></p>
        <ul style={styles.list}>
          <li><strong>:id</strong> (required): The unique identifier of the review you want to delete.</li>
        </ul>
        <p style={styles.text}><strong>Headers:</strong></p>
        <ul style={styles.list}>
          <li><strong>Content-Type:</strong> <code style={styles.code}>application/json</code> (Optional, but recommended)</li>
        </ul>

        <h3 style={styles.subHeading}>Response</h3>
        <p style={styles.text}><strong>Status Code:</strong></p>
        <ul style={styles.list}>
          <li><strong>200 OK:</strong> If the review is successfully deleted, the server will return a success message.</li>
          <li><strong>404 Not Found:</strong> If no review is found with the specified ID, the server will return a "Cannot find review" message.</li>
          <li><strong>500 Internal Server Error:</strong> If an error occurs on the server while processing the request, a generic error message will be returned.</li>
        </ul>

        <h3 style={styles.subHeading}>Response Body</h3>
        <p style={styles.text}>
          The response body will contain a success message or error message depending on the outcome of the request.
        </p>
        <ul style={styles.list}>
          <li><strong>Success Response:</strong> Returns a message like: <code style={styles.code}>"Review successfully deleted"</code></li>
          <li><strong>Error Response:</strong> Returns a message like: <code style={styles.code}>"Cannot find review"</code></li>
        </ul>

        <h3 style={styles.subHeading}>Example Request</h3>
        <pre style={styles.preCode}>{`DELETE http://localhost:7000/api/reviews/12345`}</pre>

        <h3 style={styles.subHeading}>Example Response (Successful)</h3>
        <pre style={styles.preCode}>{`{
  "message": "Review successfully deleted"
}`}</pre>

        <h3 style={styles.subHeading}>Example Response (Error - Review Not Found)</h3>
        <pre style={styles.preCode}>{`{
  "message": "Cannot find review"
}`}</pre>

        <h3 style={styles.subHeading}>Notes</h3>
        <ul style={styles.list}>
          <li>Ensure that only authorized users (e.g., review authors or admins) can delete reviews.</li>
          <li>If the review does not exist, the server will return a 404 error.</li>
          <li>This API can be expanded with additional features like soft deletes or audit logs for review deletions.</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: '1300px',
    margin: '30px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9fb',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
    color: '#555',
  },
  subHeading: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#444',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  code: {
    backgroundColor: '#f1f1f1',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#d6336c',
  },
  list: {
    marginLeft: '20px',
    fontSize: '16px',
    marginBottom: '15px',
  },
  preCode: {
    backgroundColor: '#2d2d2d',
    color: '#fff',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '14px',
    overflowX: 'auto',
  },
};

export default ApiDeleteInfo;
