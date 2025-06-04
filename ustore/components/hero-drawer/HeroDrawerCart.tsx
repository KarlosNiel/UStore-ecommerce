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
import { HeroProductCard } from "@/components/product-in-cart/HeroProductCard";
import { useCart } from "@/hooks/useCart"; // Importe seu contexto de carrinho

export const HeroDrawerCart = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { cart } = useCart(); // cart é um array de CartItem

    return (
        <>
            <span onClick={onOpen} className="cursor-pointer">
                <CartIcon />
            </span>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Seu Carrinho</DrawerHeader>
                            <DrawerBody>
                                {cart.length === 0 ? (
                                    <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
                                ) : (
                                    cart.map((product) => (
                                        <HeroProductCard key={product.id} product={product} />
                                    ))
                                )}
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fechar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Finalizar Compra
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};