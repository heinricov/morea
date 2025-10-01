"use client";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import NavLogo from "./nav-logo";
import ThemeButton from "./button-theme";
import SearchInput from "./search-input";

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const NavHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    // Handle search functionality
    console.log("Searching for:", query);
    // You can implement actual search logic here
    // For example: router.push(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full transition-all duration-300",
          isScrolled &&
            "bg-background/75 border-b border-black/5 backdrop-blur-lg"
        )}
      >
        <div className="mx-auto container px-4 sm:px-6">
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <NavLogo
                title="Morea"
                url="/"
                className="flex items-center space-x-2"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={item.href} className="text-base">
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>

              {/* Desktop Search Input */}
              <SearchInput
                placeholder="Cari template..."
                onSearch={handleSearch}
                variant="minimal"
                className="mx-4"
              />

              <ThemeButton />

              <div className="flex items-center gap-3">
                <Button asChild variant="ghost" size="sm">
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-2"
              >
                <Search className="h-4 w-4" />
              </Button>

              <ThemeButton />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
          </div>

          {/* Mobile Search Overlay */}
          {showMobileSearch && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
              <div className="fixed inset-x-0 top-16 mx-4 rounded-lg border bg-background shadow-lg">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Pencarian</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowMobileSearch(false)}
                      className="ml-auto p-1 h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <SearchInput
                    placeholder="Cari template..."
                    onSearch={(query) => {
                      handleSearch(query);
                      setShowMobileSearch(false);
                    }}
                    variant="default"
                    showButton={true}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed inset-x-0 top-16 z-50 mx-4 rounded-lg border border-accent-foreground bg-background shadow-lg transition-all duration-200",
              menuState ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="p-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="#" onClick={() => setMenuState(false)}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="w-full">
                  <Link href="#" onClick={() => setMenuState(false)}>
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
