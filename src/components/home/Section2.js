import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";
import { Link } from "react-router-dom";

const Section2 = ({ styles }) => {
  const [ele3, setEle3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1800) setEle3(true);
    });
  }, []);
  return (
    <section className="color_section_3">
      <section className="main_content_sub_section_2  main_content_sub_section_g ">
        <div className="right">
          {ele3 && (
            <>
              <h1 className={css(styles.fadeInDown)}>Exploration</h1>
              <p className={css(styles.fadeInUp)}>
                Starting your day with an opportunity to explore both outside
                and within. Enjoy the wildflower trails surrounded by the
                swaying Birch trees with a gentle breeze to the beautiful walk
                on the rivers edge.
              </p>
              <Link
                className={css(styles.fadeInUp) + " link"}
                to={`/${"exploration"}`}
              >
                More Images <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </>
          )}
        </div>
        <div className="left">
          <div className="image_1">
            {ele3 && (
              <img
                className={css(styles.fadeInRight)}
                src={require("../../assets/images/on_the_rivers_edge/7.jpeg")}
                alt="Nature"
              />
            )}
          </div>

          <div className="image_2">
            {ele3 && (
              <img
                className={css(styles.fadeInLeft)}
                src={require("../../assets/images/explore/1.jpeg")}
                alt="Nature"
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default memo(Section2);
