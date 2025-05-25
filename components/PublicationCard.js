import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";

const PublicationCard = ({ publication }) => {
  const {
    title,
    authors,
    year,
    journal,
    volume,
    pages,
    doi,
    url,
    keywords,
    abstract,
    institution,
    publicationDate,
  } = publication;

  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {authors.join(", ")}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {journal}
            {volume && `, Volume ${volume}`}
            {pages && `, Pages ${pages}`}
            {year && ` (${year})`}
          </Typography>
        </Box>

        {abstract && (
          <Typography variant="body2" paragraph sx={{ mb: 2 }}>
            {abstract}
          </Typography>
        )}

        {keywords && (
          <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {keywords.map((keyword) => (
              <Chip
                key={keyword}
                label={keyword}
                size="small"
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        )}

        {institution && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <SchoolIcon sx={{ mr: 1, fontSize: "1rem" }} />
            <Typography variant="body2" color="text.secondary">
              {institution}
            </Typography>
          </Box>
        )}

        {publicationDate && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CalendarTodayIcon sx={{ mr: 1, fontSize: "1rem" }} />
            <Typography variant="body2" color="text.secondary">
              Published: {publicationDate}
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            DOI: {doi}
          </Typography>
          <Tooltip title="Open Publication">
            <IconButton
              component={Link}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <OpenInNewIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
