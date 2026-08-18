/** AxaoHub design reminder: tool-first split workspace, immediate QR preview in a glass prism panel. */
import { useState } from "react";
import { Link2, QrCode } from "lucide-react";
import { AxaoShell, AdSlot, ToolTop } from "@/components/AxaoShell";
import { QrPanel } from "@/components/QrPanel";
import { useI18n } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";

export default function QrGenerator() { const { t, locale } = useI18n(); useSeo("qr", locale); const [value, setValue] = useState("https://axaohub.com"); return <AxaoShell><main className="tool-page"><ToolTop eyebrow={t("qr.eyebrow")} title={t("qr.title")} body={t("qr.body")}/><section className="tool-workspace"><div className="form-prism"><div className="form-prism-head"><div className="tool-icon violet"><QrCode size={20}/></div><span>{t("tool.live")}</span></div><label><span><Link2 size={15}/>{t("qr.input")}</span><textarea value={value} onChange={(event) => setValue(event.target.value)} placeholder={t("qr.placeholder")} rows={7}/></label><div className="inline-success"><i/> {t("qr.cta")}</div></div><div className="conversion-chamber"><span className="chamber-caption">INPUT → QR → SHARE</span><QrPanel value={value} filename="axaohub-qr-code"/></div></section><AdSlot /></main></AxaoShell>; }
