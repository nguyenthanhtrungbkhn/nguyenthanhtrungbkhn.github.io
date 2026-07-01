import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nguyen Thanh Trung, Ph.D. | Computer Networks, MPQUIC, AI for Networking",
  description:
    "Personal academic website of Dr. Nguyen Thanh Trung, researcher in computer networks, MPQUIC/QUIC, AI for networking, wireless networks, and smart healthcare systems.",
  keywords: [
    "Nguyen Thanh Trung",
    "MPQUIC",
    "QUIC",
    "AI for Networking",
    "Computer Networks",
    "Phenikaa University",
    "Smart Healthcare"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
