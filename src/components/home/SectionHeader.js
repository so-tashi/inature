import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";
import MAINPAGE from "../../assets/images/mainpage.jpeg";

const SectionHeader = ({ styles }) => {
  const [ele, setEle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        if (ele === false) {
          setEle(true);
        }
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <section className="color_section_1">
      <section className="main_content_sub_section_heading main_content_sub_section_g">
        <div className="left">
          {ele && (
            <h1 className={css(styles.fadeInLeft)}>
              Experience moments of grounding, exploration and restoration-
              designed to return you to the wild.
            </h1>
          )}
        </div>
        <div className="right">
          {ele && (
            <img
              className={css(styles.fadeInRight)}
              src={MAINPAGE}
              alt="River View"
              loading="lazy"
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default memo(SectionHeader);
