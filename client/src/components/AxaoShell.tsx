/** AxaoHub design reminder: orbital product shell, blue-prism accents, no generic centered chrome. */
import { type ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Boxes, Languages, Moon, Sparkles, Sun } from "lucide-react";
import { localeMeta, type Locale, useI18n } from "@/lib/i18n";

const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/XMJK49F2NRQYG";
export const LOGO_URL = "/manus-storage/axaohub-cube-mark_19599fd1.png";

function Brand() { return <Link href="/" className="brand"><img src={LOGO_URL} alt="AxaoHub cube" /><span>Axao<span>Hub</span></span></Link>; }
export function PremiumLink({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return <a className={compact ? "premium-link compact" : "premium-link"} href={PAYPAL_LINK} target="_blank" rel="noreferrer"><Sparkles size={15} />{compact ? "$19" : t("menu.premium")}</a>;
}
export function AxaoShell({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useI18n();
  const [location] = useLocation();
  const [dark, setDark] = useState(true);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  return <div className="app-shell">
    <header className="site-header"><div className="header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/#tools" className={location === "/" ? "active" : ""}>{t("nav.tools")}</a><Link href="/qr-menu-maker">{t("nav.menu")}</Link><span className="free-dot"><i />{t("nav.free")}</span></nav>
      <div className="header-actions">
        <div className="language-picker" aria-label={t("language")}>{(Object.keys(localeMeta) as Locale[]).map((item) => <button key={item} onClick={() => setLocale(item)} className={locale === item ? "selected" : ""} title={localeMeta[item].label}>{localeMeta[item].flag}<span>{localeMeta[item].label}</span></button>)}</div>
        <button className="icon-button" onClick={() => setDark((value) => !value)} aria-label="Toggle color mode">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
        <Link href="/qr-menu-maker" className="header-cta"><Boxes size={16} /><span>{t("nav.open")}</span><ArrowUpRight size={15} /></Link>
      </div>
    </div></header>
    {children}
    <footer className="site-footer"><div><Brand /><p>{t("footer.copy")}</p></div><div className="footer-meta"><span>{t("footer.powered")}</span><a href="https://axaohub.com">axaohub.com</a></div></footer>
  </div>;
}
export function AdSlot() { const { t } = useI18n(); return <div className="ad-slot" aria-label="Advertisement placeholder"><span>{t("ad.label")}</span><div /><div /><div /></div>; }
export function ToolTop({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) { const { t } = useI18n(); return <section className="tool-top"><Link href="/" className="back-link">← {t("tool.back")}</Link><p className="eyebrow"><Languages size={14}/>{eyebrow}</p><h1>{title}</h1><p>{body}</p></section>; }
