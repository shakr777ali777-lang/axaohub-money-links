/** AxaoHub design reminder: static-first sharing; all menu data is user-controlled and browser-local. */
export type MenuItem = { id: string; name: string; description: string; price: string };
export type MenuCategory = { id: string; name: string; items: MenuItem[] };
export type MenuData = { name: string; logo?: string; accent: string; categories: MenuCategory[] };
export const sampleMenu: MenuData = {
  name: "The North Table",
  accent: "#5B7CFF",
  categories: [
    { id: "signature", name: "Signature plates", items: [{ id: "harissa", name: "Harissa salmon", description: "Charred citrus, herbs, smoked yogurt", price: "$24" }, { id: "miso", name: "Miso aubergine", description: "Sesame, pickled greens, toasted rice", price: "$17" }] },
    { id: "drinks", name: "Drinks", items: [{ id: "spritz", name: "Citrus spritz", description: "Blood orange, rosemary, soda", price: "$9" }] }
  ]
};
export function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9\u0600-\u06ff]+/gi, "-").replace(/^-+|-+$/g, "") || "my-menu"; }
export function encodeMenu(menu: MenuData) { return btoa(unescape(encodeURIComponent(JSON.stringify(menu)))); }
export function decodeMenu(value: string | null): MenuData | null {
  if (!value) return null;
  try { return JSON.parse(decodeURIComponent(escape(atob(value)))) as MenuData; } catch { return null; }
}
