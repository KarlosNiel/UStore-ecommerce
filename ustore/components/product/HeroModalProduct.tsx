"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Image,
} from "@heroui/react";
import { useDisclosure } from "@heroui/react";
import { ProductProps } from "../../types/ProductProps";
import { HeroAddToCartButton } from "../cart/HeroAddToCartButton";

export const HeroModalProduct = ({
    id,
    title,
    price,
    description,
    category,
    image,
}: ProductProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" onPress={onOpen}>
                Ver detalhes
            </Button>
            <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col items-center">
                                    <Image
                                        alt={title}
                                        className="object-contain rounded-xl bg-white mb-4"
                                        src={image}
                                        width={200}
                                        height={200}
                                    />
                                    <p className="text-tiny uppercase font-bold">{category}</p>
                                    <p className="font-bold text-primary mb-2 text-lg">R${price}</p>
                                    <p className="text-sm text-gray-600 text-center">{description}</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fechar
                                </Button>
                                <HeroAddToCartButton productId={id} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};