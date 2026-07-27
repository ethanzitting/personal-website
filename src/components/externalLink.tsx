import type { LinkProps } from "next/link"
import Link from "next/link"
import type { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type Props = LinkProps & PropsWithChildren & { className?: string }

export const ExternalLink: FC<Props> = ({ className, children, ...props }) => {
    return (
        <Link
            {...props}
            rel="noreferrer nofollow noopener"
            target="_blank"
            className={twMerge("underline hover:text-blue-500", className)}
        >
            {children}
        </Link>
    )
}
