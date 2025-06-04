"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroFooterItemIconProps = {
    nome: string;
    href?: string;
    icon?: React.ReactNode; 
};

export const HeroFooterItemIcon = ({ nome, href, icon }: HeroFooterItemIconProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 0.95,
                transition: { duration: 0.2 }
            }}
            className="inline-block"
        >
            {href ? (
                <Link href={href} className=" text-white hover:text-white transition-colors duration-200 flex">
                    <span className="mr-2">{icon}</span>
                    {nome}
                </Link>
            ) : (
                <span className="flex items-center text-white">
                    <span className="mr-2">{icon}</span>
                    {nome}
                </span>
            )}
        </motion.div>
    );
};