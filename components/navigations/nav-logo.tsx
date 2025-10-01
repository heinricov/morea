import Link from "next/link";
import React from "react";

interface NavLogoProps {
  url?: string;
  src?: string;
  alt?: string;
  title?: string;
  className?: string;
  showTitle?: boolean;
  asLink?: boolean;
}

export default function NavLogo({
  url = "/",
  src = "/logo-light.png",
  alt = "Morea Logo",
  className = "",
  showTitle = true,
  asLink = true
}: NavLogoProps) {
  const content = (
    <>
      <img
        src={src}
        alt={alt}
        className="max-h-6 md:max-h-8 object-contain p-0"
      />
    </>
  );

  if (asLink) {
    return (
      <Link href={url} className={`flex items-center gap-2 ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>{content}</div>
  );
}
