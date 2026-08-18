/** AxaoHub design reminder: asymmetric orbital hero; utility results lead, visual depth supports. */
import { motion } from "framer-motion";
import { ArrowRight, Check, Link2, QrCode, ScanLine, UtensilsCrossed, WandSparkles } from "lucide-react";
import { Link } from "wouter";
import { AxaoShell, AdSlot } from "@/components/AxaoShell";
import { useI18n } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";

const hero = "/manus-storage/axaohub-hero-orbit_353a8d62.jpg";
const qrVisual = "/manus-storage/axaohub-qr-prism_483a659b.jpg";
const menuVisual = "/manus-storage/axaohub-menu-prism_a995fa1e.jpg";
const tools = [
  { key: "whatsapp", href: "/whatsapp-link-generator", icon: Link2, tone: "blue", metric: "wa.me / ready" },
  { key: "qr", href: "/qr-generator", icon: QrCode, tone: "violet", metric: "SVG / printable" },
  { key: "menu", href: "/qr-menu-maker", icon: UtensilsCrossed, tone: "aqua", metric: "menu / mobile" }
] as const;
export default function Home() {
  const { t, locale } = useI18n(); useSeo("home", locale);
  return <AxaoShell><main>
    <section className="hero-section"><div className="hero-copy"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="hero-kicker"><i /><span>{t("hero.kicker")}</span></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .06, duration: .6 }}>{t("hero.titleA")}<em>{t("hero.titleB")}</em></motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .6 }}>{t("hero.body")}</motion.p>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .6 }} className="hero-actions"><Link href="/qr-menu-maker" className="primary-button"><WandSparkles size={17}/>{t("hero.primary")}<ArrowRight size={16}/></Link><a href="#tools" className="secondary-button">{t("hero.secondary")}</a></motion.div>
      <div className="hero-note"><Check size={14}/>{t("hero.note")}</div>
    </div><div className="hero-stage"><img className="hero-art" src={hero} alt="AxaoHub product tools orbit"/><div className="hero-grid"/><motion.div className="stage-tile tile-link" animate={{ y: [0, -8, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity }}><Link2 size={20}/><span>wa.me</span><b>ready</b></motion.div><motion.div className="stage-tile tile-qr" animate={{ y: [0, 9, 0], rotate: [0, 1, 0] }} transition={{ duration: 7, repeat: Infinity }}><QrCode size={24}/><span>QR</span><b>scan</b></motion.div><div className="orbit orbit-one"/><div className="orbit orbit-two"/></div>
    </section>
    <section id="tools" className="tools-section"><div className="section-heading"><div><p className="eyebrow">{t("tools.eyebrow")}</p><h2>{t("tools.title")}</h2></div><p>{t("tools.body")}</p></div><div className="tools-layout">{tools.map((tool, index) => { const Icon = tool.icon; return <motion.article key={tool.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`tool-card ${tool.tone}`}><div className="tool-card-top"><div className="tool-icon"><Icon size={22}/></div><span>{tool.metric}</span></div><h3>{t(`tools.${tool.key}.title`)}</h3><p>{t(`tools.${tool.key}.body`)}</p><Link href={tool.href} className="tool-open">{t("tools.open")}<ArrowRight size={16}/></Link></motion.article>; })}<div className="tools-visual"><img src={qrVisual} alt="Abstract QR prism"/><img src={menuVisual} alt="Abstract mobile menu card"/></div></div></section>
    <section className="proof-strip">{["proof.free", "proof.mobile", "proof.local"].map((item) => <span key={item}><Check size={16}/>{t(item)}</span>)}</section>
    <section className="workflow-section"><div className="workflow-visual"><div className="signal-core"><ScanLine size={34}/></div><div className="signal-ring ring-a"/><div className="signal-ring ring-b"/><div className="signal-dot dot-a"/><div className="signal-dot dot-b"/></div><div className="workflow-copy"><p className="eyebrow">{t("workflow.eyebrow")}</p><h2>{t("workflow.title")}</h2>{["one", "two", "three"].map((step, index) => <div className="workflow-step" key={step}><span>0{index + 1}</span><div><h3>{t(`workflow.${step}`)}</h3><p>{t(`workflow.${step}.body`)}</p></div></div>)}</div></section>
    <AdSlot />
    <section className="faq-section"><div><p className="eyebrow">{t("faq.eyebrow")}</p><h2>{t("faq.title")}</h2></div><div className="faq-list">{[1,2,3].map((item) => <details key={item}><summary>{t(`faq.q${item}`)}<span>+</span></summary><p>{t(`faq.a${item}`)}</p></details>)}</div></section>
  </main></AxaoShell>;
}
