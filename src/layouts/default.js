import { html, tags } from 'cuirk'
import { componentCss, footer, nav } from '../components/index.js'

export default ({
	meta: { title, description, url, image },
	links,
	scripts,
	navLinks,
	children,
}) => html`
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<!-- meta -->
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:site_name" content="${title}" />
			<meta property="og:url" content="${url}" />
			<meta property="og:image" content="${image}" />
			<!-- links -->
			${tags(links, 'link')}
			<!-- scripts -->
			${tags(scripts, 'script')}
			<!-- styles -->
			<style>
				${componentCss}
			</style>
		</head>
		<body>
			${nav({ links: navLinks })}
			<main>${children}</main>
			${footer({ links: navLinks })}
		</body>
	</html>
`
