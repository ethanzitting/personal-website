import { Avatar } from "@/src/components/avatar"
import { ExternalLink } from "@/src/components/externalLink"
import type { FC } from "react"

export const IntroSection: FC = () => {
    return (
        <section className="flex flex-col max-w-full sm:flex-row gap-8 sm:gap-16 justify-center items-center my-8">
            {/* The design has no visible name heading, but the document still needs an h1. */}
            <h1 className="sr-only">Ethan Zitting</h1>
            <figure className="text-center flex flex-col items-center gap-2.5">
                <Avatar />
                <figcaption className="text-lg">Hi, I&apos;m Ethan! 👋</figcaption>
            </figure>
            <p className="w-80 max-w-full text-lg">
                I build agentic AI systems and the frontends they live in. I&apos;m currently a frontend engineer at <ExternalLink href="https://acres.com/plat-map/map">Acres</ExternalLink> in Northwest Arkansas, where I architected <ExternalLink href="https://www.thesisdriven.com/letters/deep-dive-acres-and-ai-land-agents/">Acres Intelligence</ExternalLink>, an AI copilot that operates our mapping application on the user&apos;s behalf. Before software, I designed industrial concrete machinery and co-invented <ExternalLink href="https://patents.google.com/patent/US11136769B2/en">a patent</ExternalLink>.
            </p>
        </section>
    )
}
