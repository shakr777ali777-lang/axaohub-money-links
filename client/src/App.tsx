/** AxaoHub design reminder: route each utility into the same orbital tool system. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { I18nProvider } from "./lib/i18n";
import Home from "./pages/Home";
import WhatsAppGenerator from "./pages/WhatsAppGenerator";
import QrGenerator from "./pages/QrGenerator";
import MenuMaker from "./pages/MenuMaker";
import SharedMenu from "./pages/SharedMenu";
import Premium from "./pages/Premium";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/whatsapp-link-generator"} component={WhatsAppGenerator} />
      <Route path={"/qr-generator"} component={QrGenerator} />
      <Route path={"/qr-menu-maker"} component={MenuMaker} />
      <Route path={"/m/:slug"} component={SharedMenu} />
      <Route path={"/premium"} component={Premium} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nProvider>
    </ErrorBoundary>
  );
}

export default App;
