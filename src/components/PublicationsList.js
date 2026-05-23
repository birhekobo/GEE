import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  Pagination,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PublicationCard from "./PublicationCard";

const PublicationsList = ({ publications }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(publications.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginatedPublications = publications.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Publications
        </Typography>

        <Grid container spacing={3}>
          {paginatedPublications.map((publication) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={publication.id}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <PublicationCard publication={publication} />
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              mb: 2,
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size={isMobile ? "small" : "medium"}
              showFirstButton
              showLastButton
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                },
              }}
            />
          </Box>
        )}

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Showing {paginatedPublications.length} of {publications.length}{" "}
          publications
        </Typography>
      </Box>
    </Container>
  );
};

export default PublicationsList;
