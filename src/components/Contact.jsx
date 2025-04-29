import { useTranslation } from "react-i18next";

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
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Village Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789012!2d-73.12345678901234!3d-3.1234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnMjQuNCJTIDczwrAwNycxMi4wIlc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
