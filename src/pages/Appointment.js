import React from "react";
import Base from "../base/Base";
import Navbar from "../components/Navbar";

const Appointment = () => {
  return (
    <Base>
      <Navbar />
      <section className="appointment_section">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScNCw5dH8hedXIAYBlYZOrqPgsxHO_Kr3Q1IXExBRldTT9dTQ/viewform?embedded=true"
          className="appointment_form"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="google_form"
        >
          Loading…
        </iframe>
      </section>
    </Base>
  );
};

export default Appointment;
