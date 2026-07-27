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
                    imgAlt="A screenshot of Acres Intelligence, showing a builder-activity heat map beside a generated market analysis panel"
                    title="Frontend Engineer @ Acres"
                >
                    <span>Architected and built Acres Intelligence, an agentic AI copilot embedded in the product. It puts our data into a conversational format and operates the application on the user&apos;s behalf, changing pages, filling out forms, and controlling the map. Built in partnership with our CEO and COO to encode their domain expertise into it.</span>
                    <span>Led frontend development of an enterprise land CRM
                        (<ExternalLink className="inline" href="https://acres.com/plat-map/portfolio">&quot;Portfolio&quot;</ExternalLink>) used daily across hundreds of enterprise teams, replacing a costly legacy system.</span>
                    <span>Took ownership of an analytics system left orphaned for a year, recovering the lost institutional knowledge and rebuilding the end-to-end data flows to restore reliable attribution. Expanded observability from crash-only monitoring to full failure-path tracking.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://church.tech/"
                    imgUrl="/img/church-tech.webp"
                    title="Tech Lead @ Church.tech"
                >
                    <span>Led full stack development, directing junior engineers through code review, planning, technical direction, and hands-on debugging of their hardest problems. The code we built together became the reference implementation the team built on.</span>
                    <span>Owned the client relationship directly, gathering constraints, setting technical direction, and keeping each sprint pointed at the highest-value work.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://www.yaylunch.com/"
                    imgUrl="/img/yaylunch.webp"
                    title="Project Lead @ Yay Lunch"
                >
                    <span>Rewrote a complex bulk order editing tool for utility, performance, and maintainability, saving the client thousands of hours of labor per year.</span>
                    <span>Rewrote the endpoint handling all of the client&apos;s online orders. It ran 10x faster, carried thorough test coverage, and shipped without a single bug.</span>
                    <span>Built a real-time dashboard that parsed heavy, complex data to surface delayed deliveries for the client&apos;s management team, reducing administrative overhead.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://robotriffs.com/"
                    imgUrl="/img/robot-riffs.webp"
                    title="Robot Riffs Hobby Project"
                >
                    <span>A Twitter clone I put together in my free time to get more familiar with Laravel 10, Vue 3, and InertiaJS.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://www.opensgf.org/"
                    imgUrl="/img/opensgf.webp"
                    title="Mentor @ Open SGF"
                >
                    <span>Worked alongside and mentored a small team of junior devs through the planning, hosting, and building of several simple websites.</span>
                </ProjectTeaser>
                <ProjectTeaser
                    href="https://patents.google.com/patent/US11136769B2/en"
                    imgUrl="/img/slipform-patent.webp"
                    imgAlt="Figure from patent US-11136769-B2, showing the slipforming formwork assembly in isometric view"
                    title="Co-Inventor @ Slipwell Industries"
                >
                    <span>Before software, I cofounded a cast-in-place concrete company and led R&amp;D on a slipforming machine for vertical, solid-concrete stairwells, directing the program from concept to a working prototype that poured a 35-foot stairwell.</span>
                    <span>I designed it alongside an outside designer and a structural engineer, teaching myself concrete chemistry, CAD, and structural fundamentals along the way, and co-invented the resulting patented formwork system (<ExternalLink className="inline" href="https://patents.google.com/patent/US11136769B2/en">US-11136769-B2</ExternalLink>).</span>
                </ProjectTeaser>
            </div>
        </section>
    )
}
