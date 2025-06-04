"use client";

import { useEffect, useState } from "react";
import { HeroCardProduct } from "@/components/product/HeroCardProduct";
import { HeroSearchBar } from "@/components/search-bar/HeroSearchBar";
import { ProductProps } from "@/types/ProductProps";

export const HeroSearchBarProduct = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products"  )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center w-full max-w-2xl">
                <HeroSearchBar value={search} onChange={e => setSearch(e.target.value)} className="" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {filtered.map((product) => (
                    <HeroCardProduct key={product.id} {...product} />
                ))}
            </div>
        </div>
    );

}