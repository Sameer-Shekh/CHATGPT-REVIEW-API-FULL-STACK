import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GetAllInfo from "./API-INFO/GetAllInfo";

export default function GetAllReviews() {
  const [value, setValue] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Function to fetch data (but call it manually, not in useEffect)
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/reviews");
      const jsonData = await response.json();
      setValue(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GetAllInfo />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e3f2fd",
          padding: "1rem",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "16px",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        ACTUAL RESPONSE TO SHOW AS A CARD
        {/* Button to fetch reviews */}
        <Button 
          variant="contained" 
          onClick={fetchData}
          sx={{
            marginTop: "1rem",
            backgroundColor: "#1976d2",
            '&:hover': { backgroundColor: "#1565c0" }
          }}
        >
          Load Reviews
        </Button>
      </div>

      {/* Show loading state if fetching */}
      {loading && (
        <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "18px" }}>
          Loading...
        </div>
      )}

      {/* Cards will only appear after data is fetched */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {value.map((review) => (
          <Card
            key={review.id || review.user_id}
            sx={{
              maxWidth: 250,
              boxShadow: 3,
              borderRadius: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              '&:hover': {
                transform: "scale(1.05)",
                boxShadow: 12,
              },
            }}
          >
            <CardContent sx={{ paddingBottom: "12px" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                Review ID: {review.id}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  height: "90px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {review.content}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 16px",
                backgroundColor: "#f9f9f9",
                borderTop: "1px solid #ddd",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Button
                size="small"
                sx={{
                  fontSize: "0.8rem",
                  backgroundColor: "#1976d2",
                  color: "white",
                  '&:hover': {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                Rating: {review.rating}
              </Button>
              <Button
                size="small"
                sx={{
                  fontSize: "0.8rem",
                  color: "#1976d2",
                  '&:hover': {
                    color: "#1565c0",
                  },
                }}
              >
                {review.created_at
                  ? new Date(review.created_at).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })
                  : "No Date"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
