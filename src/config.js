export const meta = {
	title: 'Cuirk',
	description: 'A fast ESM static site generator.',
	url: 'URL',
	image: 'Image',
	links: [
		{
			rel: 'stylesheet',
			href: '/src/style.css',
		},
		{
			rel: 'stylesheet',
			href: 'https://unpkg.com/@jongwooo/prism-theme-github@1.14.0/themes/prism-github-default-dark.min.css',
		},
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Cairo+Play:wght@700&display=swap',
		},
	],
}

export const navLinks = [
	{
		title: 'Home',
		link: '/',
		position: 'start',
	},
	{
		title: 'Quick Start',
		description: 'Start with a template',
		link: '/quick-start.html',
		linkLabel: 'Template Gallery',
		position: 'end',
	},
	{
		title: 'Layouts',
		description: 'The layout of your site',
		link: '/layouts.html',
		linkLabel: 'Layout Docs',
		position: 'end',
	},
	{
		title: 'Pages',
		description: 'Write content with MD in JS',
		link: '/pages.html',
		linkLabel: 'Page Docs',
		position: 'end',
	},
	{
		title: 'Components',
		description: 'Reusable markup with no JS',
		link: '/components.html',
		linkLabel: 'Component Docs',
		position: 'end',
	},
	{
		title: 'Islands',
		description: 'Small sections of interactive content',
		link: '/islands.html',
		linkLabel: 'Island Docs',
		position: 'end',
	},
	{
		title: 'Helpers',
		description: 'Utils to make life easier',
		link: '/helpers.html',
		linkLabel: 'Helper Docs',
		position: 'end',
	},
]
