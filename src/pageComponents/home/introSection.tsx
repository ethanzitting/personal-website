import { Avatar } from "@/src/components/avatar"
import Link from "next/link"
import type { FC } from "react"

export const IntroSection: FC = () => {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center gap-16">
            <figure className="text-center flex flex-col items-center gap-2.5">
                <Avatar />
                <figcaption className="text-lg">Hi, I&apos;m Ethan! 👋</figcaption>
            </figure>
            <p className="w-80 max-w-full text-lg">
                I enjoy solving complex technical problems with code. I live in Northwest Arkansas, where I work at <Link href="https://acres.com/plat-map/map" target="_blank" rel="noreferrer nofollow noopener" className="underline hover:text-blue-500">Acres</Link>.
            </p>
        </section>
    )
} 
