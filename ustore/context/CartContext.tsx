
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Cart, CartProduct } from "@/types/Cart";
import { useAuth } from "@/context/AuthContext"


type CartContextType = {
    cart: CartProduct[];
    addToCart: (productId: number, quantity?: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    syncCart: () => Promise<void>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const userId = 1;
    const { isAuthenticated } = useAuth();

    // Carrega do localStorage ao iniciar
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    // Salva no localStorage sempre que mudar
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(productId: number, quantity: number = 1) {
        if (!isAuthenticated) return;
        setCart((prev) => {
            const exists = prev.find((p) => p.productId === productId);
            if (exists) {
                return prev.map((p) =>
                    p.productId === productId
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            }
            return [...prev, { productId, quantity }];
        });
    }

    function decreaseQuantity(productId: number) {
        if (!isAuthenticated) return;
        setCart((prev) =>
            prev.map((p) =>
                p.productId === productId && p.quantity > 1
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            )
        );
    }

    function removeFromCart(productId: number) {
        if (!isAuthenticated) return;
        setCart((prev) => prev.filter((p) => p.productId !== productId));
    }

    function clearCart() {
        if (!isAuthenticated) return;
        setCart([]);
    }

    // Sincroniza com a Fake Store API (POST ou PUT)
    async function syncCart() {
        if (!isAuthenticated) return;
        const payload = {
            userId,
            date: new Date().toISOString().split("T")[0],
            products: cart,
        };
        // Se já existe um carrinho, use PUT, senão POST
        await fetch("https://fakestoreapi.com/carts", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
        });
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, syncCart, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
}