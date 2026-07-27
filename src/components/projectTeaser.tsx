import { ExternalLink } from "@/src/components/externalLink";
import Image from "next/image";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    href: string;
    imgUrl: string;
    title: string;
    /**
     * The image's true height at 1000px wide. Required so the browser reserves
     * the right box before the image loads; a wrong ratio here shows up as
     * layout shift.
     */
    imgHeight: number;
    /** Describes the image itself. Titles read "Role @ Company", so they do not derive usable alt text. */
    imgAlt: string;
}

export const ProjectTeaser: FC<Props> = ({ href, imgUrl, title, imgHeight, imgAlt, children }) => {
    return (
        <figure className="flex flex-col lg:flex-row border border-border dark:border-border-dark bg-button-bg dark:bg-button-bg-dark rounded-lg overflow-hidden">
            <ExternalLink
                href={href}
                className="no-underline overflow-hidden max-w-full min-w-full rounded-lg max-h-[422px] lg:max-w-[60%] lg:min-w-[60%]"
            >
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    height={imgHeight}
                    width={1000}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                />
            </ExternalLink>
            <figcaption className="text-left p-5 flex flex-col gap-2">
                <h3 className="text-xl">{title}</h3>
                {children}
            </figcaption>
        </figure>
    )
}
