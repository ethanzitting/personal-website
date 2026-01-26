import { SectionDivider } from "@/src/components/sectionDivider";
import { IntroSection } from "@/src/pageComponents/home/introSection";
import { ProjectsSection } from "@/src/pageComponents/home/projectsSection";
import type { FC } from "react";

export const HomePage: FC = () => {
    return ( 
        <main className="flex w-full flex-col items-center justify-between py-16 gap-16">
            <IntroSection />
            <SectionDivider />
            <ProjectsSection />
        </main>
    )
}
