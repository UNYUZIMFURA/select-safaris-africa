import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { HiArrowUp } from "react-icons/hi2"

const BackToTop = () => {
    const router = useRouter()
    const [isBackToTopRendered, setIsBackToTopRendered] =
        useState<boolean>(false)

    useEffect(() => {
        const alterStyles = () => {
            const backToTopButton = document.querySelector(
                ".back-to-top",
            ) as HTMLElement | null
            if (backToTopButton) {
                backToTopButton.style.visibility = isBackToTopRendered
                    ? "visible"
                    : "hidden"
                backToTopButton.style.opacity = isBackToTopRendered ? "1" : "0"
                backToTopButton.style.transform = isBackToTopRendered
                    ? "scale(1)"
                    : "scale(0)"
            }
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setIsBackToTopRendered(true)
            } else {
                setIsBackToTopRendered(false)
            }
        })

        alterStyles()
    }, [isBackToTopRendered])
    return (
        <div
            onClick={() => router.push("#")}
            className={`back-to-top invisible fixed bottom-[4rem] right-[1rem] z-20 mt-2 flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-full bg-brand text-tertiary1 min-[1200px]:right-[3rem] 2xl:right-[4rem]`}
        >
            <HiArrowUp size={20} />
        </div>
    )
}

export default BackToTop
