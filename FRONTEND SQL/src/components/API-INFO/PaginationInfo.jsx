import React from "react";

/**
 * PaginationDocs Component
 * 
 * This component displays documentation and an explanation of how pagination works.
 * It explains how to use the PaginationInfo component and provides an example.
 */
const PaginationInfo = () => {
  return (
    <div style={docsContainerStyle}>
      <h2 style={headingStyle}>Pagination Documentation</h2>
      <p style={introTextStyle}>
        Pagination is used to split a large number of items into smaller, manageable chunks (pages). 
        It provides navigation controls to jump between different pages, making it easier to handle large datasets.
      </p>

      <h3 style={subheadingStyle}>How Pagination Works</h3>
      <p style={docTextStyle}>
        Pagination divides a large set of data into smaller, more manageable pieces (pages). 
        You can specify the number of items to display per page. For example, if you have 100 items and set the page size to 10, 
        there will be 10 pages. Users can navigate between these pages.
      </p>
      <p style={docTextStyle}>
        For instance, if you're on page 2, you might see items 11–20. Navigating to page 3 would show items 21–30, and so on.
      </p>

      <h3 style={subheadingStyle}>PaginationInfo Component</h3>
      <p style={docTextStyle}>
        The <code style={codeStyle}>PaginationInfo</code> component displays:
        <ul style={listStyle}>
          <li>The current page</li>
          <li>Total pages</li>
          <li>The range of items being displayed</li>
        </ul>
        This component updates dynamically based on the current page, total pages, and items per page.
      </p>

      <h4 style={exampleHeadingStyle}>Props</h4>
      <ul style={propsListStyle}>
        <li><strong>currentPage (number):</strong> The current page number. (Required)</li>
        <li><strong>totalPages (number):</strong> The total number of pages. (Required)</li>
        <li><strong>totalItems (number):</strong> The total number of items. (Required)</li>
        <li><strong>pageSize (number):</strong> The number of items per page. (Optional, defaults to 10)</li>
      </ul>

      <h4 style={exampleHeadingStyle}>Usage Example</h4>
      <pre style={codeExampleStyle}>
        {`<PaginationInfo 
  currentPage={2} 
  totalPages={5} 
  totalItems={50} 
  pageSize={10} 
/>`}
      </pre>
      <p style={docTextStyle}>
        This will display:
      </p>
      <ul style={exampleListStyle}>
        <li>Page 2 of 5</li>
        <li>Showing 11 to 20 of 50 items</li>
      </ul>

      <h3 style={subheadingStyle}>How Pagination Works in Action</h3>
      <p style={docTextStyle}>
        When you pass the props <strong>currentPage</strong>, <strong>totalPages</strong>, and <strong>totalItems</strong>, 
        the component calculates the range of items being shown on the current page. It updates the displayed range dynamically 
        as the user navigates between pages.
      </p>
      <p style={docTextStyle}>
        For example, when on page 2, and the total items are 50 with a page size of 10, it will display items 11–20. 
        As you move to page 3, it will show items 21–30.
      </p>
    </div>
  );
};

// Styles
const docsContainerStyle = {
  maxWidth: "1300px",
  margin: "30px auto",
  fontFamily: "'Roboto', sans-serif",
  color: "#333",
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  fontSize: "2.2rem",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#3b3b3b",
};

const introTextStyle = {
  fontSize: "1.1rem",
  marginBottom: "20px",
  lineHeight: "1.7",
};

const subheadingStyle = {
  fontSize: "1.6rem",
  marginTop: "30px",
  marginBottom: "15px",
  color: "#555",
};

const docTextStyle = {
  fontSize: "1.1rem",
  marginBottom: "15px",
  lineHeight: "1.7",
  color: "#666",
};

const exampleHeadingStyle = {
  fontSize: "1.3rem",
  marginTop: "20px",
  marginBottom: "10px",
  fontWeight: "500",
  color: "#333",
};

const propsListStyle = {
  listStyleType: "none",
  paddingLeft: "0",
  fontSize: "1rem",
  marginBottom: "20px",
};

const listStyle = {
  marginTop: "10px",
  paddingLeft: "20px",
};

const exampleListStyle = {
  listStyleType: "none",
  paddingLeft: "0",
  fontSize: "1rem",
};

const codeStyle = {
  backgroundColor: "#f4f4f4",
  padding: "4px 6px",
  borderRadius: "4px",
  fontFamily: "'Courier New', monospace",
  fontSize: "1.1rem",
  color: "#d14f53",
};

const codeExampleStyle = {
  backgroundColor: "#333",
  padding: "15px",
  borderRadius: "8px",
  fontFamily: "'Courier New', monospace",
  fontSize: "1rem",
  color: "#fff",
  overflowX: "auto",
  marginBottom: "20px",
};

export default PaginationInfo;
