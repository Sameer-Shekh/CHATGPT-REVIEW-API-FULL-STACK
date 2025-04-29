    import React from 'react';

    const SortReviewInfo = () => {
    const baseURL = 'http://localhost:7000/api/reviews/sort';

    const apiDetails = [
        {
        endpoint: '/rating',
        description: 'Sorts reviews by rating in ascending order.',
        example: `${baseURL}/rating?rat=3`,
        params: {
            query: 'rating',
            description: 'Sorts reviews in ascending order by rating.',
            example: 'rat=3 (filter reviews where rating is 3)',
        },
        },
        {
        endpoint: '/rating-desc',
        description: 'Sorts reviews by rating in descending order.',
        example: `${baseURL}/rating-desc?rat=5`,
        params: {
            query: 'rating-desc',
            description: 'Sorts reviews in descending order by rating.',
            example: 'rat=5 (filter reviews where rating is 5)',
        },
        },
    ];

    return (
        <div style={styles.container}>
        <h2 style={styles.heading}>Sort API Information</h2>
        <p style={styles.introText}>
            These API endpoints allow you to sort reviews based on ratings. You can pass a `rat` query parameter to filter reviews based on the rating.
        </p>
        <div>
            {apiDetails.map((api, index) => (
            <div key={index} style={styles.card}>
                <h3 style={styles.cardHeading}>Endpoint: {api.endpoint}</h3>
                <p style={styles.cardText}>
                <strong>Description:</strong> {api.description}
                </p>
                <p style={styles.cardText}>
                <strong>Example:</strong> 
                <code style={styles.code}>{api.example}</code>
                </p>
                <p style={styles.cardText}>
                <strong>Parameters:</strong>
                <span style={styles.paramText}>
                    <strong>Query:</strong> {api.params.query}
                    <br />
                    <strong>Description:</strong> {api.params.description}
                    <br />
                    <strong>Example:</strong> {api.params.example}
                </span>
                </p>
            </div>
            ))}
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
        backgroundColor: '#333',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#FFF',
    },
    paramText: {
        fontSize: '14px',
        color: '#6c757d',
        marginTop: '5px',
        paddingLeft: '10px',
    },
    };

    export default SortReviewInfo;