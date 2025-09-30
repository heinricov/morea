"use client";

import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLogo from "./nav-logo";
import { NavHeaderMenu } from "./data-menu";
import { Separator } from "../ui/separator";
import ThemeButton from "./button-theme";

export default function NavHeader() {
  return (
    <section className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4 px-5 md:px-0">
          <NavLogo title="Morea" />
          <div className="hidden items-center gap-10 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {NavHeaderMenu.map((menuItem, index) => (
                  <NavigationMenuItem className="cursor-pointer" key={index}>
                    {menuItem.items ? (
                      <>
                        <NavigationMenuTrigger>
                          {menuItem.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[600px] grid-cols-2 p-3">
                            {menuItem.items.map((item, itemIndex) => (
                              <NavigationMenuLink
                                href={item.href}
                                key={itemIndex}
                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                              >
                                <div>
                                  <p className="mb-1 font-semibold text-foreground">
                                    {item.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={menuItem.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {menuItem.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeButton />
            <div className="flex items-center gap-4">
              {/* <Button variant="outline">Sign in</Button> */}
              <Button>Bergabung sekarang</Button>
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <NavLogo title="Morea" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  {NavHeaderMenu.map((menuItem, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-none py-2"
                    >
                      {menuItem.items ? (
                        <>
                          <AccordionTrigger className="text-base hover:no-underline">
                            {menuItem.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid md:grid-cols-2">
                              {menuItem.items.map((item, itemIndex) => (
                                <a
                                  href={item.href}
                                  key={itemIndex}
                                  className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                >
                                  <div>
                                    <p className="mb-1 font-semibold text-foreground">
                                      {item.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <a href={menuItem.href} className="font-medium py-2">
                          {menuItem.title}
                        </a>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 flex flex-col gap-4">
                  {/* <Button variant="outline">Sign in</Button> */}
                  <Button>Bergabung sekarang</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
}
