import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfólio de Herison Pereira",
	description:
		"Herison Pereira - Desenvolvedor front-end, especializado em React e Next.js"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Theme>{children}</Theme>
				<SpeedInsights />
			</body>
		</html>
	);
}
