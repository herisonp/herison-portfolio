import { FullStackItemProps } from '@/components/fullstack/fullstack-item';

const fullstack: FullStackItemProps[] = [
	{
		title: 'ProbaSorte',
		description:
			'Projeto de desafio do Hackathon - Luck or Misfortune do Bootcamp da TripleTen. ProbaSorte é um aplicativo web para sugerir sequências de jogos na Mega Sena, baseado em estatísticas ou em seus amuletos.',
		image: 'https://herisonpereira.com.br/dev/imgs/fullstack/cover-03.jpg',
		link: 'https://probasorte.vercel.app/',
		repository: 'https://github.com/herisonp/ProbaSorte'
	},
	{
		title: 'Tribo Business',
		description:
			'Projeto de desafio pessoal, a aplicação é um sistema/aplicativo web para empreendedores do chat da Tribo poderem divulgar suas empresas para a própria Tribo. O principal desafio foi fazer toda parte de front-end, então criei todo layout do zero utilizando Figma, e como tecnologia para o desenvolvimento, utilizei Next.js, React e Styled-components.',
		image: 'https://herisonpereira.com.br/dev/imgs/fullstack/cover-02.jpg',
		link: 'https://tribobusiness.vercel.app/',
		repository: 'https://github.com/herisonp/tribo-business'
	},
	{
		title: 'Soft Skill - Comunicação',
		description:
			'Sou aluno de desenvolvimento web na TripleTen. E este foi um desafio proposto por Luiza Costa, nossa gestora de carreira, para desenvolver any com o tema sobre a melhor soft skill, com um prazo de 7 dias. Resolvi criar uma landing page descrevendo a soft skill, e como tecnologia utilzei React, Nextjs e Tailwindcss.',
		image: 'https://herisonpereira.com.br/dev/imgs/fullstack/cover-01.jpg',
		link: 'https://softskill-herison.vercel.app/',
		repository: 'https://github.com/herisonp/soft-skill-tripleten'
	}
];

export async function getFullstackProjects() {
	return fullstack;
}
