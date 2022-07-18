import React from "react";
import { Link, useLocation } from "react-router-dom";
import { fadeInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className={
        pathname === "/"
          ? "navbar navbar-expand-lg"
          : "navbar navbar-expand-lg nav_black"
      }
    >
      <div className="container-fluid custom-row">
        <div className="d-md-none d-flex  width-custom">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="Logo width-custom d-md-none d-flex">
          <Link className="logo-text" to="/">
            inature
          </Link>
        </div>
        <div className="width-custom d-md-none d-flex booking-container">
          <Link to="/appointment">
            <button className="booking-button">Book</button>
          </Link>
        </div>
        <div
          className="collapse navbar-collapse width-custom"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className={pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  pathname === "/aboutus" ? "nav-link active" : "nav-link"
                }
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="Logo width-custom d-none d-sm-flex">
          <div className={css(styles.fadeInUp)}>
            <Link className="logo-text" to="/">
              inature
            </Link>
          </div>
        </div>
        <div className="width-custom d-none d-sm-flex booking-container">
          <Link to="/appointment">
            <button className="booking-button">Book</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "2s",
  },
});
