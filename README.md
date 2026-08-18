# AxaoHub

**AxaoHub — Free Tools for Your Business** is a static React application that provides a WhatsApp link generator, QR code generator, and restaurant QR menu maker. It is prepared for `https://axaohub.com` on GitHub Pages.

## What is included

| Route | Purpose | Data model |
|---|---|---|
| `/whatsapp-link-generator` | Creates a `wa.me` chat URL and printable QR code. | Browser-only inputs. |
| `/qr-generator` | Creates a downloadable SVG QR code from text or a URL. | Browser-only inputs. |
| `/qr-menu-maker` | Edits a restaurant menu, saves it locally, and creates a limited static share link plus QR. | `localStorage` plus URL-encoded menu text. |
| `/m/[slug]?d=[data]` | Reads a shared menu encoded in the URL. | No database or server. |

The interface ships in English, Arabic (RTL), German, and Spanish. The language selector uses `?lang=en`, `?lang=ar`, `?lang=de`, or `?lang=es`.

## Run locally

```bash
pnpm install
pnpm dev
```

Run checks and a production build with:

```bash
pnpm check
pnpm build
```

The production build writes to `dist/public`. It copies `index.html` to `404.html` so client-side routes can be recovered by GitHub Pages after a direct visit.

## GitHub Pages deployment

The ready-to-publish static build is committed under `docs/`. Configure GitHub Pages to deploy from the `main` branch and the `/docs` folder. This export avoids requiring a repository workflow token for the initial publish. The original optional GitHub Actions workflow is available as `deploy-pages.yml.example`.

1. In the repository’s **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/docs`.
2. The `docs/` output includes `CNAME` containing `axaohub.com`.
3. Add `axaohub.com` as the custom domain in GitHub before changing DNS. Then configure the required apex DNS records at the domain provider and enable HTTPS when GitHub makes it available.

GitHub’s official instructions require adding the custom domain in GitHub Pages before configuring DNS, and apex domains require an `A`, `ALIAS`, or `ANAME` record at the DNS provider. [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Static-product limits

AxaoHub intentionally has no server, database, user account system, or private file storage.

| Requirement | Static behavior | Secure production alternative |
|---|---|---|
| Restaurant menu persistence | Saved only in the creator’s browser. | Database and authenticated accounts. |
| Public menu sharing | Text-only menu data is encoded in the share URL. Very long menus or uploaded logos can exceed safe QR limits. | Server-stored short public URLs such as `/m/restaurant-name`. |
| PayPal lifetime upgrade | The upgrade button opens `https://www.paypal.com/ncp/payment/XMJK49F2NRQYG`. | Verify PayPal payment webhooks in a backend, then issue a license or unlock the account. |
| Premium activation | Deliberately not auto-unlocked in the browser. | Webhook validation plus a database-backed entitlement. |

Do not expose any payment secret, PayPal client secret, or database credential in this repository. A browser-only `I Paid` button is not proof of payment and would make paid features freely bypassable.

## Ads

The UI includes clearly labeled ad placeholders. To use Google AdSense, create an approved publisher account, then replace the placeholders with the provided AdSense script and ad units. Do not add publisher identifiers until an account is approved.

## Visual assets

The primary visuals are Manus project storage paths for the managed preview. For a standalone GitHub Pages release, host final asset files on a public CDN or replace the image URLs with assets you control; do not expose credentials in the client.
