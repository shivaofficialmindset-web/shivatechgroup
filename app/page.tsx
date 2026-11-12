import { ArrowDown, ArrowRight, ArrowUpRight, BadgeHelp, CalendarDays, Check, ChevronRight, CircleHelp, FileCheck2, FileText, Fingerprint, HeartHandshake, IdCard, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import Brand from "./Brand";

const phone = "+91 89576 31598";
const whatsapp = (message: string) => `https://wa.me/918957631598?text=${encodeURIComponent(message)}`;
const generalLink = whatsapp("Hello Shiva Tech Group, I would like to know more about your services.");
const services = [
  { number: "01", icon: CalendarDays, title: "Aadhaar DOB limit crossed", description: "Guidance when you have reached the limit for updating your date of birth.", message: "Hello Shiva Tech Group, I need help with an Aadhaar date of birth limit crossed case." },
  { number: "02", icon: IdCard, title: "Aadhaar name limit crossed", description: "Understand the next steps if your name update limit has been reached.", message: "Hello Shiva Tech Group, I need help with an Aadhaar name limit crossed case." },
  { number: "03", icon: FileCheck2, title: "Same or matching BRN", description: "Help checking documents and understanding a matching BRN issue.", message: "Hello Shiva Tech Group, I need help with a same or matching BRN problem." },
  { number: "04", icon: FileText, title: "Invalid document problem", description: "Get guidance on document-related issues and what to check next.", message: "Hello Shiva Tech Group, I need help with an invalid document problem." },
  { number: "05", icon: Fingerprint, title: "Aadhaar suspended or deactivated", description: "Guidance on the appropriate process for a suspended or deactivated Aadhaar.", message: "Hello Shiva Tech Group, I need help with a suspended or deactivated Aadhaar." },
  { number: "06", icon: BadgeHelp, title: "Birth certificate & BRN", description: "Assistance with questions about birth certificates and BRN.", message: "Hello Shiva Tech Group, I need help with a birth certificate or BRN." },
  { number: "07", icon: Sparkles, title: "Government scheme applications", description: "Support with registration and online applications for government schemes.", message: "Hello Shiva Tech Group, I need help with a government scheme registration or online application." },
  { number: "08", icon: HeartHandshake, title: "Other CSC & online services", description: "Have another online service question? Tell us what you need help with.", message: "Hello Shiva Tech Group, I need help with a CSC or online service." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-texture" aria-hidden="true" />
        <div className="shell hero-shell">
          <header className="nav">
            <Brand />
            <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#contact">Contact</a></nav>
            <a className="nav-cta" href={generalLink} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={15} /></a>
          </header>
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="status-dot" /> HERE TO HELP, EVERY STEP OF THE WAY</div>
            <h1>Online services,<br /><em>made simpler.</em></h1>
            <p>Stuck with an Aadhaar or document issue? Get the guidance you need to take the next step, with a real person by your side.</p>
            <div className="hero-actions"><a className="button button-dark" href={generalLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat with us on WhatsApp <ArrowUpRight className="button-arrow" size={19} /></a><a className="button button-white" href="tel:+918957631598"><Phone size={17} /> Call {phone}</a></div>
            <div className="hero-note"><span><Check size={14} /> Simple guidance</span><span><Check size={14} /> One-to-one support</span><span><Check size={14} /> Just a message away</span></div>
          </div>
          <a className="explore" href="#services">EXPLORE OUR SERVICES <ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow"><span className="purple-dot" /> WHAT WE CAN HELP WITH</div><h2>Let’s get things<br /><em>moving again.</em></h2></div><p>From Aadhaar updates to online applications, find the help you need. Choose a service to start a conversation with us.</p></div>
          <div className="service-grid">{services.map(({ number, icon: Icon, title, description, message }) => <a className="service-card" href={whatsapp(message)} target="_blank" rel="noreferrer" key={number} aria-label={`${title}: chat on WhatsApp`}><div className="card-top"><span className="service-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="card-number">{number} / 08</span></div><div><h3>{title}</h3><p>{description}</p></div><div className="card-link">Talk to us <ArrowUpRight size={16} /></div></a>)}</div>
          <p className="service-footnote"><CircleHelp size={16} /> Not sure which service you need? <a href={generalLink} target="_blank" rel="noreferrer">Just ask us <ArrowRight size={14} /></a></p>
        </div>
      </section>

      <section className="section process-section" id="how-it-works"><div className="shell"><div className="process-panel"><div className="process-copy"><div className="eyebrow eyebrow-light"><span className="purple-dot" /> A LITTLE HELP GOES A LONG WAY</div><h2>One conversation.<br /><em>A clearer way forward.</em></h2><p>Online processes can feel complicated. We’re here to listen, understand your concern and help you navigate the next steps.</p><a className="button button-lavender" href={generalLink} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a></div><div className="steps"><div className="step"><span>01</span><div><h3>Choose your service</h3><p>Pick the service that best describes what you need.</p></div><ChevronRight size={19} /></div><div className="step"><span>02</span><div><h3>Tell us what’s going on</h3><p>Send us a message on WhatsApp or give us a call.</p></div><ChevronRight size={19} /></div><div className="step"><span>03</span><div><h3>Get guidance on what’s next</h3><p>We’ll help you understand the process and next steps.</p></div><ChevronRight size={19} /></div></div></div></div></section>

      <section className="section contact-section" id="contact"><div className="shell contact-layout"><div className="contact-copy"><div className="eyebrow"><span className="purple-dot" /> WE’RE HERE FOR YOU</div><h2>Have a question?<br /><em>Let’s talk.</em></h2><p>Not sure where to begin? Tell us what you need help with and we’ll guide you through the next steps.</p><div className="contact-options"><a href={generalLink} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={21} /></span><span><small>MESSAGE US</small><strong>Chat on WhatsApp</strong></span><ArrowUpRight size={19} /></a><a href="tel:+918957631598"><span className="contact-icon"><Phone size={20} /></span><span><small>GIVE US A CALL</small><strong>{phone}</strong></span><ArrowUpRight size={19} /></a></div></div><div className="form-card"><div className="form-card-head"><div><span className="mini-label">SEND A MESSAGE</span><h3>How can we help?</h3><p>Leave us a quick message to get started.</p></div><span className="form-spark"><Sparkles size={23} /></span></div><EnquiryForm /></div></div></section>
      <footer className="footer"><div className="shell"><div className="footer-main"><div><Brand className="footer-brand" /><p>A little guidance can make<br />a big difference.</p></div><a className="footer-chat" href={generalLink} target="_blank" rel="noreferrer">Let’s talk about<br />what you need. <ArrowUpRight size={26} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Shiva Tech Group. All rights reserved.</span><span><ShieldCheck size={15} /> Independent service assistance. Not affiliated with UIDAI or any government body.</span></div></div></footer>
      <div className="mobile-bar"><a href="tel:+918957631598" aria-label="Call Shiva Tech Group"><Phone size={19} /> Call</a><a href={generalLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat on WhatsApp <ArrowUpRight size={17} /></a></div>
    </main>
  );
}
