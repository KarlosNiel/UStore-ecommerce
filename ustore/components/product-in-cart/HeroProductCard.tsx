"use client";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/context/CartContext";


export const HeroProductCard = ({ product }: { product: Omit<CartItem, "quantity"> }) => {
    const { addToCart } = useCart();

    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h2 className="mt-2 font-semibold">{product.title}</h2>
            <p>R$ {product.price.toFixed(2)}</p>
            <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => addToCart(product)}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
}
