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
  Collapse,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const PublicationCard = ({ publication }) => {
  const [expanded, setExpanded] = React.useState(false);
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
        position: "relative",
        overflow: "visible",
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {authors.join(", ")}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
          >
            {journal}
            {volume && `, Volume ${volume}`}
            {pages && `, Pages ${pages}`}
            {year && ` (${year})`}
          </Typography>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {abstract && (
            <Typography
              variant="body2"
              paragraph
              sx={{
                mb: 2,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                lineHeight: 1.6,
              }}
            >
              {abstract}
            </Typography>
          )}
        </Collapse>

        {keywords && (
          <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {keywords.map((keyword) => (
              <Chip
                key={keyword}
                label={keyword}
                size="small"
                sx={{
                  m: 0.5,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  height: { xs: 24, sm: 28 },
                }}
              />
            ))}
          </Box>
        )}

        {institution && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <SchoolIcon sx={{ mr: 1, fontSize: "1rem" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
            >
              {institution}
            </Typography>
          </Box>
        )}

        {publicationDate && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CalendarTodayIcon sx={{ mr: 1, fontSize: "1rem" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
            >
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
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
          >
            DOI: {doi}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title={expanded ? "Show less" : "Show more"}>
              <IconButton
                onClick={handleExpandClick}
                size="small"
                sx={{
                  transition: "transform 0.3s",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Tooltip>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
