import { InputProps } from "../types"
import MainLayout from "@/components/auth/MainLayout"

const Page = () => {
    const inputs: InputProps[] = [
        {
            label: "Email address",
            placeholder: "johndoe@gmail.com",
            type: "text",
        },
        { label: "Password", placeholder: "Enter password", type: "password" },
    ]
    return (
        <MainLayout
            inputs={inputs}
            name="login"
            buttonName="Login"
            title="Booking has never been this easier"
            subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
        />
    )
}

export default Page
