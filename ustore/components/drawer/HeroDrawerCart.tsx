import React, { useEffect, useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { CartIcon } from "@/components/ui/icons/common-icons/cart";
import { useCart } from "@/hooks/useCart";
import { CartProduct } from "@/types/Cart";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@heroui/react";

type ProductDetails = {
    id: number;
    title: string;
    image: string;
    price: number;
};

export const HeroDrawerCart = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { cart, removeFromCart, clearCart, syncCart, addToCart, decreaseQuantity } = useCart();
    const [products, setProducts] = useState<Record<number, ProductDetails>>({});
    const { isAuthenticated } = useAuth();
    
    // Busca detalhes dos produtos do carrinho
    useEffect(() => {
        async function fetchProducts() {
            const ids = cart.map((item: CartProduct) => item.productId);
            const uniqueIds = Array.from(new Set(ids));
            const fetched: Record<number, ProductDetails> = {};

            await Promise.all(
                uniqueIds.map(async (id) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const data = await res.json();
                    fetched[id] = { id: data.id, title: data.title, image: data.image, price: data.price };
                })
            );
            setProducts(fetched);
        }

        if (cart.length > 0) fetchProducts();
        else setProducts({});
    }, [cart]);

    const total = cart.reduce((sum, item) => {
        const product = products[item.productId];
        if (!product) return sum;
        return sum + product.price * item.quantity;
    }, 0);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <span onClick={onOpen} className="cursor-pointer">
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Badge
                    color="danger"
                    content={totalItems}
                    isInvisible={!isAuthenticated || totalItems === 0}
                    size="sm"
                    showOutline={false}
                    className="absolute -top-1 -right-1"
                    >
                    <CartIcon />
                    </Badge>
                </div>
            </span>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                Seu Carrinho
                            </DrawerHeader>
                            <DrawerBody>
                                {!isAuthenticated ? (
                                    <div className="text-center text-warning font-bold">
                                        Faça login para usar o carrinho!
                                    </div>
                                ) : (
                                    cart.length === 0 ? (
                                    <p className="text-center text-gray-500">
                                        Seu carrinho está vazio.
                                    </p>
                                ) : (
                                    cart.map((item) => (
                                        <div
                                            key={item.productId}
                                            className="flex items-center justify-between border-b py-2"
                                        >
                                            <div className="flex items-center gap-3">
                                                {products[item.productId]?.image && (
                                                    <img
                                                        src={products[item.productId].image}
                                                        alt={products[item.productId].title}
                                                        className="w-52 h-20 object-contain rounded bg-white"
                                                    />
                                                )}
                                                <div>
                                                    <span className="font-semibold block">
                                                        {products[item.productId]?.title || `Produto #${item.productId}`}
                                                    </span>
                                                    <span className="ml-2 text-sm text-gray-500">
                                                        Qtd: {item.quantity}
                                                    </span>
                                                    <span className="ml-2 text-sm text-primary">
                                                        {products[item.productId] ? `R$ ${(products[item.productId].price * item.quantity).toFixed(2)}` : ""}
                                                    </span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Button
                                                            size="sm"
                                                            color="primary"
                                                            variant="light"
                                                            onPress={() => decreaseQuantity(item.productId)}
                                                            isDisabled={item.quantity <= 1}
                                                            >−</Button>
                                                        <span className="text-sm">{item.quantity}</span>
                                                        <Button
                                                            size="sm"
                                                            color="primary"
                                                            variant="light"
                                                            onPress={() => addToCart(item.productId, 1)}
                                                        >+</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                color="danger"
                                                variant="light"
                                                onPress={() => removeFromCart(item.productId)}
                                            >
                                                Remover
                                            </Button>
                                        </div>
                                    ))
                                )
                            )}
                            </DrawerBody>
                                
                            <DrawerFooter className="flex flex-col gap-8">
                                <div className="w-full flex justify-between items-center font-bold text-lg">
                                    <span>Total:</span>
                                    {!isAuthenticated ? (
                                    <span>
                                        R$ 0,00
                                    </span>
                                    ) : (
                                    <span>
                                        R$ {total.toFixed(2)}
                                    </span>
                                    )}

                                </div>
                                <div className="flex justify-end items-center">
                                    <Button color="danger" variant="light" onPress={clearCart}>
                                        Limpar Carrinho
                                    </Button>
                                    <Button
                                        color="primary"
                                        onPress={async () => {
                                            await syncCart();
                                            onClose();
                                        }}
                                    >
                                        Finalizar Compra
                                    </Button>
                                </div>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};