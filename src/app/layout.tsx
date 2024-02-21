import "./globals.css";
import localFont from "next/font/local";

const gensans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Medium.otf",
    },
  ],
  variable: "--font-gensans",
});

export const metadata = {
  title: "Select Safaris Africa",
  description: "Enjoy the Adventure of Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gensans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
