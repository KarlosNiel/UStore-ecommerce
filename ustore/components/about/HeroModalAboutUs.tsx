import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";

export const HeroModalAboutUs = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <motion.span
                whileHover={{
                    scale: 0.95,
                    transition: { duration: 0.2 }
                }}
                className="cursor-pointer"
                onClick={onOpen}
            >
                Sobre
            </motion.span>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Sobre</ModalHeader>
                            <ModalBody>
                                <p>
                                    Olá, Meu nome é Carlos Daniel, estou terminando de cursar o 4° Período em análise e
                                    desenvolvimento de sistemas.
                                </p>
                                <p>
                                    Este projeto, o UStore, é a avaliação final da matéria de Web II, onde tive o prazer
                                    de em basicamente em uma semana desenvolver um sistema a minha escolha, escolhi um e-commerce,
                                    porque eu quis fazer algo mais proximo da realidade do mercado, foi desafiador e me exigiu 
                                    bastante tempo, tentei dar o meu máximo aqui, espero que o resultado esteja mais que o suficiente.
                                </p>
                                <p>
                                    Gostei muito de desenvolver este projeto, foi uma  ótima experiência, pretendo aprender mais sobre e 
                                    desenvolver mais projetos, mais complexos e com mais funcionalidades. Além de estudar mais toda essa parte
                                    da web. Obrigado pela atenção!
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
