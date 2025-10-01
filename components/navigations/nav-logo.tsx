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
  url = "https://www.shadcnblocks.com",
  src = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
  alt = "logo",
  title = "Shadcnblocks.com",
  className = "",
  showTitle = true,
  asLink = true,
}: NavLogoProps) {
  const content = (
    <>
      {/* <img src={src} alt={alt} title={title} className="max-h-8" /> */}
      {showTitle && (
        <span className="text-lg font-semibold tracking-tighter">{title}</span>
      )}
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
