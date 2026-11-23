
"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  const content = {
    id: {
      nav: ["Beranda", "Paket Wisata", "Galeri", "Tentang Kami", "Kontak"],
      eyebrow: "JELAJAHI KEINDAHAN JAWA TIMUR",
      title: "Bromo Sunrise",
      subtitle: "Awali pagi dengan pengalaman luar biasa.",
      description:
        "Nikmati pesona matahari terbit, lautan pasir, dan keindahan Gunung Bromo bersama Malang Time Adventure.",
      book: "Pesan Sekarang",
      explore: "Jelajahi Paket",
      packagesEyebrow: "PILIH PETUALANGANMU",
      packagesTitle: "Paket Wisata Bromo",
      packagesDesc:
        "Temukan perjalanan yang sesuai dengan gaya petualanganmu.",
      privateDesc: "Perjalanan eksklusif dengan kendaraan dan layanan privat.",
      sharingDesc: "Nikmati pengalaman Bromo bersama wisatawan lainnya.",
      customDesc: "Atur perjalanan sesuai kebutuhan dan destinasi pilihanmu.",
      detail: "Tanya Paket",
      galleryEyebrow: "MOMEN TAK TERLUPAKAN",
      galleryTitle: "Keindahan Bromo",
      galleryDesc: "Setiap sudut Bromo menyimpan cerita yang istimewa.",
      aboutEyebrow: "TENTANG KAMI",
      aboutTitle: "Perjalanan yang Lebih Berkesan",
      aboutDesc:
        "Malang Time Adventure hadir untuk menemani perjalanan Anda menjelajahi keindahan Gunung Bromo dan destinasi menarik di Jawa Timur. Kami mengutamakan kenyamanan, pengalaman, dan pelayanan yang ramah.",
      contactEyebrow: "MULAI PETUALANGANMU",
      contactTitle: "Bromo Menantimu",
      contactDesc:
        "Hubungi kami untuk mendapatkan informasi paket dan merencanakan perjalanan Bromo Anda.",
      contactButton: "Hubungi via WhatsApp",
      footer: "Temukan pengalaman perjalanan yang tak terlupakan.",
      rights: "Hak cipta dilindungi.",
    },
    en: {
      nav: ["Home", "Packages", "Gallery", "About Us", "Contact"],
      eyebrow: "EXPLORE THE BEAUTY OF EAST JAVA",
      title: "Bromo Sunrise",
      subtitle: "Begin your morning with an extraordinary experience.",
      description:
        "Experience the sunrise, sea of sand, and breathtaking Mount Bromo with Malang Time Adventure.",
      book: "Book Now",
      explore: "Explore Packages",
      packagesEyebrow: "CHOOSE YOUR ADVENTURE",
      packagesTitle: "Bromo Tour Packages",
      packagesDesc: "Find the journey that matches your travel style.",
      privateDesc: "An exclusive journey with private transportation and service.",
      sharingDesc: "Experience Bromo together with fellow travelers.",
      customDesc: "Customize your journey around your preferred destinations.",
      detail: "Ask About This Package",
      galleryEyebrow: "UNFORGETTABLE MOMENTS",
      galleryTitle: "The Beauty of Bromo",
      galleryDesc: "Every corner of Bromo has a story to tell.",
      aboutEyebrow: "ABOUT US",
      aboutTitle: "A More Meaningful Journey",
      aboutDesc:
        "Malang Time Adventure is here to accompany you in exploring the beauty of Mount Bromo and remarkable destinations across East Java. We focus on comfort, memorable experiences, and friendly service.",
      contactEyebrow: "START YOUR ADVENTURE",
      contactTitle: "Bromo Is Calling",
      contactDesc:
        "Contact us for tour package information and start planning your Bromo journey.",
      contactButton: "Contact via WhatsApp",
      footer: "Discover an unforgettable travel experience.",
      rights: "All rights reserved.",
    },
  };

  const t = content[language];

  const whatsappLink = (message: string) =>
    `https://wa.me/6285855500010?text=${encodeURIComponent(message)}`;

  const packages = [
    {
      category: "PRIVATE TRIP",
      title: "Private Bromo Sunrise",
      description: t.privateDesc,
      type: "private",
    },
    {
      category: "SHARING TRIP",
      title: "Bromo Sharing Trip",
      description: t.sharingDesc,
      type: "sharing",
    },
    {
      category: "CUSTOM TRIP",
      title: "Custom Bromo Trip",
      description: t.customDesc,
      type: "custom",
    },
  ];

  const gallery = [
    { title: "Golden Sunrise", className: "gallery-one" },
    { title: "Mount Bromo", className: "gallery-two" },
    { title: "Sea of Sand", className: "gallery-three" },
  ];

  return (
    <>
      <main className="hero" id="home">
        <div className="hero-overlay" />

        <header className="navbar">
          <a href="#home" className="brand">
            <span className="brand-icon">▲</span>
            <span className="brand-name">
              MALANG
              <strong>TIME ADVENTURE</strong>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#home">{t.nav[0]}</a>
            <a href="#packages">{t.nav[1]}</a>
            <a href="#gallery">{t.nav[2]}</a>
            <a href="#about">{t.nav[3]}</a>
            <a href="#contact">{t.nav[4]}</a>
          </nav>

          <div className="language-switch">
            <button
              className={language === "id" ? "active" : ""}
              onClick={() => setLanguage("id")}
            >
              ID
            </button>
            <span>/</span>
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </header>

        <section className="hero-content">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.description}</p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappLink(
                language === "id"
                  ? "Halo Malang Time Adventure, saya ingin memesan wisata Bromo."
                  : "Hello Malang Time Adventure, I would like to book a Bromo tour."
              )}
              target="_blank"
              rel="noreferrer"
            >
              {t.book} <span>↗</span>
            </a>

            <a className="btn btn-outline" href="#packages">
              {t.explore} <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <span>01 — MOUNT BROMO, EAST JAVA</span>
          </div>
        </section>

        <div className="hero-bottom">
          <span>ADVENTURE · EXPERIENCE · DISCOVER</span>
          <a href="#packages">SCROLL TO EXPLORE ↓</a>
        </div>
      </main>

      <section id="packages" className="section packages-section">
        <div className="section-heading">
          <span className="section-eyebrow">{t.packagesEyebrow}</span>
          <h2>{t.packagesTitle}</h2>
          <p>{t.packagesDesc}</p>
        </div>

        <div className="package-grid">
          {packages.map((item, index) => (
            <article className="package-card" key={item.type}>
              <div className={`package-image package-image-${index + 1}`}>
                <span>{item.category}</span>
              </div>

              <div className="package-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={whatsappLink(
                    `Halo Malang Time Adventure, saya ingin bertanya tentang ${item.title}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detail} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading">
          <span className="section-eyebrow">{t.galleryEyebrow}</span>
          <h2>{t.galleryTitle}</h2>
          <p>{t.galleryDesc}</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className={`gallery-item ${item.className}`} key={item.title}>
              <span className="gallery-number">0{index + 1}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-image">
          <div className="about-image-label">MALANG TIME ADVENTURE</div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow">{t.aboutEyebrow}</span>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutDesc}</p>
          <a className="text-link" href="#contact">
            {t.contactButton} <span>↗</span>
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <span className="section-eyebrow">{t.contactEyebrow}</span>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactDesc}</p>
        <a
          className="btn btn-primary"
          href={whatsappLink(
            language === "id"
              ? "Halo Malang Time Adventure, saya ingin mendapatkan informasi wisata Bromo."
              : "Hello Malang Time Adventure, I would like information about Bromo tours."
          )}
          target="_blank"
          rel="noreferrer"
        >
          {t.contactButton} <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">▲</span>
          <span className="brand-name">
            MALANG
            <strong>TIME ADVENTURE</strong>
          </span>
        </a>

        <p>{t.footer}</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MALANG TIME ADVENTURE. {t.rights}</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
