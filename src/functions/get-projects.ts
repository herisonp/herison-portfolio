export const runtime = "nodejs";
export const fetchCache = "force-cache";

export async function getProjects(url: string) {
	const baseURL = process.env.SITE_URL + "/api" + url;
	const urlfinal = new URL(baseURL);
	const data = await fetch(urlfinal, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
	const { projects } = await data.json();
	return projects;
}
