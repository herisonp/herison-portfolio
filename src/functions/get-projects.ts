export async function GetProjects(url: string) {
	const data = await fetch(`${process.env.SITE_URL!}${url}`, {
		method: "GET",
		cache: "no-store"
	});
	const { projects } = await data.json();
	return projects;
}
