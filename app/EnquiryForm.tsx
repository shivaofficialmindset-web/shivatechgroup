"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function sendEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setError("कृपया अपना नाम, फ़ोन नंबर और संदेश भरें।");
      setStatus("error");
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setError("कृपया सही फ़ोन नंबर डालें।");
      setStatus("error");
      return;
    }
    if (!accessKey) {
      setError("फॉर्म अभी उपलब्ध नहीं है। कृपया हमें फ़ोन करें या WhatsApp पर संदेश भेजें।");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New enquiry from Shiva Tech Group website",
          from_name: "Shiva Tech Group Website",
          name,
          phone,
          message,
          botcheck: data.get("botcheck") === "on",
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setError("संदेश नहीं भेजा जा सका। दोबारा कोशिश करें या WhatsApp पर संपर्क करें।");
      setStatus("error");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={sendEnquiry}>
      <label htmlFor="name">आपका नाम</label>
      <input id="name" name="name" type="text" autoComplete="name" placeholder="अपना नाम लिखें" required maxLength={100} />
      <label htmlFor="phone">फ़ोन नंबर</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="अपना फ़ोन नंबर लिखें" required minLength={7} maxLength={25} />
      <label htmlFor="message">किस काम में मदद चाहिए?</label>
      <textarea id="message" name="message" placeholder="अपनी समस्या या सवाल लिखें" required maxLength={1000} rows={4} />
      <div style={{ display: "none" }} aria-hidden="true"><input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" /></div>
      <p className="form-note">यहाँ अपना आधार नंबर, OTP या निजी दस्तावेज़ साझा न करें।</p>
      <button type="submit" className="button button-dark form-button" disabled={status === "sending"}>{status === "sending" ? "संदेश भेज रहे हैं…" : "संदेश भेजें"} <ArrowUpRight size={18} /></button>
      {status === "success" && <p role="status" className="form-feedback form-success">धन्यवाद! आपका संदेश भेज दिया गया है। हम आपसे संपर्क करेंगे।</p>}
      {status === "error" && <p role="alert" className="form-feedback form-error">{error}</p>}
    </form>
  );
}
