import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import PublicationCard from "./PublicationCard";

const PublicationsList = ({ publications }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Publications
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Showing {publications.length} results
        </Typography>
        <Grid container spacing={3}>
          {publications.map((publication) => (
            <Grid item xs={12} sm={6} md={4} key={publication.id}>
              <PublicationCard publication={publication} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} style={{ backgroundColor: "#ffe082" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default PublicationsList;
