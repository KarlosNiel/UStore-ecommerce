import { Input } from "@heroui/react";

export const HeroSearchBar = ({
    value,
    onChange,
    className,
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}) => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
                label="Search products"
                type="text"
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    );
};