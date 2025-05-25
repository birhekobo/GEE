import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css"; // Assuming App.css contains general layout styles like .App

const Layout = () => {
  return (
    <div className="App">
      {" "}
      {/* You can keep the App className here or move specific layout styles to a Layout.css */}
      <Header />
      <main className="main-content">
        {" "}
        {/* Added a class for better styling of the content area */}
        <Outlet /> {/* Routed components will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
