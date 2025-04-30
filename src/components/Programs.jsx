import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import "./Programs.css";

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: "jungle_trek",
      icon: "/images/jungle-trek.webp",
      duration: "3-4 hours",
      difficulty: "medium",
      price: "$50",
    },
    {
      id: "piranha_fishing",
      icon: "/images/piranha-fishing.webp",
      duration: "2-3 hours",
      difficulty: "easy",
      price: "$40",
    },
    {
      id: "dolphin_swim",
      icon: "/images/dolphin-swim.webp",
      duration: "4-5 hours",
      difficulty: "easy",
      price: "$60",
    },
    {
      id: "campfire",
      icon: "/images/campfire.webp",
      duration: "2 hours",
      difficulty: "easy",
      price: "$30",
    },
    {
      id: "bird_watching",
      icon: "/images/bird-watching.webp",
      duration: "3 hours",
      difficulty: "easy",
      price: "$45",
    },
    {
      id: "canoe_tour",
      icon: "/images/canoe-tour.webp",
      duration: "2-3 hours",
      difficulty: "medium",
      price: "$40",
    },
  ];

  return (
    <section className="programs-section" id="programs">
      <ScrollAnimation className="programs-container">
        <h2 className="programs-title">{t("programs.title")}</h2>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <motion.img
                src={program.icon}
                alt={t(`programs.items.${program.id}.title`)}
                className="program-icon"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {t(`programs.items.${program.id}.title`)}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {t(`programs.items.${program.id}.description`)}
              </motion.p>
              <motion.div
                className="program-details"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                <span className="duration">⏱️ {program.duration}</span>
                <span className="difficulty">🏃 {program.difficulty}</span>
                <span className="price">💰 {program.price}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Programs;
