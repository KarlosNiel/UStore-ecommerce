"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { ProductProps } from "../../types/ProductProps";
import { HeroModalProduct } from "./HeroModalProduct";

export const HeroCardProduct = ({
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
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{category}</p>
                    <h4 className="font-bold text-large">{title.substring(0, 40)}...</h4>
                    <p className="font-bold text-primary mb-1">${price}</p>
                </CardHeader>
                <p className="text-xs text-gray-600 mt-2 text-center">
                    {description.substring(0, 80)}...
                </p>
                <div className="flex-1 w-full flex flex-col justify-end mt-4">
                    <HeroModalProduct
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                </div>
            </CardBody>
        </Card>
    );
};