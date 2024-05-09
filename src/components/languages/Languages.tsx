import Image from "next/image"
import { useEffect } from "react"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/redux/store"
import { hideLanguages } from "@/redux/features/languages"

const Languages = () => {
    const languages = [
        { language: "French", icon: "fr" },
        { language: "Chinese", icon: "cn" },
        { language: "German", icon: "de" },
        { language: "Spanish", icon: "es" },
    ]
    const dispatch = useDispatch<AppDispatch>()
    const languagesOpen = useAppSelector(
        (state) => state.LanguagesReducer.value.state,
    )

    useEffect(() => {
        if (languagesOpen) {
            dispatch(hideLanguages())
        }
    }, [])

    // Logic to close Languages Div once there is a click that occured outside of it
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const languagesEl = document.getElementById("languages-el")
            const clickedElement = e.target
            if (
                languagesOpen &&
                clickedElement !== languagesEl &&
                !languagesEl?.contains(clickedElement as Node)
            ) {
                dispatch(hideLanguages())
            }
        }
        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [languagesOpen])
    return (
        <div
            id="languages-el"
            className={`${languagesOpen ? "opacity-1 visible lg:flex" : "invisible opacity-0"} absolute right-[1.65rem] top-[5rem] hidden w-[13rem] flex-col overflow-hidden rounded-md bg-white text-secondary shadow-md min-[1200px]:right-[4rem] xl:right-[4rem] 2xl:right-[8.5rem] 2xl:w-[14rem]`}
        >
            {languages.map((el, index) => (
                <div
                    className="flex cursor-pointer items-center gap-3 px-4 py-3 transition ease-in-out hover:bg-brand hover:text-white"
                    key={index}
                >
                    <div className="load-dark relative h-[20px] w-[32px]">
                        <Image
                            src={`/icons/${el.icon}.png`}
                            alt=""
                            fill={true}
                        />
                    </div>
                    <span>{el.language}</span>
                </div>
            ))}
        </div>
    )
}

export default Languages
