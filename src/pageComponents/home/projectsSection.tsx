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
                    imgUrl="/img/acres-portfolio.webp"
                    title="Frontend Engineer @ Acres"
                >
                    <span>Solo developed the front end of an enterprise-grade land CRM used daily by 500+ enterprise teams
                        (<ExternalLink className="inline" href="https://acres.com/plat-map/portfolio">&quot;Portfolio&quot;</ExternalLink>).</span>
                    <span>Took ownership of the ownerless legacy analytics infra, auditing, repairing, and clarifying it, allowing for far better conversion rates, contributing to a doubling of revenue in 2025.</span>
                    <span>Countless other contributions to the website utility, stability, maintainability, and team culture.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://church.tech/"
                    imgUrl="/img/church-tech.webp"
                    title="Tech Lead @ Church.tech"
                >
                    <span>Led a small team of full stack developers in the development of major features, performance improvements, and refactors of legacy code.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://www.yaylunch.com/"
                    imgUrl="/img/yaylunch.webp"
                    title="Project Lead @ Yay Lunch"
                >
                    <span>Rewrote a complex bulk order editing tool, improving both utility and performance, saving the client 5000+ hours of labor per year.</span>
                    <span>Fully rewrote the endpoint through which all of the client&apos;s online orders are placed, adding test coverage and improving speed by 10x, while introducing no bugs.</span>
                    <span>Led a small team of full stack developers in the development of many other major features, performance improvements, and refactors of legacy code.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://robotriffs.com/"
                    imgUrl="/img/robot-riffs.webp"
                    title="Robot Riffs Hobby Project"
                >
                    <span>This was just a simple twitter clone I put together in my free time to learn Vue3 and InertiaJS</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://www.opensgf.org/"
                    imgUrl="/img/opensgf.webp"
                    title="Mentor @ Open SGF"
                >
                    <span>Worked alongside, and mentored a small team of junior devs, in the planning, hosting, and building of several simple websites.</span>
                </ProjectTeaser>
            </div>
        </section>
    )
}
