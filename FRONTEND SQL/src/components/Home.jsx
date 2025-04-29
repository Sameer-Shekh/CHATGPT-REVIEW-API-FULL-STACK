import React from "react";

const Home = () => {
  const baseURL = "http://localhost:8000/api/reviews";

  const apiOverview = [
    {
      name: "Get All Reviews",
      method: "GET",
      endpoint: `${baseURL}`,
      description: "Fetch all reviews from the database.",
      requestExample: `${baseURL}`,
      responseExample: [
        {
          id: "12345",
          Review: "This is a sample review.",
          Ratings: 5,
          ReviewDate: "2025-01-14T00:00:00Z",
        },
        {
          id: "67890",
          Review: "Another review example.",
          Ratings: 4,
          ReviewDate: "2025-01-15T00:00:00Z",
        },
      ],
    },
    {
      name: "Get Review by ID",
      method: "GET",
      endpoint: `${baseURL}/:id`,
      description: "Fetch a specific review by its ID.",
      requestExample: `${baseURL}/12345`,
      responseExample: {
        id: "12345",
        Review: "This is a sample review.",
        Ratings: 5,
        ReviewDate: "2025-01-14T00:00:00Z",
      },
    },
    {
      name: "Create Review",
      method: "POST",
      endpoint: `${baseURL}`,
      description: "Create a new review.",
      requestExample: {
        url: `${baseURL}`,
        body: { Review: "A new review", Ratings: 4 },
      },
      responseExample: {
        id: "12346",
        Review: "A new review",
        Ratings: 4,
        ReviewDate: "2025-01-14T00:00:00Z",
      },
    },
    {
      name: "Update Review",
      method: "PUT",
      endpoint: `${baseURL}/:id`,
      description: "Update a specific review by its ID.",
      requestExample: {
        url: `${baseURL}/12345`,
        body: { Review: "Updated review text", Ratings: 4 },
      },
      responseExample: {
        id: "12345",
        Review: "Updated review text",
        Ratings: 4,
        ReviewDate: "2025-01-14T00:00:00Z",
      },
    },
    {
      name: "Delete Review",
      method: "DELETE",
      endpoint: `${baseURL}/:id`,
      description: "Delete a specific review by its ID.",
      requestExample: `${baseURL}/12345`,
      responseExample: { message: "Review deleted successfully" },
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>API Documentation</h1>
        <p style={styles.introText}>
          Welcome to the Review API documentation. Below you will find all the
          available endpoints, methods, and examples of how to use them.
        </p>
      </header>
      <div style={styles.apiOverviewContainer}>
        <h3 style={styles.sectionTitle}>Base URL:</h3>
        <p style={styles.baseURL}>{baseURL}</p>
        <p style={styles.sectionText}>
          Below is a collection of API methods that can be used to interact with
          the review system.
        </p>
        {apiOverview.map((api, index) => (
          <div key={index} style={styles.apiCard}>
            <h2 style={styles.apiName}>{api.name}</h2>
            <div style={styles.apiDetails}>
              <p><strong>Method:</strong> {api.method}</p>
              <p><strong>Endpoint:</strong> {api.endpoint}</p>
              <p><strong>Description:</strong> {api.description}</p>
              <h4 style={styles.subTitle}>Request Example:</h4>
              <pre style={styles.requestExample}>{JSON.stringify(api.requestExample, null, 2)}</pre>
              <h4 style={styles.subTitle}>Response Example:</h4>
              <pre style={styles.responseExample}>
                {JSON.stringify(api.responseExample, null, 2)}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: "#f4f7fb",
    color: "#333",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#435b88",
    color: "#fff",
    padding: "40px 20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "10px",
  },
  introText: {
    fontSize: "1.2rem",
    fontWeight: "400",
    maxWidth: "800px",
    margin: "0 auto",
  },
  apiOverviewContainer: {
    marginTop: "30px",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#435b88",
    marginBottom: "10px",
  },
  sectionText: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  baseURL: {
    fontWeight: "600",
    color: "#435b88",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  apiCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  apiName: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  apiDetails: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444",
  },
  subTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "20px",
  },
  requestExample: {
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "8px",
    fontFamily: "monospace",
    overflowX: "auto",
    color:"#fff"
  },
  responseExample: {
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "8px",
    fontFamily: "monospace",
    overflowX: "auto",
    color:"#fff"
  },
};

export default Home;
