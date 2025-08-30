import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Пијанархија",
	description:
		"Друштвена игра за пиење, инспирана од локалните стереотипи и македонската култура!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased bg-light-300`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
