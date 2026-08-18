/** AxaoHub design reminder: tool-first split workspace, direct value, blue-prism action state. */
import { useMemo, useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { AxaoShell, AdSlot, ToolTop } from "@/components/AxaoShell";
import { QrPanel } from "@/components/QrPanel";
import { useI18n } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";

export default function WhatsAppGenerator() {
  const { t, locale } = useI18n(); useSeo("whatsapp", locale); const [phone, setPhone] = useState(""); const [message, setMessage] = useState("");
  const value = useMemo(() => { const digits = phone.replace(/\D/g, ""); return `https://wa.me/${digits || "15551234567"}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ""}`; }, [phone, message]);
  return <AxaoShell><main className="tool-page"><ToolTop eyebrow={t("whatsapp.eyebrow")} title={t("whatsapp.title")} body={t("whatsapp.body")}/><section className="tool-workspace"><div className="form-prism"><div className="form-prism-head"><div className="tool-icon blue"><MessageCircle size={20}/></div><span>{t("tool.live")}</span></div><label><span><Phone size={15}/>{t("whatsapp.phone")}</span><input inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={t("whatsapp.placeholder")}/></label><label><span><Send size={15}/>{t("whatsapp.message")}</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t("whatsapp.messagePlaceholder")} rows={5}/></label><div className="inline-success"><i/> {t("whatsapp.cta")}</div></div><div className="conversion-chamber"><span className="chamber-caption">LINK → SCAN → ACTION</span><QrPanel value={value} filename="axaohub-whatsapp-link"/></div></section><AdSlot /></main></AxaoShell>;
}
