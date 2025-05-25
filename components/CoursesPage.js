import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CoursePreview from "./CoursePreview";

const CoursesPage = () => {
  // Sample course data - replace with your actual course data
  const courses = [
    {
      title: "Introduction to Photography",
      instructor: "John Smith",
      duration: "8 weeks",
      level: "Beginner",
      description:
        "Learn the fundamentals of photography, including camera settings, composition, and lighting techniques.",
      topics: ["Camera Basics", "Composition", "Lighting", "Editing"],
      enrollmentUrl: "#",
      startDate: "2024-04-01",
      institution: "Photography Academy",
      maxStudents: 20,
    },
    {
      title: "Advanced Portrait Photography",
      instructor: "Sarah Johnson",
      duration: "6 weeks",
      level: "Advanced",
      description:
        "Master the art of portrait photography with advanced techniques and professional workflows.",
      topics: [
        "Portrait Lighting",
        "Posing",
        "Post-Processing",
        "Client Management",
      ],
      enrollmentUrl: "#",
      startDate: "2024-04-15",
      institution: "Photography Academy",
      maxStudents: 15,
    },
    {
      title: "Landscape Photography Masterclass",
      instructor: "Michael Brown",
      duration: "10 weeks",
      level: "Intermediate",
      description:
        "Explore the beauty of landscape photography and learn to capture stunning natural scenes.",
      topics: ["Composition", "Filters", "Long Exposure", "HDR"],
      enrollmentUrl: "#",
      startDate: "2024-05-01",
      institution: "Photography Academy",
      maxStudents: 25,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Photography Courses
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Enhance your photography skills with our comprehensive courses
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CoursePreview course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;
