export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const NAVBAR_SELECTORS = {
  container: ".navbar-container",
  logo: ".navbar-logo",
  desktopLinks: ".navbar-link",
  mobileButton: ".navbar-mobile-button",
  mobileMenu: ".mobile-menu",
  mobileMenuItems: ".mobile-menu-item",
} as const;
