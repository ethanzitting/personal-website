import { ExternalLink } from "@/src/components/externalLink"
import { ProjectTeaser } from "@/src/components/projectTeaser"
import type { FC } from "react"

export const ProjectsSection: FC = () => {
    return (
        <section className="flex flex-col items-center gap-8">
            <h2 className="text-3xl">Some Recent Work</h2>
            <div className="flex flex-col gap-8">
                <ProjectTeaser
                    href="https://acres.com/plat-map/map"
                    imgUrl="/img/acres-intelligence.webp"
                    imgHeight={728}
                    imgAlt="A screenshot of Acres Intelligence, showing a builder-activity heat map beside a generated market analysis panel"
                    title="Frontend Engineer @ Acres"
                >
                    <span>Architected and built <ExternalLink className="inline" href="https://www.thesisdriven.com/letters/deep-dive-acres-and-ai-land-agents/">Acres Intelligence</ExternalLink>, an agentic AI copilot embedded in the product. It puts our data into a conversational format and operates the application on the user&apos;s behalf, changing pages, filling out forms, and controlling the map. Built in partnership with our CEO and COO to encode their domain expertise into it.</span>
                    <span>Led frontend development of an enterprise land CRM
                        (<ExternalLink className="inline" href="https://acres.com/plat-map/portfolio">&quot;Portfolio&quot;</ExternalLink>) used daily across hundreds of enterprise teams, replacing a costly legacy system.</span>
                    <span>Took ownership of an analytics system left orphaned for a year, recovering the lost institutional knowledge and rebuilding the end-to-end data flows to restore reliable attribution. Expanded observability from crash-only monitoring to full failure-path tracking.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://church.tech/"
                    imgUrl="/img/church-tech.webp"
                    imgAlt="A screenshot of the Church.tech homepage"
                    imgHeight={739}
                    title="Tech Lead @ Church.tech"
                >
                    <span>Led full stack development, directing junior engineers through code review, planning, technical direction, and hands-on debugging of their hardest problems. What we shipped together became the reference implementation the rest of the team worked from.</span>
                    <span>Owned the client relationship directly, gathering constraints, setting technical direction, and keeping each sprint pointed at the highest-value work.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://www.yaylunch.com/"
                    imgUrl="/img/yaylunch.webp"
                    imgAlt="A screenshot of the Yay Lunch homepage"
                    imgHeight={763}
                    title="Project Lead @ Yay Lunch"
                >
                    <span>Rewrote a complex bulk order editing tool for utility, performance, and maintainability, saving the client thousands of hours of labor per year.</span>
                    <span>Rebuilt the endpoint handling all of the client&apos;s online orders. It ran 10x faster, carried thorough test coverage, and shipped without a single bug.</span>
                    <span>Built a real-time dashboard that parsed heavy, complex data to surface delayed deliveries for the client&apos;s management team, reducing administrative overhead.</span>
                </ProjectTeaser>
            </div>
        </section>
    )
}
