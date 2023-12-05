"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";

export interface WordpressItemProps {
	title: string;
	link: string;
	image: string;
}

export function WordpressItem({ project }: { project: WordpressItemProps }) {
	return (
		<li>
			<HoverCard.Root>
				<HoverCard.Trigger asChild>
					<a href={project.link} target="_blank" className="underline">
						{project.title}
					</a>
				</HoverCard.Trigger>
				<HoverCard.Portal>
					<HoverCard.Content
						className="w-[300px] rounded-md bg-neutral-800/50 p-1 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all overflow-hidden"
						sideOffset={5}
					>
						<AspectRatio ratio={16 / 9}>
							<Image
								src={project.image}
								alt={project.title}
								width={300}
								height={300}
								className="w-full object-cover"
							/>
						</AspectRatio>

						<HoverCard.Arrow className="fill-neutral-800/50" />
					</HoverCard.Content>
				</HoverCard.Portal>
			</HoverCard.Root>
		</li>
	);
}
