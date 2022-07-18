import React from "react";
import Base from "../base/Base";
import Navbar from "../components/Navbar";
import HEADER from "../assets/images/aboutus_header_2.jpeg";

const AboutUs = () => {
  return (
    <Base>
      <Navbar />
      <section className="about_us_section">
        <section className="about_us_content">
          <div className="about_us_content_images">
            <img
              loading="lazy"
              src={HEADER}
              alt="right side is a river and left side is a night view"
            />
          </div>
          <div className="about_us_content_text">
            <p>
              We often think wild as a place too distant from the energy of the
              city, home to the sublime and supernatural.
            </p>
            <p>
              Wild is also a state of being, we want you to remember how to be
              wild as a wildflower does in the wilderness. Blossom carefree!!!
            </p>
            <br />
            <p>
              The rivers edge is a nature paradise untouched by concrete and
              cosmetics.
            </p>
            <br />
            <p>
              Inature will take you back into a time capsule where you will
              experience a fully expressed yet humble version of yourself.
            </p>
            <br />
            <p>
              Inature will bridge the gap you been longing for so long. A void
              which is filled with the Inature experience.
            </p>
            <p>
              Touch the soil, dig the soil, plant the seeds and comeback again
              to the see the colours you have planted.
            </p>
            <p>
              An experience to grow your own garden of organic vegetables and
              flowers.
            </p>
            <p>
              A wellness beyond imagination all RAW where mind is very kind.
            </p>
            <p>A rejuvenation spot you been seeking is here to unwind.</p>
            <p>Yes!!! the rest is all secrets for you to discover.</p>
            <p>Fall in love again and this time you are priority number one.</p>
          </div>
        </section>
      </section>
    </Base>
  );
};

export default AboutUs;
