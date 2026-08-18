/** AxaoHub design reminder: premium message is honest about static-payment limitations and never grants access without verified payment. */
import { CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";
import { AxaoShell, PremiumLink } from "@/components/AxaoShell";
import { useI18n } from "@/lib/i18n";
export default function Premium() { const { t } = useI18n(); return <AxaoShell><main className="premium-page"><div className="premium-orb one"/><div className="premium-orb two"/><section><div className="premium-icon"><Sparkles size={26}/></div><p className="eyebrow">AXAOHUB LIFETIME</p><h1>{t("premium.title")}</h1><p>{t("premium.body")}</p><PremiumLink/><div className="secure-note"><LockKeyhole size={15}/><span>Secure activation requires verified payment status.</span></div><div className="premium-checks"><span><CheckCircle2 size={16}/> One-time PayPal checkout</span><span><CheckCircle2 size={16}/> No account required for free tools</span></div></section></main></AxaoShell>; }
