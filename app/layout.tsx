import type { Metadata } from "next";
import "./globals.css";

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
			<body className={`antialiased bg-light-300`}>{children}</body>
		</html>
	);
}
