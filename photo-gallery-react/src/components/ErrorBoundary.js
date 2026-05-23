import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Gallery error boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <p className="error-message">
            Something went wrong displaying the gallery. Please refresh the
            page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
