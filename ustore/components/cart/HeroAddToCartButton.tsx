import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@heroui/react";
import { useAuth } from "@/context/AuthContext";
import { HeroAlert } from "../alert/HeroAlert";
import { AnimatePresence, motion } from "framer-motion";

export const HeroAddToCartButton = ({ productId }: { productId: number }) => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
    };

    return (
        <div>
            {!isAuthenticated ? (
                <>
                    <Button color="primary" onPress={handleAlert}>Adicionar</Button>

                    <AnimatePresence>
                        {showAlert && (
                            <motion.div
                                className="fixed top-6 right-0 z-50 px-6 py-3"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <HeroAlert 
                                    title="Não Logado!"
                                    description="Você precisa estar logado para poder usar o carrinho."
                                    color="warning"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            ) : (
                <Button color="primary" onPress={() => addToCart(productId)}>Adicionar</Button>
            )}
        </div>
    );
};
