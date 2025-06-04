"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { ProductProps } from "../../../../types/ProductProps";

export const HeroCardDetailProduct = ({
    id,
    title,
    price,
    description,
    category,
    image,
}: ProductProps) => {
    return (
        <Card className="flex flex-col h-full py-3">
            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                <Image
                    alt={title}
                    className="object-contain rounded-xl bg-white"
                    src={image}
                    width={180}
                    height={180}
                />            
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-center">
                    <p className="text-xl uppercase font-bold text-center break-words max-w-md">{title}</p>
                    <h4 className="font-bold text-lg">{category}</h4>
                    <p className="font-bold text-lg text-primary mb-1">${price}</p>
                </CardHeader>
                <p className="text-sm text-gray-600 mt-2 text-center break-words max-w-md">
                    {description}
                </p>
                <div className="flex-1 w-full flex flex-col justify-end mt-4">
                </div>
            </CardBody>
        </Card>
    );
};