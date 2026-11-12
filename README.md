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

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number with country code, for example `918957631598`. Every WhatsApp link uses this number.
- `NEXT_PUBLIC_PHONE_NUMBER` — call number with country code, for example `+91 89576 31598`. This also updates the displayed number and organization structured data. If either number is unset, it defaults to the originally supplied number, +91 8957631598.
- `NEXT_PUBLIC_CONTACT_EMAIL` — the public contact email shown on the site and used for the email link. If unset, the site shows “Email address coming soon.” This is separate from the destination email linked to the Web3Forms key.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — the Web3Forms access key associated with the email address where you want to receive enquiries. [Create an access key](https://web3forms.com/) using that email, then add the key to Vercel. Web3Forms emails form submissions to the address linked to the key; no separate destination email variable is needed. The key is intentionally public in the browser, not a secret. Do not put private credentials in `NEXT_PUBLIC_` variables.

Redeploy after changing these variables, as Next.js embeds public environment variables at build time. For local development, add them to `.env.local` and restart the dev server. Test a real submission after configuring the key and check the destination inbox (and spam folder). Without the key, the contact form cannot send and asks visitors to call or use WhatsApp instead. Web3Forms may restrict some free subdomains; test the actual deployment domain. Its optional domain restriction is a paid feature.

The form collects name, phone and message; visitors are asked not to share Aadhaar numbers or sensitive documents.
