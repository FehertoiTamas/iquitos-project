import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Hero from "./components/Hero";
import About from "./components/About";
import Culture from "./components/Culture";
import Support from "./components/Support";
import Contact from "./components/Contact";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="app">
        <header>
          <LanguageSwitcher />
        </header>
        <main>
          <Hero />
          <About />
          <Culture />
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
