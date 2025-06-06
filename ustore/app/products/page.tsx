import { HeroCardProduct } from "../../components/product/HeroCardProduct";
import { ProductProps } from "../../types/ProductProps";
import { HeroSearchBarProduct } from "@/components/product/HeroSearchBarProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Página de Produtos - UStore E-commerce",
    description: "Página de Produtos do UStore E-commerce",
    openGraph: {
        title: "Página de Produtos - UStore E-commerce",
        description: "Página de Produtos do UStore E-commerce",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}

export default async function ProductsPage() {
    return (
        <HeroSearchBarProduct />
    );
}