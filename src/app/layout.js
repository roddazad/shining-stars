import "./globals.css";
import Navbar from '@/components/Navbar';

import { Nunito, Baloo_2 } from "next/font/google";

// Import Google fonts with CSS variables
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo",
});

export const metadata = {
  title: "Shining Stars Daycare",
  description: "A nurturing and playful environment for children to grow and shine!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo.variable}`}>
      <body className="pt-16 font-sans bg-[#fff4eb] text-[#2b2b2b]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}