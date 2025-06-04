"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroFooterItemProps = {
    nome: string;
    href: string;
};

export const HeroFooterItem = ({ nome, href }: HeroFooterItemProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 0.95,
                transition: { duration: 0.2 }
            }}
            className="inline-block"
        >
            <Link href={href} passHref className="block text-white hover:text-white transition-colors duration-200">
                {nome}
            </Link>
        </motion.div>
    );
};