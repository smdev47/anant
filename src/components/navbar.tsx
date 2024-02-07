"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { mainNav } from "@/config/nav-links";

export default function Navbar() {
  return (
    <div className="">
      <NavigationMenu className="">
        <NavigationMenuList className="">
          {mainNav.map((links) => (
            <NavigationMenuItem key={links.href} className="">
              <Link href={links.href}>{links.title}</Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
