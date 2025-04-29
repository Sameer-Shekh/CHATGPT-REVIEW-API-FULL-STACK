import React from 'react';

const UpdateReviewInfo = () => {
  const apiInfo = {
    purpose: 'The PATCH API allows users to update an existing review with new text and/or rating.',
    method: 'PATCH',
    endpoint: '/api/reviews/update/:id',
    headers: { 'Content-Type': 'application/json (Required)' },
    requestBodyExample: { Review: '"Updated review text"', Ratings: 5 },
    responseStatus: {
      200: 'OK: Review successfully updated.',
      400: 'Bad Request: If the review or rating is invalid.',
      404: 'Not Found: If no review exists with the provided ID.',
      500: 'Internal Server Error: If there\'s an error in the backend.',
    },
    responseBodyExample: {
      id: '3',
      Review: '"Updated review text"',
      Ratings: 5,
      ReviewDate: '"2025-01-14T00:00:00Z"',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>API Update Review Info</h2>
      <div>
        <h3 style={styles.subheading}>Purpose</h3>
        <p style={styles.text}>{apiInfo.purpose}</p>
        <h3 style={styles.subheading}>API Description</h3>
        <p><strong>Method:</strong> <span style={styles.code}>{apiInfo.method}</span></p>
        <p><strong>Endpoint:</strong> <span style={styles.code}>{apiInfo.endpoint}</span></p>
        <p><strong>Headers:</strong></p>
        <pre style={styles.pre}>{JSON.stringify(apiInfo.headers, null, 2)}</pre>
        
        <h3 style={styles.subheading}>Request Body Example</h3>
        <pre style={styles.pre}>{JSON.stringify(apiInfo.requestBodyExample, null, 2)}</pre>
        
        <h3 style={styles.subheading}>Response Status Codes</h3>
        <pre style={styles.pre}>{JSON.stringify(apiInfo.responseStatus, null, 2)}</pre>
        
        <h3 style={styles.subheading}>Response Body Example</h3>
        <pre style={styles.pre}>{JSON.stringify(apiInfo.responseBodyExample, null, 2)}</pre>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    margin: '40px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#34495e',
    marginTop: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#7f8c8d',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  code: {
    backgroundColor: '#f4f4f4',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#d6336c',
  },
  pre: {
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '4px',
    overflowX: 'auto',
    fontSize: '14px',
    fontFamily: 'monospace',
    color: '#fff',
    marginTop: '10px',
    marginBottom: '20px',
  },
};

export default UpdateReviewInfo;
