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
      setError("Please fill in your name, phone number and message.");
      setStatus("error");
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number.");
      setStatus("error");
      return;
    }
    if (!accessKey) {
      setError("The contact form is not available yet. Please call or WhatsApp us instead.");
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
      setError("Sorry, we couldn’t send your message. Please try again or contact us on WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={sendEnquiry}>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required maxLength={100} />
      <label htmlFor="phone">Phone number</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Enter your phone number" required minLength={7} maxLength={25} />
      <label htmlFor="message">How can we help?</label>
      <textarea id="message" name="message" placeholder="Tell us a little about your query" required maxLength={1000} rows={4} />
      <div style={{ display: "none" }} aria-hidden="true"><input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" /></div>
      <p className="form-note">Please do not share your Aadhaar number or sensitive documents here.</p>
      <button type="submit" className="button button-dark form-button" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"} <ArrowUpRight size={18} /></button>
      {status === "success" && <p role="status" className="form-feedback form-success">Thank you! Your message has been sent. We’ll be in touch.</p>}
      {status === "error" && <p role="alert" className="form-feedback form-error">{error}</p>}
    </form>
  );
}
