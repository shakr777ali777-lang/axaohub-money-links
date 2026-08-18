/** AxaoHub design reminder: QR results use Prism Panels and immediate copy/download actions. */
import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy, Download, QrCode } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function QrPanel({ value, filename = "axaohub-qr" }: { value: string; filename?: string }) {
  const { t } = useI18n(); const [copied, setCopied] = useState(false); const svgRef = useRef<SVGSVGElement>(null);
  const copy = async () => { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };
  const download = () => { const svg = svgRef.current; if (!svg) return; const source = new XMLSerializer().serializeToString(svg); const blob = new Blob([source], { type: "image/svg+xml" }); const url = URL.createObjectURL(blob); const anchor = document.createElement("a"); anchor.href = url; anchor.download = `${filename}.svg`; anchor.click(); URL.revokeObjectURL(url); };
  return <aside className="qr-panel"><div className="panel-label"><QrCode size={15}/>{t("tool.result")}</div><div className="qr-frame"><QRCodeSVG ref={svgRef} value={value || "https://axaohub.com"} size={190} bgColor="transparent" fgColor="#EAF0FF" level="M" includeMargin /></div><p className="result-code">{value || "https://axaohub.com"}</p><div className="result-actions"><button onClick={copy} className="small-button">{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? t("tool.copied") : t("tool.copy")}</button><button onClick={download} className="small-button"><Download size={15}/>{t("tool.download")}</button></div></aside>;
}
