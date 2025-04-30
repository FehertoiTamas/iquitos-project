import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

function About() {
  const { t } = useTranslation();

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
          <p>{t("about.description")}</p>
        </div>
        <div className="about-gallery">
          <img src="/images/village-1.webp" alt={t("about.images.1")} />
          <img src="/images/village-2.webp" alt={t("about.images.2")} />
          <img src="/images/village-3.webp" alt={t("about.images.3")} />
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default About;
