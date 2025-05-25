import React from "react";
import CoursePreview from "./CoursePreview";
import "./CoursesPage.css";

const CoursesPage = () => {
  const courses = [
    {
      title: "MATLAB Programming",
      instructor: "Birhanu Asmerom",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      description:
        "Learn MATLAB programming from basics to advanced applications in data analysis and visualization.",
      topics: [
        "MATLAB Basics",
        "Data Analysis",
        "Visualization",
        "Programming",
      ],
      enrollmentUrl: "/courses/matlab",
      startDate: "2024-04-01",
      institution: "Data Science Academy",
      maxStudents: 20,
    },
    {
      title: "Machine Learning with Python",
      instructor: "Birhanu Asmerom",
      duration: "10 weeks",
      level: "Intermediate",
      description:
        "Master machine learning algorithms and their implementation using Python and popular ML libraries.",
      topics: [
        "Python",
        "ML Algorithms",
        "Data Preprocessing",
        "Model Evaluation",
      ],
      enrollmentUrl: "/courses/ml",
      startDate: "2024-04-15",
      institution: "Data Science Academy",
      maxStudents: 15,
    },
    {
      title: "Numerical Methods in MATLAB",
      instructor: "Birhanu Asmerom",
      duration: "6 weeks",
      level: "Advanced",
      description:
        "Advanced numerical methods and their implementation in MATLAB for scientific computing.",
      topics: [
        "Numerical Analysis",
        "MATLAB",
        "Scientific Computing",
        "Optimization",
      ],
      enrollmentUrl: "/courses/numerical-matlab",
      startDate: "2024-05-01",
      institution: "Data Science Academy",
      maxStudents: 25,
    },
    {
      title: "Python Programming",
      instructor: "Birhanu Asmerom",
      duration: "8 weeks",
      level: "Beginner",
      description:
        "Comprehensive Python programming course covering fundamentals to advanced concepts.",
      topics: ["Python Basics", "Data Structures", "OOP", "Web Development"],
      enrollmentUrl: "/courses/python",
      startDate: "2024-05-15",
      institution: "Data Science Academy",
      maxStudents: 30,
    },
    {
      title: "QGIS for Geospatial Analysis",
      instructor: "Birhanu Asmerom",
      duration: "6 weeks",
      level: "Intermediate",
      description: "Learn geospatial analysis and mapping using QGIS software.",
      topics: ["QGIS", "GIS", "Spatial Analysis", "Mapping"],
      enrollmentUrl: "/courses/qgis",
      startDate: "2024-06-01",
      institution: "Data Science Academy",
      maxStudents: 20,
    },
    {
      title: "Introduction to Remote Sensing",
      instructor: "Birhanu Asmerom",
      duration: "8 weeks",
      level: "Beginner",
      description:
        "Introduction to remote sensing principles and applications in environmental monitoring.",
      topics: [
        "Remote Sensing",
        "Satellite Imagery",
        "Image Processing",
        "Applications",
      ],
      enrollmentUrl: "/courses/intro-remote-sensing",
      startDate: "2024-06-15",
      institution: "Data Science Academy",
      maxStudents: 25,
    },
    {
      title: "Google Earth Engine for Environmental Monitoring",
      instructor: "Birhanu Asmerom",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      description:
        "Learn how to use Google Earth Engine for large-scale environmental monitoring and geospatial analysis. Covers remote sensing, satellite data processing, and AI applications for real-world environmental challenges.",
      topics: [
        "Google Earth Engine",
        "Remote Sensing",
        "Environmental Monitoring",
        "AI Applications",
      ],
      enrollmentUrl: "/gee-course-preview",
      startDate: "2024-07-01",
      institution: "Data Science Academy",
      maxStudents: 30,
    },
  ];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Enhance your skills with our comprehensive training programs</p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-grid-item">
            <CoursePreview course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
