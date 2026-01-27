import { Avatar } from "@/src/components/avatar"
import { ExternalLink } from "@/src/components/externalLink"
import type { FC } from "react"

export const IntroSection: FC = () => {
    return (
        <section className="flex flex-col max-w-full sm:flex-row gap-8 sm:gap-16 justify-center items-center my-8">
            <figure className="text-center flex flex-col items-center gap-2.5">
                <Avatar />
                <figcaption className="text-lg">Hi, I&apos;m Ethan! 👋</figcaption>
            </figure>
            <p className="w-80 max-w-full text-lg">
                I enjoy solving complex technical problems with code. I live in Northwest Arkansas, where I work at <ExternalLink href="https://acres.com/plat-map/map">Acres</ExternalLink>.
            </p>
        </section>
    )
} 
