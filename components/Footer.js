import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Climate Research Portal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A comprehensive platform for climate research publications and
              data analysis in Ethiopia.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit">
                Home
              </Link>
              <Link component={RouterLink} to="/publications" color="inherit">
                Publications
              </Link>
              <Link component={RouterLink} to="/about" color="inherit">
                About
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wollo University
              <br />
              Department of Physics
              <br />
              Dessie, Ethiopia
              <br />
              Email: contact@wollo.edu.et
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Climate Research Portal. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
