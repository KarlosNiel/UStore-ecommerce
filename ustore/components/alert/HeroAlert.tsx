import { Alert } from "@heroui/react";

type AlertProps = {
    title: string;
    description: string;
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export const HeroAlert = ({title, description, color}: AlertProps) => {

    return (
        <div className="flex items-center justify-center w-full">
            <Alert description={description} title={title} color={color} />
        </div>
    );
}