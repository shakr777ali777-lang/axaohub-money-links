/** AxaoHub design reminder: shared menu is an elegant public surface with a clear, honest static-data limitation. */
import { useMemo } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, QrCode } from "lucide-react";
import { AxaoShell } from "@/components/AxaoShell";
import { MenuPreview } from "@/components/MenuPreview";
import { decodeMenu } from "@/lib/menu";
import { useI18n } from "@/lib/i18n";

export default function SharedMenu() { const { t } = useI18n(); const [location] = useLocation(); const menu = useMemo(() => decodeMenu(new URLSearchParams(location.split("?")[1] || "").get("d")), [location]); return <AxaoShell><main className="shared-menu-page">{menu ? <><div className="shared-menu-lead"><div className="scan-mark"><QrCode size={20}/></div><span>{t("menu.eyebrow")}</span></div><MenuPreview menu={menu} shared/><Link href="/qr-menu-maker" className="shared-back"><ArrowLeft size={16}/>{t("shared.back")}</Link></> : <div className="shared-empty"><QrCode size={38}/><h1>{t("shared.empty")}</h1><Link href="/qr-menu-maker" className="primary-button">{t("shared.back")}</Link></div>}</main></AxaoShell>; }
