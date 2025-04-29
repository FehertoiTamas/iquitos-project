import { useTranslation } from "react-i18next";

function Culture() {
  const { t } = useTranslation();

  return (
    <section className="culture" id="culture">
      <div className="culture-content">
        <h2>{t("culture.title")}</h2>
        <div className="culture-grid">
          <div className="culture-item">
            <img src="/images/traditional-food.jpg" alt={t("culture.food")} />
            <h3>{t("culture.food")}</h3>
            <p>{t("culture.foodDescription")}</p>
          </div>
          <div className="culture-item">
            <img src="/images/music.jpg" alt={t("culture.music")} />
            <h3>{t("culture.music")}</h3>
            <p>{t("culture.musicDescription")}</p>
          </div>
          <div className="culture-item">
            <img src="/images/crafts.jpg" alt={t("culture.crafts")} />
            <h3>{t("culture.crafts")}</h3>
            <p>{t("culture.craftsDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
