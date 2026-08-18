/** AxaoHub design reminder: menu output should feel like a polished mobile surface, not a form dump. */
import { QrCode } from "lucide-react";
import { type MenuData } from "@/lib/menu";
import { useI18n } from "@/lib/i18n";

export function MenuPreview({ menu, shared = false }: { menu: MenuData; shared?: boolean }) {
  const { t } = useI18n();
  return <div className={`menu-preview ${shared ? "shared-menu" : ""}`} style={{ "--menu-accent": menu.accent } as React.CSSProperties}>
    <div className="menu-preview-header"><div className="menu-ambient"/><div className="menu-logo">{menu.logo ? <img src={menu.logo} alt="Restaurant logo"/> : <span>{menu.name.slice(0, 1).toUpperCase()}</span>}</div><p>Welcome to</p><h2>{menu.name || "Your restaurant"}</h2><div className="menu-divider"><i/><QrCode size={15}/><i/></div></div>
    <div className="menu-preview-body">{menu.categories.map((category) => <section key={category.id}><h3>{category.name || t("menu.category")}</h3>{category.items.map((item) => <article key={item.id}><div><h4>{item.name || t("menu.item")}</h4><p>{item.description || "—"}</p></div><strong>{item.price || "—"}</strong></article>)}</section>)}</div>
    <div className="menu-preview-footer">{shared ? t("shared.powered") : t("menu.local")}</div>
  </div>;
}
