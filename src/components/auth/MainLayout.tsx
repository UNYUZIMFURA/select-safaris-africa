"use client"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { InputProps } from "@/app/types"
import { useRouter } from "next/navigation"

type Props = {
    name: string
    buttonName: string
    title: string
    subtitle: string
    inputs: InputProps[]
}

const MainLayout: React.FC<Props> = ({
    name,
    buttonName,
    title,
    subtitle,
    inputs,
}) => {
    const router = useRouter()
    return (
        <div className="flex min-h-screen w-full">
            <div className="flex h-full w-full flex-col items-center  justify-center border bg-white p-4 lg:w-[40%]">
                <div className="flex w-full max-w-[28rem] flex-col rounded-md p-4 text-black lg:py-[4rem]">
                    <div className="flex flex-col gap-4 py-5">
                        <Image
                            src="/images/favicon.png"
                            alt="Lion head logo"
                            height={42}
                            width={42}
                            className="cursor-pointer"
                            onClick={() => router.push("/")}
                        />
                        <span className="text-lg font-bold tracking-wide">
                            Welcome back!
                        </span>
                        <span className="text-secondary">
                            Enter your credentials to login
                        </span>
                    </div>
                    <form className="w-full">
                        <div className="flex w-full flex-col">
                            {inputs.map((input, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-4 py-3"
                                >
                                    <label>{input.label}</label>
                                    <input
                                        placeholder={input.placeholder}
                                        type={input.type}
                                        className="rounded-md border p-4 text-[#0000008e]"
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 w-full rounded-md bg-brand p-4 text-white">
                            {buttonName}
                        </button>
                        <div className="mt-4 flex w-full cursor-pointer items-center gap-8 rounded-md border p-4">
                            <FcGoogle size={25} />
                            <span className="text-secondary">
                                Continue with google
                            </span>
                        </div>
                        <div className="mt-4 flex w-full cursor-pointer items-center gap-8 rounded-md border p-4">
                            <Image
                                height={23}
                                width={23}
                                alt=""
                                src="/icons/instagram.png"
                            />
                            <span className="text-secondary">
                                Continue with instagram
                            </span>
                        </div>
                        <div className="mt-4 flex w-full cursor-pointer items-center gap-8 rounded-md border p-4">
                            <FaFacebook size={25} fill="#1877F2" />
                            <span className="text-secondary">
                                Continue with facebook
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className="hidden h-full flex-col items-center justify-center bg-cover text-white lg:flex lg:w-[60%]"
                style={{
                    backgroundImage:
                        "linear-gradient(to left, rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('/images/sunset.webp')",
                }}
            >
                <div
                    className={`mb-[5rem] flex flex-col gap-8 ${name === "login" ? "max-w-[29rem] 2xl:max-w-[35rem]" : "max-w-[34rem] 2xl:max-w-[43rem]"} xl:gap-10`}
                >
                    <span className="mr-[12rem] text-brand 2xl:text-lg">
                        SELECT SAFARIS EAST AFRICA
                    </span>
                    <h2 className="text-5xl font-bold leading-[4rem] tracking-wider 2xl:text-6xl 2xl:leading-[5rem]">
                        {title}
                    </h2>
                    <p className="text-lg text-secondary 2xl:text-xl 2xl:leading-[2rem]">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainLayout
