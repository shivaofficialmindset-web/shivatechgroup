import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, FileText, IdCard,
  Mail, MapPin, MessageCircle, Phone, ShieldCheck,
} from "lucide-react";
import { contact } from "@/lib/contact";
import { services } from "@/lib/services";
import Brand from "./Brand";
import EnquiryForm from "./EnquiryForm";

const { phone, email, whatsappLink } = contact;
const phoneHref = `tel:${phone.international}`;
const enquiryHref = whatsappLink("नमस्ते, मुझे आधार या ऑनलाइन सेवा के बारे में जानकारी चाहिए।");
const supportSteps = [
  { title: "अपनी समस्या चुनें", detail: "सेवाओं की सूची से अपना काम चुनें।" },
  { title: "हमें बताएं", detail: "WhatsApp पर मैसेज करें या सीधे कॉल करें।" },
  { title: "अगला कदम समझें", detail: "जानें कि कौन से कागज़ चाहिए और आगे क्या करना है।" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">मुख्य जानकारी पर जाएँ</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <Brand />
          <nav aria-label="मुख्य मेनू" className="header-nav">
            <a href="#services">सेवाएँ</a>
            <a href="#how-it-works">मदद कैसे मिलेगी</a>
            <a href="#contact">संपर्क</a>
          </nav>
          <a className="button button-yellow header-call" href={phoneHref}>
            <Phone size={18} aria-hidden="true" /> कॉल करें
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="service-kicker">
                <IdCard size={21} aria-hidden="true" /> आधार और ऑनलाइन सेवाएँ
              </p>
              <h1 id="hero-title">आधार अपडेट में <span>दिक्कत है?</span></h1>
              <a className="dob-link" href={whatsappLink(services[0].message)} target="_blank" rel="noreferrer">
                <span lang="en">DOB Limit Cross</span> <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="hero-description">
                जन्म तारीख, नाम या दस्तावेज़ से जुड़ी समस्या बताइए। हम समझाएँगे कि आगे क्या करना है।
              </p>
              <div className="hero-actions">
                <a className="button button-green" href={enquiryHref} target="_blank" rel="noreferrer">
                  <MessageCircle size={22} aria-hidden="true" /> WhatsApp पर बात करें
                </a>
                <a className="button button-outline" href={phoneHref}>
                  <Phone size={19} aria-hidden="true" /> कॉल करें <bdi>{phone.display}</bdi>
                </a>
              </div>
              <a className="services-jump" href="#services">
                सभी सेवाएँ देखें <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-visual">
              <Image
                src="/aadhaar-help-portrait.webp"
                alt=""
                fill
                unoptimized
                preload
                className="hero-portrait"
              />
              <div className="portrait-label">
                <span className="portrait-icon"><FileText size={24} aria-hidden="true" /></span>
                <span><strong>आधार से जुड़ी मदद</strong><small>दस्तावेज़ और आवेदन की जानकारी</small></span>
              </div>
            </div>
          </div>
        </section>

        <div className="service-area">
          <div className="shell service-area-inner">
            <p><MapPin size={21} aria-hidden="true" /> सेवा क्षेत्र</p>
            <ul aria-label="सेवा वाले जिले">
              <li>गोरखपुर</li>
              <li>देवरिया</li>
              <li>कुशीनगर</li>
              <li>महराजगंज</li>
            </ul>
          </div>
        </div>

        <section className="section shell" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <h2 id="services-title">आपको किस काम में मदद चाहिए?</h2>
            <p>अपनी समस्या चुनें और WhatsApp पर हमसे पूछें।</p>
          </div>
          <ul className="service-grid">
            {services.map(({ id, icon: Icon, title, label, description, message, tone }) => (
              <li key={id} className={`service-item service-${tone}`}>
                <a className="service-card" href={whatsappLink(message)} target="_blank" rel="noreferrer">
                  <span className="service-icon"><Icon size={24} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <span className="service-label" lang="en">{label}</span>
                  <p>{description}</p>
                  <span className="service-action">WhatsApp पर पूछें <ArrowUpRight size={17} aria-hidden="true" /></span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="steps-section" id="how-it-works" aria-labelledby="steps-title">
          <div className="shell steps-inner">
            <h2 id="steps-title">मदद कैसे मिलेगी?</h2>
            <ol className="steps">
              {supportSteps.map(({ title, detail }) => (
                <li key={title}>
                  <CheckCircle2 size={25} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section shell contact-layout" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <h2 id="contact-title">हमसे संपर्क करें</h2>
            <p>सूची में आपका काम नहीं दिखा? हमें कॉल करें या अपनी समस्या लिखकर भेजें।</p>
            <ul className="contact-options">
              <li>
                <a href={enquiryHref} target="_blank" rel="noreferrer">
                  <MessageCircle size={22} aria-hidden="true" /> WhatsApp पर बात करें
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={phoneHref}>
                  <Phone size={21} aria-hidden="true" /> <bdi>{phone.display}</bdi>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    <Mail size={21} aria-hidden="true" /> <bdi>{email}</bdi>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="form-card">
            <h3>अपना सवाल भेजें</h3>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <Brand />
          <section className="footer-disclaimer" aria-labelledby="disclaimer-title">
            <h2 id="disclaimer-title">
              <ShieldCheck size={20} aria-hidden="true" />
              <span>अस्वीकरण <span lang="en">(Disclaimer)</span></span>
            </h2>
            <p>
              <strong lang="en">SHIVATECH GROUP</strong> एक स्वतंत्र निजी परामर्श एवं डिजिटल सेवा सहायता केंद्र है, जिसका UIDAI या किसी सरकारी विभाग से कोई आधिकारिक संबंध नहीं है।
            </p>
            <p>
              हम केवल वैध दस्तावेजों एवं सरकारी नियमों के अनुसार सहायता प्रदान करते हैं। हम किसी भी आवेदन की स्वीकृति या परिणाम की गारंटी नहीं देते।
            </p>
          </section>
        </div>
      </footer>

      <nav className="mobile-bar" aria-label="सीधे संपर्क करें">
        <a className="button button-outline" href={phoneHref}><Phone size={20} aria-hidden="true" /> कॉल</a>
        <a className="button button-green" href={enquiryHref} target="_blank" rel="noreferrer">
          <MessageCircle size={21} aria-hidden="true" /> WhatsApp <ArrowRight size={19} aria-hidden="true" />
        </a>
      </nav>
    </>
  );
}
