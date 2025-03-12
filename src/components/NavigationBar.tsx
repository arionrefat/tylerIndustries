import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { H2 } from "./ui/h2";
import { Button } from "./ui/button";
import { useState } from "react";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          <div className="flex items-center">
            <H2>Tyler Industries</H2>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
            <ModeToggle />
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/60 hover:bg-accent hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
