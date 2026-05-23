import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// Keep CSS for pseudo-elements, hover/focus effects, and media queries
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      console.log("EmailJS initialized successfully");
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

  const sendConfirmation = async (senderEmail, senderName, messageDetails) => {
    try {
      console.log("Attempting to send confirmation email to:", senderEmail);

      const confirmationMessage = `
Dear ${senderName},

Thank you for contacting Wollo University Physics Department. We have received your message and will get back to you as soon as possible.

Your message details:
------------------
Subject: ${messageDetails.subject || "No subject provided"}
Date: ${new Date().toLocaleString()}

Message:
------------------
${messageDetails.message || "No message provided"}

Best regards,
Wollo University Physics Department
      `.trim();

      const confirmationParams = {
        to_email: senderEmail,
        from_name: "Wollo University Physics Department",
        from_email: "birhekobo@yahoo.com",
        subject: "Message Received - Wollo University Physics Department",
        message: confirmationMessage,
        reply_to: "birhephyics@gmail.com",
      };

      console.log("Sending email with params:", {
        to: senderEmail,
        from: "birhekobo@yahoo.com",
        subject: confirmationParams.subject,
      });

      const result = await emailjs.send(
        "service_xxtwbzl",
        "template_bzf2xi7",
        confirmationParams
      );

      console.log("Email send result:", result);

      if (result.status !== 200) {
        throw new Error("Failed to send confirmation email");
      }

      return true;
    } catch (error) {
      console.error("Error sending confirmation:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails("");

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorDetails("Please enter a valid email address");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.name || !formData.email) {
      setErrorDetails("Name and email are required fields");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!isEmailJSInitialized) {
      setErrorDetails(
        "Email service is not properly initialized. Please refresh the page and try again."
      );
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Starting email submission process");
      console.log("Form data:", formData);

      // Send confirmation email to the sender
      await sendConfirmation(formData.email, formData.name, {
        subject: formData.subject,
        message: formData.message,
      });

      console.log("Email sent successfully");
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
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
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          Have questions about our courses or services? We're here to help.
          Reach out to us through any of the following channels or fill out the
          contact form below.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>
                  <strong>Email:</strong>
                </p>
                <a href="mailto:birhephyics@gmail.com">birhephyics@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>
                  <strong>Phone:</strong>
                </p>
                <p>+251-903-179-177</p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Location</h3>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>
                  Department of Physics
                  <br />
                  College of Natural and Computational Sciences
                  <br />
                  Wollo University
                  <br />
                  P.O. Box: 1145
                  <br />
                  Dessie, Ethiopia
                </p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          {submitStatus === "success" ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Thank you for your message! We'll get back to you soon.</p>
              <p className="auto-response-note">
                A confirmation email has been sent to your email address.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {submitStatus === "error" && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>
                    There was an error submitting your message. Please try again
                    or contact us directly.
                  </p>
                  {errorDetails && (
                    <p className="error-details">{errorDetails}</p>
                  )}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email Address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
