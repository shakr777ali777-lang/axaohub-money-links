/** AxaoHub design reminder: clear utility-first metadata, never keyword-stuffed pages. */
import { useEffect } from "react";
import { type Locale } from "./i18n";

const titles: Record<string, Record<Locale, string>> = {
  home: { en: "AxaoHub — Free Tools for Your Business", ar: "AxaoHub — أدوات مجانية لأعمالك", de: "AxaoHub — Kostenlose Tools für dein Business", es: "AxaoHub — Herramientas gratis para tu negocio" },
  whatsapp: { en: "Free WhatsApp Link Generator | AxaoHub", ar: "مولّد رابط WhatsApp مجاني | AxaoHub", de: "Kostenloser WhatsApp-Link-Generator | AxaoHub", es: "Generador de enlace de WhatsApp gratis | AxaoHub" },
  qr: { en: "Free QR Code Generator | AxaoHub", ar: "مولّد رمز QR مجاني | AxaoHub", de: "Kostenloser QR-Code-Generator | AxaoHub", es: "Generador de códigos QR gratis | AxaoHub" },
  menu: { en: "Free Restaurant QR Menu Maker | AxaoHub", ar: "صانع قائمة مطعم QR مجاني | AxaoHub", de: "Kostenloser Restaurant-QR-Menü-Maker | AxaoHub", es: "Creador de menú QR gratis | AxaoHub" }
};
export function useSeo(page: keyof typeof titles, locale: Locale) {
  useEffect(() => {
    const title = titles[page][locale];
    document.title = title;
    const description = "AxaoHub provides free business tools: a WhatsApp link generator, QR code generator, and restaurant QR menu maker.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", description);
    let schema = document.getElementById("axaohub-schema");
    if (!schema) { schema = document.createElement("script"); schema.id = "axaohub-schema"; schema.setAttribute("type", "application/ld+json"); document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: "AxaoHub", applicationCategory: "BusinessApplication", url: "https://axaohub.com", description });
  }, [page, locale]);
}
