import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Container, Section, Heading, Box, Flex, Text } from "@radix-ui/themes";
import WordpressItem, { WordpressItemProps } from "./wordpress-item";
import { GetProjects } from "@/functions/get-projects";

export async function Wordpress() {
	const projects: WordpressItemProps[] = await GetProjects("/api/wordpress/");
	return (
		<Section py={"3"}>
			<Container size={"3"} px={"3"}>
				<Heading
					as="h2"
					className="text-neutral-300"
					size={"7"}
					weight={"bold"}
				>
					Sites com Elementor + Wordpress
				</Heading>
				<Box
					p={"4"}
					mt={"4"}
					width={"100%"}
					className="bg-neutral-800/50 rounded-md"
				>
					<Flex align={"center"} gap={"2"}>
						<InfoCircledIcon className="shrink-0" width={16} height={16} />
						<Text>
							Sites desenhados e desenvolvidos com Elementor + Wordpress por mim
						</Text>
					</Flex>
				</Box>
				<Box
					p={"4"}
					mt={"4"}
					width={"100%"}
					className="bg-yellow-400/20 text-amber-300/80 rounded-md"
				>
					<Flex align={"center"} gap={"2"}>
						<InfoCircledIcon className="shrink-0" width={16} height={16} />
						<Text>
							São links reais em produção, onde a maioria não são mantidos por
							mim. Desde já, peço desculpas caso algum não esteja mais
							disponível.
						</Text>
					</Flex>
				</Box>
				<Flex asChild direction={"column"} mt={"6"} gap={"2"}>
					<ol className="list-decimal pl-5">
						{projects.map((project) => (
							<WordpressItem key={project.link} project={project} />
						))}
					</ol>
				</Flex>
			</Container>
		</Section>
	);
}
