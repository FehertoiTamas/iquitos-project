import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

function Navigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav className="navigation">
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a onClick={() => scrollToSection("about")}>{t("nav.about")}</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("programs")}>{t("nav.programs")}</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("culture")}>{t("nav.culture")}</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("gallery")}>{t("nav.gallery")}</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("support")}>{t("nav.support")}</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>{t("nav.contact")}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
