import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <ScrollAnimation className="about-content">
        <h2>{t("about.title")}</h2>
        <div className="about-text">
          <p>{t("about.description")}</p>
        </div>
        <div className="about-gallery">
          <img src="/images/village-1.jpg" alt={t("about.images.1")} />
          <img src="/images/village-2.jpg" alt={t("about.images.2")} />
          <img src="/images/village-3.jpg" alt={t("about.images.3")} />
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default About;
