import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Enrollment.css";

const Enrollment = ({ courseTitle, isContactForm = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState("");
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: "uoIXcV2Kyd-ubeJ8a",
        limitRate: true,
      });
      setIsEmailJSInitialized(true);
      console.log(
        "EmailJS initialized successfully with public key: uoIXcV2Kyd-ubeJ8a"
      );
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
      setIsEmailJSInitialized(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails("");

    // Validate required fields
    if (!formData.name || !formData.email) {
      setErrorDetails("Name and email are required fields");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Check if EmailJS is initialized
    if (!isEmailJSInitialized) {
      setErrorDetails(
        "Email service is not properly initialized. Please refresh the page and try again."
      );
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create a formatted message with sender information
      const formattedMessage = `
${isContactForm ? "New Contact Request" : "New Enrollment Request"}

Sender Information:
------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Organization: ${formData.organization || "Not provided"}

${!isContactForm ? `Course: ${courseTitle || "Course Enrollment"}\n` : ""}

Message:
------------------
${formData.message || "No additional message provided"}
      `.trim();

      // Prepare the email template parameters
      const templateParams = {
        to_email: "birhekobo@yahoo.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: isContactForm
          ? `[CONTACT] New message from ${formData.name}`
          : `[ENROLLMENT] New request from ${formData.name} - ${
              courseTitle || "Course Enrollment"
            }`,
        course_title: courseTitle || "Course Enrollment",
        phone: formData.phone,
        organization: formData.organization,
        message: formattedMessage,
        reply_to: formData.email,
      };

      // Log email details
      console.log("Email Details:", {
        From: `${formData.name} <${formData.email}>`,
        To: "birhekobo@yahoo.com",
        Subject: templateParams.subject,
        Organization: formData.organization || "Not provided",
        Phone: formData.phone || "Not provided",
        Message: formattedMessage,
      });

      console.log("Email configuration:", {
        serviceID: "service_xxtwbzl",
        templateID: "template_bzf2xi7",
        params: templateParams,
      });

      // Verify EmailJS configuration
      if (!templateParams.to_email || !templateParams.from_email) {
        throw new Error("Missing required email parameters");
      }

      // Send the email using EmailJS
      const response = await emailjs.send(
        "service_xxtwbzl",
        "template_bzf2xi7",
        templateParams
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Detailed error:", error);
      let errorMessage = "An error occurred while sending the email. ";

      if (error.text) {
        errorMessage += `EmailJS error: ${error.text}`;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage +=
          "Please check your EmailJS configuration and try again.";
      }

      setErrorDetails(errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enrollment-container">
      <h2>{isContactForm ? "Contact Us" : `Enroll in ${courseTitle}`}</h2>
      {submitStatus === "success" && (
        <div className="success-message">
          {isContactForm
            ? "Thank you for your message! We will get back to you shortly."
            : "Thank you for your enrollment! We will contact you shortly with further details."}
        </div>
      )}
      {submitStatus === "error" && (
        <div className="error-message">
          There was an error submitting your{" "}
          {isContactForm ? "message" : "enrollment"}. Please try again or
          contact us directly at birhekobo@yahoo.com
          {errorDetails && (
            <p className="error-details">Error details: {errorDetails}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="enrollment-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization/Institution</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            {isContactForm ? "Your Message" : "Additional Information"}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting
            ? "Submitting..."
            : isContactForm
            ? "Send Message"
            : "Submit Enrollment"}
        </button>
      </form>
    </div>
  );
};

export default Enrollment;
