import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavHeader } from "../navigations/nav-header";
import NavFooter from "../navigations/nav-footer";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <NavHeader />
        {children}
        <NavFooter />
      </ThemeProvider>
    </>
  );
}
