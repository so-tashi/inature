import React, { memo } from "react";
import Base from "../base/Base";
import Navbar from "../components/Navbar";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeInDown,
} from "react-animations";
import { StyleSheet, css } from "aphrodite";
import SectionHeader from "../components/home/SectionHeader";
import Section3 from "../components/home/Section3";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import SectionFooter from "../components/home/SectionFooter";

const Home = () => {
  return (
    <Base>
      <section className="custom-header">
        <Navbar />
        <div className="header_title_container d-flex ">
          <h1 className={"header_title " + css(styles.fadeInUp)}>
            Reprogramming your subconsious mind is how you take your life and
            power back
          </h1>
        </div>
      </section>
      <section className="main_content_section">
        <SectionHeader styles={styles} />
        <Section1 styles={styles} />
        <Section2 styles={styles} />
        <Section3 styles={styles} />
        <SectionFooter styles={styles} />
      </section>
    </Base>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "2s",
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "2s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "2s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "2s",
  },
});
