import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";
// import { Link } from "react-router-dom";

const Section1 = ({ styles }) => {
  const [ele2, setEle2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 900) setEle2(true);
    });
  }, []);
  return (
    <section className="color_section_2">
      <section className="main_content_sub_section_1 main_content_sub_section_g ">
        <div className="left">
          <div className="image_1">
            {ele2 && (
              <img
                className={css(styles.fadeInRight)}
                src={require("../../assets/images/camping/9.jpeg")}
                alt="Nature"
              />
            )}
          </div>
          <div className="image_2">
            {ele2 && (
              <img
                className={css(styles.fadeInLeft)}
                src={require("../../assets/images/trails/9.jpeg")}
                alt="Pond with house"
              />
            )}
          </div>
        </div>
        <div className="right">
          {ele2 && (
            <>
              <h1 className={css(styles.fadeInDown)}>Grounding</h1>
              <p className={css(styles.fadeInUp)}>
                Getting away from the noise into the music of the nature. Where
                the time slows down your body and mind to make space for
                creativity and curiosity.
              </p>
              {/* <Link
                className={css(styles.fadeInUp) + " link"}
                to={`/${"grounding"}`}
              >
                More Images <i className="fas fa-long-arrow-alt-right"></i>
              </Link> */}
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default memo(Section1);
