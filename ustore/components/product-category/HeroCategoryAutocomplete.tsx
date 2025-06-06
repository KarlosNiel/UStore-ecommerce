"use client";

import { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { ProductProps } from "../../types/ProductProps";
import { HeroCardProduct } from "../product/HeroCardProduct";

const category = (product: ProductProps) => {
    return product.category;
}

export const productsCategories = [
    { label: "Men's clothing", key: "men's clothing", description: "The second most popular pet in the world" },
    { label: "Jewelery", key: "jewelery", description: "The most popular pet in the world" },
    { label: "Electronics", key: "electronics", description: "The largest land animal" },
    { label: "Women's clothing", key: "women's clothing", description: "The king of the jungle" },
];

export const HeroCategoryAutocomplete = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [products, setProducts] = useState<ProductProps[]>([]);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : [];

    return (
        <div>
            <div className="flex justify-center ">
                <Autocomplete
                    className="max-w-xs"
                    defaultItems={productsCategories}
                    label="Categoria"
                    placeholder="Selecione uma categoria"
                    onSelectionChange={(key) => setSelectedCategory(key as string | null)}

                >
                    {(item) => (
                        <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
                    )}
                </Autocomplete>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                {filteredProducts.map((product) => (
                <HeroCardProduct 
                    id={product.id} 
                    key={product.id}
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                    category={product.category} 
                    image={product.image} />
                ))}

            </div>
        </div>
    );
}