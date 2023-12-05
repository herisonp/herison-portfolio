import { NextRequest, NextResponse } from "next/server";

const projects = [
	{
		title: "Tribo Business",
		description:
			"Projeto de desafio pessoal, a aplicação é um sistema/aplicativo web para empreendedores do chat da Tribo poderem divulgar suas empresas para a própria Tribo. O principal desafio foi fazer toda parte de front-end, então criei todo layout do zero utilizando Figma, e como tecnologia para o desenvolvimento, utilizei Next.js, React e Styled-components.",
		image: "https://herisonpereira.com.br/dev/imgs/fullstack/cover-02.jpg",
		link: "https://tribobusiness.vercel.app/"
	},
	{
		title: "Soft Skill - Comunicação",
		description:
			"Sou aluno de desenvolvimento web na TripleTen. E este foi um desafio proposto por Luiza Costa, nossa gestora de carreira, para desenvolver any com o tema sobre a melhor soft skill, com um prazo de 7 dias. Resolvi criar uma landing page descrevendo a soft skill, e como tecnologia utilzei React, Nextjs e Tailwindcss.",
		image: "https://herisonpereira.com.br/dev/imgs/fullstack/cover-01.jpg",
		link: "https://soft-skill-t10.vercel.app/"
	}
];

export const runtime = "nodejs";
export const fetchCache = "force-cache";

export async function GET(req: NextRequest) {
	return NextResponse.json({ projects });
}
