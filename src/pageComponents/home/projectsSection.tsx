import { ProjectTeaser } from "@/src/components/projectTeaser"

export const ProjectsSection = () => {
    return (
        <section className="flex flex-col items-center gap-8">
            <h2 className="glossy-text text-3xl ">Some Recent Work</h2>
            <div className="flex flex-col gap-4">
                <ProjectTeaser
                    href="https://acres.com/plat-map/map"
                    imgUrl="/img/acres.webp" 
                    title="Acres"
                    description="A description of the Acres project"
                />
                <ProjectTeaser
                    href="https://church.tech/"
                    imgUrl="/img/church-tech.webp"
                    title="Church.tech"
                    description="Architectural pattern and developer workflow contributions, development of major features" 
                />
                <ProjectTeaser
                    href="https://www.yaylunch.com/"
                    imgUrl="/img/yaylunch.webp"
                    title="Yay Lunch"
                    description="Guiding a team of devs, performance improvements, new features, and major rewrites." 
                />
                <ProjectTeaser
                    href="https://robotriffs.com/"
                    imgUrl="/img/robot-riffs.webp"
                    title="Robot Riffs"
                    description="Solo development of this functioning twitter clone" 
                />
                <ProjectTeaser
                    href="https://www.opensgf.org/"
                    imgUrl="/img/open-sgf.webp"
                    title="Open SGF"
                    description="Guiding a team of devs, planning and executing new development, setting up infrastructure." 
                />
            </div>
        </section>
    )
}
