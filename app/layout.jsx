import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Global/Header";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Global/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "M.Doctor",
  description: "Build By Maro Asam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased mx-4 sm:mx-[10%] light`}>
        <Providers>
          <NextTopLoader />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
