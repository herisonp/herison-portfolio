import Image from "next/image";
import {
	Heading,
	Container,
	Text,
	Flex,
	Button,
	IconButton
} from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
export function Header() {
	return (
		<header>
			<Container size={"3"} px={"3"}>
				<Flex gap={"4"} direction={"column"}>
					<Heading
						className="text-neutral-300"
						size={{
							initial: "8",
							xs: "9"
						}}
					>
						👋
					</Heading>
					<Heading
						className="text-neutral-300"
						as="h1"
						size={{
							initial: "8",
							xs: "9"
						}}
					>
						Herison Pereira
					</Heading>
				</Flex>
				<Text className="text-neutral-300" size={"3"}>
					Desenvolvedor front-end
				</Text>
				<Flex
					gap={"6"}
					className="bg-neutral-800/50 rounded-2xl p-8 mt-8"
					direction={{
						initial: "column",
						xs: "row"
					}}
				>
					<Image
						src="/avatar.jpg"
						alt="Fotografia de Herison Pereira"
						quality={100}
						width={360}
						height={360}
						className="w-full xs:max-w-[200px] h-auto shrink-0 rounded-2xl object-cover border-2 border-white"
					/>

					<Flex gap={"4"} direction={"column"}>
						<Text className="text-neutral-300" weight={"regular"} size={"2"}>
							Por mais de 10 anos na área da comunicação, passando por design e
							desenvolvimento de sites com WordPress, sempre fui apaixonado por
							tecnologia e <strong>desenvolvimento web</strong>. Por isso,
							atualmente estou procurando uma oportunidade para atuar como{" "}
							<strong>desenvolvedor front-end</strong> e com isso me solidificar
							cada vez mais como um profissional de tecnologia, ajudando
							empresas a crescerem através de soluções web.
						</Text>
						<Flex
							gap={"4"}
							align={{
								initial: "start",
								xs: "center"
							}}
							wrap={"wrap"}
						>
							<IconButton size="2" variant="solid" color="indigo" asChild>
								<a href="https://github.com/herisonp" target="_blank">
									<GitHubLogoIcon width={16} height={16} />
								</a>
							</IconButton>
							<IconButton size="2" variant="solid" color="indigo" asChild>
								<a
									href="https://linkedin.com/in/herison"
									target="_blank"
									className="text-neutral-300 text-sm"
								>
									<LinkedInLogoIcon width={16} height={16} />
								</a>
							</IconButton>
							<Button size="2" variant="solid" color="indigo" asChild>
								<a
									href="https://wa.me/5522981034342"
									target="_blank"
									className="text-neutral-300 text-sm"
								>
									(22) 98103-4342
								</a>
							</Button>
							<Button size="2" variant="solid" color="indigo" asChild>
								<a
									href="mailto:contato@herisonpereira.com.br"
									target="_blank"
									className="text-neutral-300 text-sm"
								>
									contato@herisonpereira.com.br
								</a>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</header>
	);
}
