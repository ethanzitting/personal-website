import Link from "next/link";
import type { FC } from "react";

export const NavBar: FC = () => {
    return (
        <nav
            className="w-full px-2.5 py-4 flex flex-row items-center justify-center gap-3 border-b border-b-border dark:border-b-border-dark"
        >
            <Link href='mailto:ethan@ethanzitting.com' className="glossy-link p-1">Email</Link>
            <span>/</span>
            <Link href='mailto:ethan@ethanzitting.com' className="glossy-link p-1">Resume</Link>
            <span>/</span>
            <Link
                href="https://github.com/ethanzitting"
                rel="noreferrer nofollow noopener"
                target="_blank"
                className="glossy-link p-1"
            >
                GitHub
            </Link >
            <span>/</span>
            <Link href="https://www.linkedin.com/in/ethanzitting/" rel="noreferrer nofollow noopener" target="_blank" className="glossy-link p-1">LinkedIn</Link>
        </nav>
    )
}
