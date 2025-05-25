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
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";

const CoursePreview = ({ course }) => {
  const {
    title,
    instructor,
    duration,
    level,
    description,
    topics,
    enrollmentUrl,
    startDate,
    institution,
    maxStudents,
  } = course;

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
          Instructor: {instructor}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Level: {level}
          </Typography>
        </Box>

        {description && (
          <Typography variant="body2" paragraph sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}

        {topics && (
          <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {topics.map((topic) => (
              <Chip key={topic} label={topic} size="small" sx={{ m: 0.5 }} />
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
          {institution && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SchoolIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                {institution}
              </Typography>
            </Box>
          )}

          {startDate && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                Start Date: {startDate}
              </Typography>
            </Box>
          )}

          {duration && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                Duration: {duration}
              </Typography>
            </Box>
          )}

          {maxStudents && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PeopleIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                Max Students: {maxStudents}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href={enrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll Now
          </Button>
          <Tooltip title="View Course Details">
            <IconButton
              component={Link}
              href={enrollmentUrl}
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

export default CoursePreview;
