import Image from "next/image";
import type { FC } from "react";

export const Avatar: FC = () => {
    return (
        <Image
            src="/img/ethan-headshot.webp"
            className="h-45 w-45 rounded-full"
            alt="Ethan Zitting Headshot"
            width={240}
            height={240}
        />
    )
}
