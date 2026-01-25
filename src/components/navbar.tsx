import { IconEnvelope } from "@/public/img/iconEnvelope";
import Link from "next/link";
import type { FC } from "react";

export const NavBar: FC = () => {
    return (
        <nav
            className="w-full px-2.5 py-4 flex flex-row items-center gap-3 border-b border-b-border">
            <Link href="mailto:ethan@ethanzitting.com"
                className="glossy-link h-15 w-15 bg-button-bg rounded-full flex items-center justify-center border border-border">
                <IconEnvelope />
            </Link>
            <Link href='mailto:ethan@ethanzitting.com' className="glossy-link p-1">Get in touch</Link>
            <Link href="https://github.com/ethanzitting" rel="noreferrer nofollow noopener" target="_blank"
                className="ml-auto glossy-link p-1">GitHub</Link >
            <span>/</span>
            <Link href="https://www.linkedin.com/in/ethanzitting/" rel="noreferrer nofollow noopener" target="_blank" className="glossy-link p-1">LinkedIn</Link>
        </nav>
    )
}
