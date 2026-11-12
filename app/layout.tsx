import type { Metadata } from "next";
import Script from "next/script";
import { contact } from "@/lib/contact";
import "./globals.css";

function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url : undefined;
  } catch {
    return undefined;
  }
}

const siteUrl = getSiteUrl();
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const validGaId = gaId && /^G-[A-Z0-9]+$/i.test(gaId) ? gaId : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "आधार अपडेट और ऑनलाइन सेवाओं में मदद | ShivaTech Group",
  description:
    "आधार में जन्म तारीख या नाम बदलने, दस्तावेज़, BRN और ऑनलाइन आवेदन से जुड़ी मदद के लिए ShivaTech Group से WhatsApp या फोन पर बात करें।",
  applicationName: "Shiva Tech Group",
  icons: { icon: "/icon.svg" },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: "आधार अपडेट और ऑनलाइन सेवाओं में मदद | ShivaTech Group",
    description:
      "आधार, दस्तावेज़ और ऑनलाइन सेवाओं के बारे में ShivaTech Group से पूछें।",
    type: "website",
    locale: "hi_IN",
    siteName: "Shiva Tech Group",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "आधार अपडेट और ऑनलाइन सेवाओं में मदद | ShivaTech Group",
    description: "आधार, दस्तावेज़ और ऑनलाइन सेवाओं के बारे में मदद पाएँ।",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiva Tech Group",
    telephone: contact.phone.international,
    ...(contact.email ? { email: contact.email } : {}),
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <html lang="hi">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
        {validGaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${validGaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${validGaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
