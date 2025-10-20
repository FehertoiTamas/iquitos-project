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
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`} role="menubar">
        <li role="none">
          <a
            onClick={() => scrollToSection("about")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("about")}
          >
            {t("nav.about")}
          </a>
        </li>
        <li role="none">
          <a
            onClick={() => scrollToSection("programs")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("programs")}
          >
            {t("nav.programs")}
          </a>
        </li>
        <li role="none">
          <a
            onClick={() => scrollToSection("culture")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("culture")}
          >
            {t("nav.culture")}
          </a>
        </li>
        <li role="none">
          <a
            onClick={() => scrollToSection("gallery")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("gallery")}
          >
            {t("nav.gallery")}
          </a>
        </li>
        <li role="none">
          <a
            onClick={() => scrollToSection("support")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("support")}
          >
            {t("nav.support")}
          </a>
        </li>
        <li role="none">
          <a
            onClick={() => scrollToSection("contact")}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("contact")}
          >
            {t("nav.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
