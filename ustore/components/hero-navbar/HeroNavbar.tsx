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
  import { ThemeSwitch } from "../theme/theme-switch";
  import { Logo } from "@/components/ui/logo";
  import { CartIcon } from "../ui/icons/common-icons/cart";
  import { HeroNavbarItem } from "./HeroNavbarItem";

  export const HeroNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isAuthenticated, logout, loading } = useAuth();

    const menuItems = [
      {nome: "Homepage", href: "/products/"},
      {nome: "Categorias", href: "/products/category/"},
      {nome: "sobre", href: "#"},
      {nome: "contato", href: "#contato"}
    ];

    const handleMenuItemClick = () => setIsMenuOpen(false);

    return (
      <Navbar className="bg-black dark:bg-transparent text-white" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
          <HeroNavbarItem nome="Categorias" href="/products/category/" />
          <HeroNavbarItem nome="Sobre" href="#" />
          <HeroNavbarItem nome="Contato" href="#contato"/>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <HeroDrawerCart />
          </NavbarItem>
          <NavbarItem className="flex items-center">
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
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.nome}>
              <Link
                className="w-full"
                color="foreground"
                href={item.href}
                size="lg"
                onClick={handleMenuItemClick}
              >
                {item.nome}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  };