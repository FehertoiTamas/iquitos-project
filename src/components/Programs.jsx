import React, { useState, useRef, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";
import "./Programs.css";

const Programs = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const programs = useMemo(
    () => [
      {
        id: "jungle_trek",
        icon: "/images/jungle-trek.webp",
        duration: "3-4",
        difficulty: "medium",
        price: "50",
      },
      {
        id: "piranha_fishing",
        icon: "/images/piranha-fishing.webp",
        duration: "2-3",
        difficulty: "easy",
        price: "40",
      },
      {
        id: "dolphin_swim",
        icon: "/images/dolphin-swim.webp",
        duration: "4-5",
        difficulty: "easy",
        price: "60",
      },
      {
        id: "campfire",
        icon: "/images/campfire.webp",
        duration: "2",
        difficulty: "easy",
        price: "30",
      },
      {
        id: "bird_watching",
        icon: "/images/bird-watching.webp",
        duration: "3",
        difficulty: "easy",
        price: "45",
      },
      {
        id: "canoe_tour",
        icon: "/images/canoe-tour.webp",
        duration: "2-3",
        difficulty: "medium",
        price: "40",
      },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const isMobile = window.innerWidth <= 768;
      const cardWidth = isMobile ? containerWidth : (containerWidth - 4) / 3;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="programs-section" id="programs">
      <ScrollAnimation className="programs-container">
        <h2 className="programs-title">{t("programs.title")}</h2>

        <div className="programs-navigation">
          {showLeftArrow && (
            <button
              className="nav-arrow left"
              onClick={() => scroll("left")}
              aria-label="Previous programs"
            >
              &lt;
            </button>
          )}

          <div
            className="programs-grid"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <img
                  src={program.icon}
                  alt={t(`programs.items.${program.id}.title`)}
                  className="program-icon"
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
                <h3>{t(`programs.items.${program.id}.title`)}</h3>
                <p>{t(`programs.items.${program.id}.description`)}</p>
                <div className="program-details">
                  <span className="duration">
                    ⏱️ {t("programs.hours", { count: program.duration })}
                  </span>
                  <span className="difficulty">
                    🏃 {t(`programs.difficulty.${program.difficulty}`)}
                  </span>
                  <span className="price">
                    💰 {t("programs.price", { price: program.price })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              className="nav-arrow right"
              onClick={() => scroll("right")}
              aria-label="Next programs"
            >
              &gt;
            </button>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Programs;
