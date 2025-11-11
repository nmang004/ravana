export interface NavLink {
  href?: string;
  label: string;
  subLinks?: { href: string; label: string }[];
}

export const navLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  {
    label: "Insights",
    subLinks: [
      { href: "/insights", label: "Insights" },
      { href: "/blog", label: "Blog" }
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
