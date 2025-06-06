"use client";  

import {Pagination} from "@heroui/react";
import { useRouter } from "next/navigation";

type HeroPassPageProps = {
    initialPage: number;
    total: number;
}

export const HeroPassPage = ({initialPage, total}: HeroPassPageProps) => {
    const router = useRouter();
    const handlePageChange = (id: number) => {
        router.push(`/products/${id}`);
    };

    return <Pagination loop showControls color="success" initialPage={initialPage} total={total} onChange={handlePageChange} />;
}