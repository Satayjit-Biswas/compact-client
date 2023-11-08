import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "500",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				<Nav></Nav>
				<div className="min-h-screen">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
