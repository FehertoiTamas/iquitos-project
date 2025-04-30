import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

function Culture() {
  const { t } = useTranslation();

  return (
    <section className="culture" id="culture">
      <ScrollAnimation className="culture-content">
        <h2>{t("culture.title")}</h2>
        <div className="culture-grid">
          <div className="culture-item">
            <img src="/images/traditional-food.webp" alt={t("culture.food")} />
            <h3>{t("culture.food")}</h3>
            <p>{t("culture.foodDescription")}</p>
          </div>
          <div className="culture-item">
            <img src="/images/music.jpg" alt={t("culture.music")} />
            <h3>{t("culture.music")}</h3>
            <p>{t("culture.musicDescription")}</p>
          </div>
          <div className="culture-item">
            <img src="/images/crafts.webp" alt={t("culture.crafts")} />
            <h3>{t("culture.crafts")}</h3>
            <p>{t("culture.craftsDescription")}</p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Culture;
