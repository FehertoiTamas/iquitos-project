import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

function Support() {
  const { t } = useTranslation();

  return (
    <section className="support" id="support">
      <ScrollAnimation className="support-content">
        <h2>{t("support.title")}</h2>
        <div className="support-options">
          <div className="support-option">
            <h3>{t("support.donation")}</h3>
            <p>{t("support.donationDescription")}</p>
          </div>
          <div className="support-option">
            <h3>{t("support.volunteer")}</h3>
            <p>{t("support.volunteerDescription")}</p>
          </div>
          <div className="support-option">
            <h3>{t("support.tourism")}</h3>
            <p>{t("support.tourismDescription")}</p>
          </div>
        </div>
        <button className="support-btn">{t("support.cta")}</button>
      </ScrollAnimation>
    </section>
  );
}

export default Support;
