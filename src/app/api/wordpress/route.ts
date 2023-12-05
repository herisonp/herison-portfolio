import { NextResponse } from "next/server";

const projects = [
	{
		title: "strmdistro.com",
		link: "https://strmdistro.com",
		image: "/wordpress/strmdistro.png"
	},
	{
		title: "scopuminvestimentos.com.br",
		link: "https://scopuminvestimentos.com.br",
		image: "/wordpress/scopuminvestimentos.png"
	},
	{
		title: "plasticosmuniz.com.br",
		link: "https://plasticosmuniz.com.br",
		image: "/wordpress/plasticosmuniz.png"
	},
	{
		title: "herisonpereira.com.br/loja/preset",
		link: "https://herisonpereira.com.br/loja/preset",
		image: "/wordpress/herisonpereira.png"
	},
	{
		title: "agenciatorre.digital",
		link: "https://agenciatorre.digital",
		image: "/wordpress/agenciatorre.png"
	},
	{
		title: "estudioab.com.br",
		link: "https://estudioab.com.br/pagina-inicial",
		image: "/wordpress/estudioab.png"
	},
	{
		title: "clientivizar.com.br",
		link: "https://clientivizar.com.br",
		image: "/wordpress/clientivizar.png"
	},
	{
		title: "giolaser.seedperformance.com.br/nazare",
		link: "https://giolaser.seedperformance.com.br/nazare",
		image: "/wordpress/giolaser.png"
	}
];

export function GET() {
	return NextResponse.json({ projects });
}
