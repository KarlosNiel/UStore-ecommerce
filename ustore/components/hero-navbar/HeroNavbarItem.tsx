"use client";
import Link from "next/link";
import { NavbarItem as HerouiNavbarItem } from "@heroui/react";
import { motion } from "framer-motion";

type HeroNavbarItemProps = {
  nome: string;
  href: string;
};

export const HeroNavbarItem = ({ nome, href }: HeroNavbarItemProps) => {
  return (
    <HerouiNavbarItem>
      <motion.div
        whileHover={{ 
          scale: 0.9, 
          transition: { duration: 0.30 } 
        }}
        className="inline-block"
      >
        <Link href={href} passHref className="block py-2">
          {nome}
        </Link>
      </motion.div>
    </HerouiNavbarItem>
  );
};