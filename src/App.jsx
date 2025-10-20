import { Suspense, useState, useEffect, lazy } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

// Lazy load komponensek
const About = lazy(() => import("./components/About"));
const Programs = lazy(() => import("./components/Programs"));
const Culture = lazy(() => import("./components/Culture"));
const Gallery = lazy(() => import("./components/Gallery"));
const Support = lazy(() => import("./components/Support"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const { t } = useTranslation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <div className="app">
        <header
          className={isHeaderVisible ? "visible" : "hidden"}
          role="banner"
        >
          <div className="header-logo">
            <img
              src="/images/logo.webp"
              alt="Kamungo Lodge - Amazon Rainforest Experience"
              width="60"
              height="60"
            />
          </div>
          <Navigation />
          <LanguageSwitcher />
        </header>
        <main role="main">
          <Hero />
          <Suspense
            fallback={<div className="section-loading">Loading...</div>}
          >
            <About />
            <Programs />
            <Culture />
            <Gallery />
            <Support />
            <Contact />
          </Suspense>
        </main>
        <footer role="contentinfo">
          <p>{t("footer.copyright")}</p>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
