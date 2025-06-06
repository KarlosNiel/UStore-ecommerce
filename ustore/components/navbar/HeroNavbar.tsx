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
  } from "@heroui/react";

  import { HeroDrawerCart } from "@/components/drawer/HeroDrawerCart";
  import { ThemeSwitch } from "../theme/theme-switch";
  import { Logo } from "@/components/ui/logo";
  import { HeroNavbarItem } from "./HeroNavbarItem";
  import { HeroModalAboutUs } from "../about/HeroModalAboutUs"

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
        {/* Links de navegação */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <HeroNavbarItem nome="Homepage" href="/products/" />
          <HeroNavbarItem nome="Categorias" href="/products/category/" />
          <HeroModalAboutUs />
          <HeroNavbarItem nome="Contato" href="#contato"/>
        </NavbarContent>

        {/* botoões de ações */}
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

        {/* Menu de navegação */}
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