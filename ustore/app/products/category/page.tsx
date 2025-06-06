import { Metadata } from "next";
import { HeroCategoryAutocomplete } from "../../../components/product-category/HeroCategoryAutocomplete";

export const metadata: Metadata = {
    title: "Página de Produtos por categoria - UStore E-commerce",
    description: "Página de Produtos pro categoria do UStore E-commerce",
    openGraph: {
        title: "Página de Produtos por caregoria - UStore E-commerce",
        description: "Página de Produtos por categoria do UStore E-commerce",
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

export default async function CategoryPage() {
    return (
        <HeroCategoryAutocomplete />
    );
}