
"use client";

import { useState } from "react";
import Image from "next/image";

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
      detailsLabel: "Lihat detail paket",
      routeTitle: "Detail Rute Perjalanan",
      tripInfoTitle: "Informasi Perjalanan",
      capacityLabel: "Kapasitas",
      hoursLabel: "Waktu operasional",
      meetingPointLabel: "Titik kumpul",
      includesTitle: "Fasilitas termasuk",
      destinationsTitle: "Rute & destinasi wisata",
      excludesTitle: "Belum termasuk",
      ticketNote:
        "Tiket masuk Taman Nasional Bromo Tengger Semeru (TNBTS) dibayar terpisah per orang.",
      ticketPriceTitle: "Harga tiket masuk TNBTS / orang",
      weekdayLabel: "Hari kerja (Senin–Jumat)",
      weekendLabel: "Akhir pekan & tanggal merah",
      priceLabel: "Harga paket",
      priceUnit: "per Jeep",
      destinations: [
        { name: "View Sunrise Point", description: "Menikmati matahari terbit dari sudut pandang Bromo." },
        { name: "Lembah Widodaren", description: "Melihat dinding batuan dan lanskap vulkanik yang eksotis." },
        { name: "Kawah Bromo", description: "Mendaki menuju bibir kawah aktif." },
        { name: "Pura Luhur Poten", description: "Mengunjungi pura suci masyarakat Tengger di kaki Bromo." },
        { name: "Pasir Berbisik", description: "Menyusuri hamparan lautan pasir yang luas." },
        { name: "Padang Savana & Bukit Teletubbies", description: "Menikmati savana dan perbukitan hijau Bromo." },
      ],
      inclusions: ["Sewa dan transportasi Jeep 4x4", "Driver Jeep profesional", "Bahan bakar minyak (BBM)"],
      privateDetailIntro:
        "Jelajahi sunrise dan lanskap Gunung Bromo dengan Jeep 4x4 Toyota Land Cruiser FJ40. Perjalanan privat ini memberi rombonganmu ruang untuk menikmati setiap destinasi dengan lebih leluasa.",
      openDetailIntro:
        "Nikmati rute sunrise Bromo dengan berbagi Jeep 4x4 bersama tamu lain. Open Trip cocok untuk solo traveler atau rombongan kecil yang ingin menikmati perjalanan bersama dengan biaya lebih hemat.",
      longJeepDetailIntro:
        "Jelajahi sunrise dan lautan pasir Bromo dengan private long Jeep yang lapang. Paket ini memberi ruang bagi rombongan hingga 10 orang untuk menikmati perjalanan bersama.",
      standardCapacity: "Maks. 5–6 orang / Jeep",
      longJeepCapacity: "Maks. 10 orang / Jeep",
      hoursValue: "01.00–11.00 WIB",
      meetingPointValue: "Tumpang, Malang",
      weekdayTicketPrice: "Rp 54.000",
      weekendTicketPrice: "Rp 79.000",
      privateTripDesc:
        "Satu jeep privat khusus untuk rombonganmu, tanpa digabung dengan tamu lain. Nikmati sunrise Bromo dengan waktu yang lebih leluasa untuk berhenti, berfoto, dan menikmati perjalanan bersama orang terdekat.",
      openTripDesc:
        "Berbagi perjalanan dalam satu jeep bersama tamu lain, dengan biaya yang lebih hemat dan suasana seru. Cocok untuk solo traveler atau siapa pun yang ingin mendapat teman baru selama menjelajahi Bromo.",
      longJeepDesc:
        "Nikmati private long jeep yang lapang untuk rombongan hingga 10 orang. Jelajahi sunrise dan lautan pasir Bromo bersama, dengan ruang lebih lega untuk duduk dan membawa perlengkapan.",
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
      detailsLabel: "View package details",
      routeTitle: "Journey details",
      tripInfoTitle: "Trip information",
      capacityLabel: "Capacity",
      hoursLabel: "Operating hours",
      meetingPointLabel: "Meeting point",
      includesTitle: "Included",
      destinationsTitle: "Route & destinations",
      excludesTitle: "Not included",
      ticketNote:
        "Bromo Tengger Semeru National Park (TNBTS) admission is paid separately per person.",
      ticketPriceTitle: "TNBTS admission / person",
      weekdayLabel: "Weekdays (Monday–Friday)",
      weekendLabel: "Weekends & public holidays",
      priceLabel: "Package price",
      priceUnit: "per Jeep",
      destinations: [
        { name: "Sunrise Viewpoint", description: "Watch the sunrise from a scenic Bromo viewpoint." },
        { name: "Widodaren Valley", description: "See Bromo's striking volcanic rock formations." },
        { name: "Mount Bromo Crater", description: "Hike up to the rim of the active crater." },
        { name: "Luhur Poten Temple", description: "Visit the sacred Tengger temple at the foot of Bromo." },
        { name: "Whispering Sands", description: "Cross Bromo's expansive sea of sand." },
        { name: "Savanna & Teletubbies Hill", description: "Take in Bromo's green grasslands and rolling hills." },
      ],
      inclusions: ["4x4 Jeep rental and transport", "Professional Jeep driver", "Fuel"],
      privateDetailIntro:
        "Explore Mount Bromo's sunrise and volcanic landscapes in a Toyota Land Cruiser FJ40 4x4 Jeep. This private trip gives your group more room to enjoy each stop at a relaxed pace.",
      openDetailIntro:
        "Enjoy Bromo's sunrise route while sharing a 4x4 Jeep with other guests. Open Trip is a great fit for solo travelers and small groups looking for a more affordable shared adventure.",
      longJeepDetailIntro:
        "Explore Bromo's sunrise and sea of sand in a spacious private long Jeep, with room for groups of up to 10 to enjoy the journey together.",
      standardCapacity: "Up to 5–6 people / Jeep",
      longJeepCapacity: "Up to 10 people / Jeep",
      hoursValue: "01:00–11:00 WIB",
      meetingPointValue: "Tumpang, Malang",
      weekdayTicketPrice: "Rp 54,000",
      weekendTicketPrice: "Rp 79,000",
      privateTripDesc:
        "Your own private jeep for your group, with no other guests joining the ride. Enjoy Bromo sunrise at a relaxed pace, with time to stop for photos and take in the journey together.",
      openTripDesc:
        "Share one jeep with fellow guests for a more budget-friendly, sociable Bromo adventure. Ideal for solo travelers or anyone hoping to meet new people along the way.",
      longJeepDesc:
        "Ride in a roomy private long jeep for groups of up to 10. Enjoy the sunrise and Bromo's sea of sand together, with more space for your group and gear.",
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
      title: "Private Trip",
      description: t.privateTripDesc,
      type: "private",
      image: "/images/package-private-trip.jpg",
      imageAlt:
        language === "id"
          ? "Jeep privat dan rombongan wisatawan menikmati sunrise di Gunung Bromo"
          : "A private jeep and its travel group enjoying sunrise at Mount Bromo",
      detailIntro: t.privateDetailIntro,
      capacity: t.standardCapacity,
      price: "Rp 1.500.000",
      priceUnit: t.priceUnit,
    },
    {
      category: "OPEN TRIP",
      title: "Open Trip",
      description: t.openTripDesc,
      type: "open",
      image: "/images/package-open-trip.jpg",
      imageAlt:
        language === "id"
          ? "Rombongan Open Trip menyaksikan matahari terbit di Gunung Bromo"
          : "An Open Trip group watching the sunrise at Mount Bromo",
      detailIntro: t.openDetailIntro,
      capacity: language === "id" ? "Maks. 5–6 orang / Jeep, berbagi" : "Up to 5–6 people / shared Jeep",
      price: "Rp 350.000",
      priceUnit: language === "id" ? "per orang" : "per person",
    },
    {
      category: "PRIVATE TRIP · LONG JEEP",
      title: "Private Trip Long Jeep",
      description: t.longJeepDesc,
      type: "long-jeep",
      image: "/images/package-long-jeep.jpg",
      imageAlt:
        language === "id"
          ? "Jeep panjang untuk wisata Bromo dengan kapasitas hingga 10 penumpang"
          : "A long jeep for Bromo tours with room for up to 10 passengers",
      detailIntro: t.longJeepDetailIntro,
      capacity: t.longJeepCapacity,
      price: "Rp 2.500.000",
      priceUnit: t.priceUnit,
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
        <Image
          className="hero-background"
          src="/images/bromo-hero.webp"
          alt="Sunrise Gunung Bromo dengan jeep wisata"
          fill
          preload
          sizes="100vw"
        />
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
              <div
                className={`package-image package-image-${index + 1}`}
              >
                <Image
                  className="package-photo"
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 650px) 90vw, (max-width: 900px) 45vw, 30vw"
                />
                <span>{item.category}</span>
              </div>

              <div className="package-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="package-price">
                  <span>{t.priceLabel}</span>
                  <strong>{item.price}</strong>
                  <small>{item.priceUnit}</small>
                </div>
                <a
                  href={whatsappLink(
                    language === "id"
                      ? `Halo Malang Time Adventure, saya ingin bertanya tentang paket ${item.title}.`
                      : `Hello Malang Time Adventure, I would like to ask about the ${item.title} package.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.detail} <span>↗</span>
                </a>
              </div>

              <details className="package-details">
                <summary>{t.detailsLabel}<span aria-hidden="true">+</span></summary>
                <div className="package-details-content">
                  <h4>{t.routeTitle}</h4>
                  <p>{item.detailIntro}</p>

                  <h4>{t.tripInfoTitle}</h4>
                  <dl className="trip-info-list">
                    <div><dt>{t.capacityLabel}</dt><dd>{item.capacity}</dd></div>
                    <div><dt>{t.hoursLabel}</dt><dd>{t.hoursValue}</dd></div>
                    <div><dt>{t.meetingPointLabel}</dt><dd>{t.meetingPointValue}</dd></div>
                  </dl>

                  <h4>{t.includesTitle}</h4>
                  <ul className="package-detail-list">
                    {t.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
                  </ul>

                  <h4>{t.destinationsTitle}</h4>
                  <ol className="package-destination-list">
                    {t.destinations.map((destination) => (
                      <li key={destination.name}>
                        <strong>{destination.name}</strong>
                        <span>{destination.description}</span>
                      </li>
                    ))}
                  </ol>

                  <h4>{t.excludesTitle}</h4>
                  <p>{t.ticketNote}</p>
                  <p className="ticket-prices-title">{t.ticketPriceTitle}</p>
                  <div className="ticket-prices">
                    <div><span>{t.weekdayLabel}</span><strong>{t.weekdayTicketPrice}</strong></div>
                    <div><span>{t.weekendLabel}</span><strong>{t.weekendTicketPrice}</strong></div>
                  </div>
                </div>
              </details>
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
