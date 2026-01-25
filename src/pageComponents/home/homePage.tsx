import { IntroSection } from "@/src/pageComponents/home/introSection";
import type { FC } from "react";

export const HomePage: FC = () => {
    return ( 
        <main className="flex w-full flex-col items-center justify-between py-32 sm:items-start">
            <IntroSection />
        </main>
    )
}
