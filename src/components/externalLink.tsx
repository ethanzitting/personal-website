import type { LinkProps } from "next/link"
import Link from "next/link"
import type { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"


export const ExternalLink: FC<LinkProps & PropsWithChildren & { className?: string }> = (props) => {
    return (
        <Link
            {...props}
            rel="noreferrer nofollow noopener"
            target="_blank"
            className={twMerge("underline hover:text-blue-500", props.className)}
        >
            {props.children}
        </Link >
    )
}
