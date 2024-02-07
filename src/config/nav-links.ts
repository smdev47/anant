import { MainNavItem, SidebarNavItem } from "@/types/nav";

export const mainNav: MainNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Departments",
    href: "/dept",
  },
  {
    title: "Documents",
    href: "/docs",
  },
];

export const sidebarNav: SidebarNavItem[] = [
  {
    title: "Sidebar Link",
    href: "#",
    items: [
      {
        title: "Sidebar Inner Link",
        href: "#",
        items: [],
      },
    ],
  },
];
