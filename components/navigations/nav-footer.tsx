import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import NavLogo from "./nav-logo";
import { NavFooterMenu } from "./data-menu";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  phone?: string;
  email?: string;
  address?: string;
}

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" }
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" }
];

export default function NavFooter({
  logo = {
    url: "https://www.morea.tech",
    src: "https://deifkwefumgah.cloudfront.net/morea/block/logos/morea-icon.svg",
    alt: "logo",
    title: "Morea"
  },
  sections = NavFooterMenu,
  description = "Desain website gratis untuk semua kebutuhan",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 morea.tech All rights reserved.",
  legalLinks = defaultLegalLinks,
  phone = "081234567890",
  email = "info@morea.tech",
  address = "Jl. Raya No. 1, Jakarta"
}: Footer7Props) {
  return (
    <section className="">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <NavLogo url="/" className="flex items-center space-x-2" />
            </div>
            <ul className="items-center gap-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <PhoneIcon className="size-3" />
                <p className="text-sm">{phone}</p>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="size-3" />
                <p className="text-sm">{email}</p>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="size-3" />
                <p className="text-sm">{address}</p>
              </li>
            </ul>

            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 grid-cols-2 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
