import Image from "next/image";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    href: string;
    imgUrl: string;
    title: string;
}

export const ProjectTeaser: FC<Props> = ({ href, imgUrl, title, children = undefined }) => {
    return (
        <figure className="flex flex-col lg:flex-row border border-border dark:border-border-dark bg-button-bg dark:bg-button-bg-dark rounded-lg overflow-hidden">
            <Link
                href={href}
                target="_blank"
                rel="noreferrer nofollow noopener"
                className="overflow-hidden max-w-full min-w-full rounded-lg max-h-[422px] lg:max-w-[60%] lg:min-w-[60%]"
            >
                <Image
                    src={imgUrl}
                    className="max-h-160"
                    alt={`A screenshot of the ${title} website`}
                    height={640}
                    width={1000}
                />
            </Link>
            <figcaption className="text-left p-5 flex flex-col gap-2">
                <h3 className="glossy-text text-xl">{title}</h3>
                {children}
            </figcaption>
        </figure>
    )
}
