
type SocialLinkProps = {
    href: string;
    icon: React.ReactNode;
};

export const SocialLink = ({ href, icon }: SocialLinkProps) => (
    <a
        href={href}
        className="text-white hover:text-white transition-colors duration-300 text-xl"
    >
        {icon}
    </a>
);
