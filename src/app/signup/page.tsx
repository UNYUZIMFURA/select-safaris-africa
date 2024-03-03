import MainLayout from "@/components/auth/MainLayout";
import { InputProps } from "../types";

const Page = () => {
  const inputs: InputProps[] = [
    { label: "Full names", placeholder: "John Doe", type: "text" },
    { label: "Email address", placeholder: "johndoe@gmail.com", type: "text" },
    { label: "Phone number", placeholder: "+250 788 989 756", type: "text" },
  ];
  return (
    <MainLayout
      inputs={inputs}
      name="signup"
      title="Join the best booking platform in Africa"
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
    />
  );
};

export default Page;
