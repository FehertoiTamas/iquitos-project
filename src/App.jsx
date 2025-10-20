import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Culture from "./components/Culture";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="app">
        <header>
          <div className="header-logo">
            <img src="/images/logo.webp" alt="Kamungo Lodge" />
          </div>
          <Navigation />
          <LanguageSwitcher />
        </header>
        <main>
          <Hero />
          <About />
          <Programs />
          <Culture />
          <Gallery />
          <Support />
          <Contact />
        </main>
        <footer>
          <p>{t("footer.copyright")}</p>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
