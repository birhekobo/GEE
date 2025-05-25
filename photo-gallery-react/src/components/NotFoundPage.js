import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "calc(100vh - 160px)", // Adjust based on header/footer height
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      color: "#333",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "2rem",
    },
    link: {
      fontSize: "1rem",
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
