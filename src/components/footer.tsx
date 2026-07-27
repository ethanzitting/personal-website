import type { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
    return (
        <footer
            className={twMerge('px-5 py-10 w-full border-t border-t-border text-center dark:border-t-border-dark', className)}
        >
            © {new Date().getFullYear()} All Rights Reserved
        </footer>
    )
}
