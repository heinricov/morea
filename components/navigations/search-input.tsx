"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  showButton?: boolean;
  variant?: "default" | "minimal" | "expanded";
}

export default function SearchInput({
  placeholder = "Cari template...",
  className = "",
  onSearch,
  showButton = true,
  variant = "default",
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    setIsExpanded(false);
  };

  const handleFocus = () => {
    if (variant === "expanded") {
      setIsExpanded(true);
    }
  };

  const handleBlur = () => {
    if (variant === "expanded" && !query) {
      setIsExpanded(false);
    }
  };

  if (variant === "minimal") {
    return (
      <div className={cn("relative", className)}>
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="pl-10 pr-10 h-9 w-64 focus:w-80 transition-all duration-200"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </form>
      </div>
    );
  }

  if (variant === "expanded") {
    return (
      <div className={cn("relative", className)}>
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={isExpanded ? placeholder : "Cari..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              "pl-10 pr-10 h-9 transition-all duration-200",
              isExpanded ? "w-80" : "w-32"
            )}
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("relative", className)}>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 h-9 w-64"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        {showButton && (
          <Button type="submit" size="sm" className="h-9 px-4">
            Cari
          </Button>
        )}
      </form>
    </div>
  );
}
