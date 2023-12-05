import { NextRequest, NextResponse } from "next/server";

const projects = [
	{
		title: "strmdistro.com",
		link: "https://strmdistro.com",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/strmdistro.png"
	},
	{
		title: "scopuminvestimentos.com.br",
		link: "https://scopuminvestimentos.com.br",
		image:
			"https://herisonpereira.com.br/dev/imgs/wordpress/scopuminvestimentos.png"
	},
	{
		title: "plasticosmuniz.com.br",
		link: "https://plasticosmuniz.com.br",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/plasticosmuniz.png"
	},
	{
		title: "herisonpereira.com.br/loja/preset",
		link: "https://herisonpereira.com.br/loja/preset",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/herisonpereira.png"
	},
	{
		title: "agenciatorre.digital",
		link: "https://agenciatorre.digital",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/agenciatorre.png"
	},
	{
		title: "estudioab.com.br",
		link: "https://estudioab.com.br/pagina-inicial",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/estudioab.png"
	},
	{
		title: "clientivizar.com.br",
		link: "https://clientivizar.com.br",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/clientivizar.png"
	},
	{
		title: "giolaser.seedperformance.com.br/nazare",
		link: "https://giolaser.seedperformance.com.br/nazare",
		image: "https://herisonpereira.com.br/dev/imgs/wordpress/giolaser.png"
	}
];

export async function GET(req: NextRequest) {
	return NextResponse.json({ projects });
}
