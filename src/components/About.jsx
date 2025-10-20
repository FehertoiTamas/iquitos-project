import React from "react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";
import "./About.css";

function About() {
  const { t } = useTranslation();
  const description = t("about.description");

  return (
    <section className="about" id="about">
      <img
        src="/images/geometric.png"
        alt=""
        className="about-decoration left"
      />
      <img
        src="/images/geometric.png"
        alt=""
        className="about-decoration right"
      />
      <ScrollAnimation className="about-content">
        <h2>{t("about.title")}</h2>
        <div className="about-text">
          {description.split("\n\n").map((paragraph, index) => (
            <div key={index} className="paragraph-container">
              <p>{paragraph}</p>
              {index === 2 && (
                <div className="bird-image-container">
                  <img
                    src="/images/kamungo-bird.webp"
                    alt="Kamungo bird"
                    className="bird-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="audio-player">
                    <p className="audio-text">{t("about.audioText")}</p>
                    <audio
                      src="/sounds/sound_of_bird.mp3"
                      controls
                      className="bird-sound"
                      preload="none"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="about-gallery">
          <img
            src="/images/village-1.webp"
            alt={t("about.images.1")}
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/village-2.webp"
            alt={t("about.images.2")}
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/village-3.webp"
            alt={t("about.images.3")}
            loading="lazy"
            decoding="async"
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default About;
