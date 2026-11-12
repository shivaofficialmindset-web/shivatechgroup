import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Aadhaar & Online Service Assistance | Shiva Tech Group",
  description:
    "Get guidance with Aadhaar update limits, document issues, birth certificates and online applications. Connect with Shiva Tech Group on WhatsApp or call us.",
  applicationName: "Shiva Tech Group",
  icons: { icon: "/icon.svg" },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: "Aadhaar & Online Service Assistance | Shiva Tech Group",
    description:
      "Need help with an Aadhaar or online service? Talk to the Shiva Tech Group team.",
    type: "website",
    locale: "en_IN",
    siteName: "Shiva Tech Group",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhaar & Online Service Assistance | Shiva Tech Group",
    description: "Get guidance with Aadhaar, documents and online services.",
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
    telephone: "+91-8957631598",
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <html lang="en">
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
