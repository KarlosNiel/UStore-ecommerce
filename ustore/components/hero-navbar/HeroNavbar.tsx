"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

import { HeroDrawerCart } from "@/components/hero-drawer/HeroDrawerCart";
import { ThemeSwitch } from "../theme-switch";
import { Logo } from "@/components/ui/logo";
import { CartIcon } from "../ui/icons/common-icons/cart";
import { HeroNavbarItem } from "./HeroNavbarItem";

export const HeroNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, logout, loading } = useAuth();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  if (loading) return null;

  return (
    <Navbar className="bg-black dark:bg-transparent text-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <HeroNavbarItem nome="Homepage" href="/products/" />
        <HeroNavbarItem nome="Categories" href="/products/category/" />
        <HeroNavbarItem nome="About" href="#" />
        <HeroNavbarItem nome="Contact" href="#contato"/>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <HeroDrawerCart />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
        {!isAuthenticated ? (
          <HeroNavbarItem nome="Sign In" href="/auth/login" />
        ) : (
          <span className="text-danger text-bold hover:text-red-500 cursor-pointer transition-colors duration-200" onClick={logout}>
            Logout
          </span>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};