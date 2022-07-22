import React, { memo, useState, useEffect } from "react";
import { css } from "aphrodite";

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
          <div className="right_image_1">
            {ele && (
              <img
                className={css(styles.fadeInRight)}
                src="https://res.cloudinary.com/purnesh/image/upload/v1658466458/WhatsApp_Image_2022-07-21_at_10.05.25_AM_ngrj4z.jpg"
                alt="River View"
                loading="lazy"
              />
            )}
          </div>
          <div className="right_image_2">
            {ele && (
              <img
                className={css(styles.fadeInRight)}
                src="https://res.cloudinary.com/purnesh/image/upload/v1658466459/WhatsApp_Image_2022-07-21_at_10.30.28_AM_av3ls8.jpg"
                alt="River View"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default memo(SectionHeader);
// {ele && (
//   <img
//     className={css(styles.fadeInRight)}
//     src="https://res.cloudinary.com/purnesh/image/upload/v1658301120/6-min_la1f5g.jpg"
//     alt="River View"
//     loading="lazy"
//   />
// )}
