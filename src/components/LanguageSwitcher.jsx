import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage("es")}
        className={`language-btn ${i18n.language === "es" ? "active" : ""}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`language-btn ${i18n.language === "en" ? "active" : ""}`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
