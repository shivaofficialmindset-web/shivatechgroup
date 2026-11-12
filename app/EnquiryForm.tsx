"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const brevoUrl = process.env.NEXT_PUBLIC_BREVO_FORM_URL;

  if (brevoUrl) {
    return <iframe className="brevo-frame" src={brevoUrl} title="Contact Shiva Tech Group" loading="lazy" />;
  }

  function sendEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hello Shiva Tech Group, my name is ${name.trim()}. ${question.trim()}`;
    window.open(`https://wa.me/918957631598?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={sendEnquiry}>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" required maxLength={100} />
      <label htmlFor="question">How can we help?</label>
      <textarea id="question" name="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Tell us a little about your query" required maxLength={1000} rows={4} />
      <p className="form-note">Please do not share your Aadhaar number or sensitive documents here.</p>
      <button type="submit" className="button button-dark form-button">Send on WhatsApp <ArrowUpRight size={18} /></button>
    </form>
  );
}
