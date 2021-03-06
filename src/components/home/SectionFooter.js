import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";

const SectionFooter = ({ styles }) => {
  const [ele5, setEle5] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 3400) {
        if (ele5 === false) {
          setEle5(true);
        }
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <section className="color_section_5">
      <section className="main_content_sub_section_heading main_content_sub_section_g">
        <div className="right d-flex d-sm-none mt-3">
          {ele5 && (
            <img
              className={css(styles.fadeInRight)}
              src="https://res.cloudinary.com/purnesh/image/upload/v1658301117/1-min_1_pck8kg.jpg"
              alt="Night View"
            />
          )}
        </div>
        <div className="left">
          {ele5 && (
            <h1 className={css(styles.fadeInLeft) + " footer_h1"}>
              Immerse yourself in the abundance of the nature. Open skies, vast
              greenery and calming water. Within the Clear skies a beautiful
              galaxy awaits to be explored. A firefly dance not to be missed. In
              solitude, together and forever. Those summer nights!!!
            </h1>
          )}
        </div>
        <div className="right d-none d-sm-flex ">
          {ele5 && (
            <img
              className={css(styles.fadeInRight)}
              src="https://res.cloudinary.com/purnesh/image/upload/v1658301117/1-min_1_pck8kg.jpg"
              alt="Night View"
              loading="lazy"
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default memo(SectionFooter);
