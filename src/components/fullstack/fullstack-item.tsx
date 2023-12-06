import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
	Heading,
	Text,
	Button,
	Flex,
	Grid,
	Card,
	Inset,
	Link as LinkRadix
} from "@radix-ui/themes";
import Image from "next/image";

export interface FullStackItemProps {
	title: string;
	description: string;
	image: string;
	link: string;
	repository: string;
}

export function FullStackItem({ project }: { project: FullStackItemProps }) {
	return (
		<Card
			size="3"
			className="!bg-neutral-800/50 hover:!bg-neutral-800/90 !transition-all"
		>
			<Grid
				columns={{
					initial: "1",
					sm: "2"
				}}
				gap={{
					initial: "4",
					xs: "6"
				}}
			>
				<Inset
					clip="border-box"
					side={{
						initial: "all"
					}}
					pr={{
						initial: "0",
						sm: "current"
					}}
					pb={{
						initial: "current",
						sm: "0"
					}}
				>
					<Image
						src={project.image}
						alt={project.title}
						width={540}
						height={303}
						className="w-full h-full object-cover block"
					/>
				</Inset>
				<Flex direction={"column"} gap={"4"}>
					<Heading as="h3" size={"5"} weight={"bold"}>
						{project.title}
					</Heading>
					<Text as="p" size="2">
						{project.description}
					</Text>
					<Flex gap={"4"} wrap={"wrap"}>
						<Button variant="solid" asChild>
							<a href={project.link} target="_blank">
								Ver online <ArrowTopRightIcon />
							</a>
						</Button>
						<a
							href={project.repository}
							target="_blank"
							className="flex gap-2 items-center opacity-70 hover:opacity-100 transition-opacity"
						>
							<GitHubLogoIcon />
							Repositório
						</a>
					</Flex>
				</Flex>
			</Grid>
		</Card>
	);
}
