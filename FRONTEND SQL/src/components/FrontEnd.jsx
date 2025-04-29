import React from 'react';

const FrontEnd = () => {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.bannerCard}>
        <h1 style={styles.title}>📦 Review API Dashboard</h1>
        <p style={styles.subtitle}>
          A lightweight, scalable, and developer-friendly API for managing customer reviews.  
          Includes sorting, filtering, and pagination support.
        </p>
        <a href="/docs" style={styles.ctaButton}>View API Docs</a>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #a8edea, #fed6e3)', // Beautiful gradient background
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    overflow: 'hidden',
  },

  bannerCard: {
    background: 'rgba(255, 255, 255, 0.9)', // More subtle background color for better blending
    backdropFilter: 'blur(12px)', // Smooth blur effect
    WebkitBackdropFilter: 'blur(12px)', // Cross-browser support for blur
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    padding: '40px 50px',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
    animation: 'fadeIn 0.6s ease forwards',
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#435b88', // Dark green title
    marginBottom: '20px',
    lineHeight: '1.2',
    textTransform: 'uppercase',
  },

  subtitle: {
    fontSize: '1.2rem',
    color: '#000000',
    marginBottom: '30px',
    lineHeight: '1.7',
  },

  ctaButton: {
    display: 'inline-block',
    padding: '14px 40px',
    fontSize: '1.1rem',
    backgroundColor: '#112e6b',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(123, 123, 123, 0.2)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    marginTop: '20px',
  },
};

// Hover effect for View API Docs
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  a[href="/docs"]:hover {
    background-color: #435b88 !important;
    transform: translateY(-3px);
  }
`, styleSheet.cssRules.length);

// Fade-in animation for the banner
styleSheet.insertRule(`
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`, styleSheet.cssRules.length);

export default FrontEnd;
