import Image from "next/image";
import type { FC } from "react";

export const Avatar: FC = () => {
    return (
        <Image
            src="/ethan-headshot.webp"
            alt="Ethan Zitting Headshot"
            width={120}
            height={120}
            className="rounded-full"
        />
    )
}
