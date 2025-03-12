import { Github, Linkedin, Twitter } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/tyler-industries",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/tyler-industries",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tyler_industries",
    icon: Twitter,
  },
] as const;
