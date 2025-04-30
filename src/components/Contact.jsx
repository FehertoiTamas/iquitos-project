import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>{t("contact.title")}</h2>
        <div className="contact-info">
          <div className="contact-details">
            <h3>{t("contact.getInTouch")}</h3>
            <p>{t("contact.email")}</p>
            <p>{t("contact.phone")}</p>
            <div className="social-links">
              <a
                href={t("contact.facebook")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href={t("contact.instagram")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href={t("contact.whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Village Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63699.97580958787!2d-73.32458723454177!3d-3.7559949276919617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea10b0e440c1cb%3A0x9210b8d7040a6692!2sIquitos!5e0!3m2!1shu!2spe!4v1746025652928!5m2!1shu!2spe"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
