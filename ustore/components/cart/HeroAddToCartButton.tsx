import { useCart } from "@/context/CartContext";
import {Button} from "@heroui/react";

export const HeroAddToCartButton = ({ productId }: { productId: number }) => {
    const { addToCart } = useCart();
    return (
        <Button color="primary" onPress={() => addToCart(productId)}>Adicionar</Button>
    );
}