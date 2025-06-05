"use client";
import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 50 }}>
            <Spinner />
        </div>
    );
}