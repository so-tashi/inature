import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";
import { Link } from "react-router-dom";

const Section3 = ({ styles }) => {
  const [ele4, setEle4] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 2400) setEle4(true);
    });
  }, []);
  return (
    <section className="color_section_4">
      <section className="main_content_sub_section_3  main_content_sub_section_g ">
        <div className="left">
          <div className="image_1">
            {ele4 && (
              <img
                className={css(styles.fadeInRight)}
                src={require("../../assets/images/sunrise/1.jpeg")}
                alt="Nature"
              />
            )}
          </div>
          <div className="image_2">
            {ele4 && (
              <img
                className={css(styles.fadeInLeft)}
                src={require("../../assets/images/sunset/11.jpeg")}
                alt="Pond with house"
              />
            )}
          </div>
        </div>
        <div className="right">
          {ele4 && (
            <>
              <h1 className={css(styles.fadeInDown)}>Restoration</h1>
              <p className={css(styles.fadeInUp)}>
                Discover new sleep meditation. The music of nature on the banks
                of the river will put you into a sound sleep cycle leading to
                restorative benefits of the natural world.
              </p>
              <Link
                className={css(styles.fadeInUp) + " link"}
                to={`/${"restoration"}`}
              >
                More Images <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default memo(Section3);
