import path from "path";
import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import sidebar from "./sidebar";

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: "@vuepress/vite",
	templateDev: path.join(__dirname, "templates", "index.dev.html"),
	templateSSR: path.join(__dirname, "templates", "index.ssr.html"),
	lang: "en-US",
	title: "YUNA",
	description:
		"Yuna is a Discord Music Bot support multiple platform such as : Youtube , Spotify , ...",
	head: [
		["meta", { charset: "utf-8" }],
		[
			"meta",
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0",
			},
		],
		["link", { rel: "icon", href: "/favicon.png" }],
		["meta", { name: "theme-color", content: "#f57794" }],
		["meta", { name: "twitter:card", content: "summary" }],
		["meta", { property: "og:title", content: "Yuna BOT" }],
		[
			"meta",
			{
				property: "og:description",
				content:
					"Yuna is a Discord Music Bot support multiple platform such as : Youtube , Spotify , ...",
			},
		],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:url", content: "https://replacethislater.com" }],
		["meta", { property: "og:locale", content: "en_US" }],
		["meta", { property: "og:image", content: "/meta-image.png" }],
	],
	theme: path.join(__dirname, "theme", "index.ts"),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: "HellCatVN/Yuna",
		repoLabel: "Contribute!",
		docsDir: "doc",
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [
		[
			"@vuepress/container",
			{
				type: "info",
				before: (info: string): string =>
					`<div class="custom-container info">${
						info
							? `<p class="custom-container-title">${info}</p>`
							: ""
					}\n`,
				after: (): string => "</div>\n",
			},
		],
	],
});

const { ALGOLIA_DOCSEARCH_API_KEY, GOOGLE_ANALYTICS_ID, NODE_ENV } =
	process.env;

if (
	NODE_ENV === "production" &&
	ALGOLIA_DOCSEARCH_API_KEY &&
	GOOGLE_ANALYTICS_ID
) {
	config.plugins.push(
		[
			"@vuepress/plugin-docsearch",
			{
				apiKey: ALGOLIA_DOCSEARCH_API_KEY,
				indexName: "discordjs",
				placeholder: "Search",
			},
		],
		["@vuepress/plugin-google-analytics", { id: GOOGLE_ANALYTICS_ID }]
	);
}

export default config;
