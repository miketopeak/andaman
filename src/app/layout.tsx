import Footer from "@/components/global/Footer";
import Hero from "@/components/global/Hero";
import Navbar from "@/components/global/Navbar";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/globals.scss";
import "../styles/styles.scss";

const helvetica = localFont({
  src: [
    {
      path: '../../public/assets/fonts/helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/helvetica-bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/assets/fonts/helvetica-light.ttf',
      weight: '300',
      style: 'light',
    }
  ],
  variable: '--font-helvetica',
})


export const metadata: Metadata = {
  title: "Andaman Travel Booking",
  description: "Andaman Travel Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
