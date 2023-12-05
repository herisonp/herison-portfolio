import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Container, Section, Heading, Box, Flex, Text } from "@radix-ui/themes";
import FullStackItem, { FullStackItemProps } from "./fullstack-item";
import { GetProjects } from "@/functions/get-projects";

export async function FullStack() {
	const projects: FullStackItemProps[] = await GetProjects("/api/fullstack");
	return (
		<Section>
			<Container size={"3"} px={"3"}>
				<Heading
					as="h2"
					className="text-neutral-300"
					size={"7"}
					weight={"bold"}
				>
					Projetos full stack
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
							Sites front-end full stacks construídos por mim (design e
							desenvolvimento)
						</Text>
					</Flex>
				</Box>
				<Flex direction={"column"} mt={"6"} gap={"6"}>
					{projects.map((project) => (
						<FullStackItem key={project.link} project={project} />
					))}
				</Flex>
			</Container>
		</Section>
	);
}
