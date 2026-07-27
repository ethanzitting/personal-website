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
                I build agentic AI systems and the frontends they live in. I&apos;m currently a frontend engineer at <ExternalLink href="https://acres.com/plat-map/map">Acres</ExternalLink> in Northwest Arkansas, where I architected <ExternalLink href="https://www.thesisdriven.com/letters/deep-dive-acres-and-ai-land-agents/">Acres Intelligence</ExternalLink>, an AI copilot that operates our mapping application on the user&apos;s behalf. Before software, I designed industrial concrete machinery and co-invented a patent.
            </p>
        </section>
    )
}
