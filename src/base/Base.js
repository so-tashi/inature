import React from "react";
import Footer from "../components/Footer";

const Base = ({ children }) => {
  return (
    <section className="container-fluid">
      {children}
      <Footer />
    </section>
  );
};

export default Base;
