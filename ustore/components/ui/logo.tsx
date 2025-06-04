import { BoxesIcon } from '@/components/ui/icons/common-icons/boxes';

export const Logo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <BoxesIcon
                size={24}
                className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span
                className="text-lg font-bold transition-all duration-300 group-hover:text-primary group-hover:scale-105"
            >
                UStore
            </span>
        </div>
    );
};
