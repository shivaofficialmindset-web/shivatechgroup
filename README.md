# Shiva Tech Group

A mobile-first landing page for Aadhaar guidance and other online services, built with Next.js, TypeScript and Tailwind CSS. Service enquiries open WhatsApp with a prepared message. The site has no application backend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to check the production build.

## Before launch

Set these environment variables in Vercel (and in `.env.local` for local use):

- `NEXT_PUBLIC_SITE_URL` — the final public origin, including `https://` (for example, `https://example.com`). Used for the canonical URL, sitemap, and structured data. Until this is set, the sitemap is empty and no canonical URL is emitted.
- `NEXT_PUBLIC_GA_ID` — the Google Analytics 4 measurement ID, in the form `G-XXXXXXXXXX`. Analytics loads only when a valid ID is supplied.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — the verification token from Google Search Console's HTML-tag method, if using that method. Enter only the token, not the whole tag.

After deployment, add the site's domain in Google Search Console, verify it, and submit `https://YOUR-DOMAIN/sitemap.xml`. Google controls indexing and rankings; verification and metadata do not guarantee either.

The WhatsApp and telephone number is configured as `+91 8957631598`. The email address and Brevo form URL were not provided. Add the email and connect a Brevo-hosted form when those details are available; avoid collecting Aadhaar numbers or documents through a general enquiry form.

- `NEXT_PUBLIC_BREVO_FORM_URL` — the public URL of a Brevo-hosted form. When set, the form is embedded in the contact section. Until then, the enquiry form opens WhatsApp with the visitor's message; it does not save or submit data to Brevo.
