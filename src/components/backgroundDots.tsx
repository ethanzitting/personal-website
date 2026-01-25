import type { FC } from "react";

export const BackgroundDots: FC = () => {
    return (
        <div
            className="w-full z-[-1] h-full bg-size-[160px] bg-repeat bg-center fixed top-0 left-0 bg-[url('/img/dots-light-grey.svg')]">
        </div>
    )
}
