import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t("hero.title")}</h1>
        <p className="subtitle">{t("hero.subtitle")}</p>
        <button className="explore-btn">{t("hero.explore")}</button>
      </div>
    </section>
  );
}

export default Hero;
