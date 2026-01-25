import { Avatar } from "@/src/components/avatar"
import type { FC } from "react"

export const IntroSection: FC = () => {
    return (
        <section className="flex flex-col items-center gap-4.5">
            <figure className="text-center">
                <Avatar />
                <figcaption className="text-lg">Hi, I&apos;m Ethan! 👋</figcaption>
            </figure>
            <h1 className="glossy-text text-[48px] md:text-[56px] max-w-[60%] md:max-w-[40%] text-center leading-tight">
                Solving Complex Problems in the Web Ecosystem
            </h1>
        </section>
    )
} 
