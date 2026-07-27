import { ExternalLink } from "@/src/components/externalLink";
import type { FC } from "react";

export const NavBar: FC = () => {
    return (
        <nav
            className="w-full px-2.5 py-8 flex flex-row items-center font-semibold justify-center gap-3 border-b border-b-border dark:border-b-border-dark"
        >
            <ExternalLink href='mailto:ethan@ethanzitting.com'>Email</ExternalLink>
            <span>/</span>
            <ExternalLink href="https://github.com/ethanzitting">
                GitHub
            </ExternalLink>
            <span>/</span>
            <ExternalLink href="https://www.linkedin.com/in/ethanzitting/">
                LinkedIn
            </ExternalLink>
        </nav>
    )
}

