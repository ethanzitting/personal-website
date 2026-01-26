import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
    href: string;
    imgUrl: string;
    title: string;
    description: string;
}

export const ProjectTeaser: FC<Props> = ({ href, imgUrl, title, description }) => {
    return (
        <figure className="flex flex-row border border-border dark:border-border-dark dark:bg-button-bg-dark rounded-lg overflow-hidden">
            <Link
                href={href}
                target="_blank"
                rel="noreferrer nofollow noopener"
                className="overflow-hidden max-w-full min-w-full sm:max-w-[60%] sm:min-w-[60%]"
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
                <p>{description}</p>
            </figcaption>
        </figure>
    )
}
