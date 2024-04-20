import { componentStyles, createTags, html } from 'cuirk'
import * as components from '../components/index.js'

const { footer, nav } = components

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
			<!-- meta -->
			<title>${title}</title>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:site_name" content="${title}" />
			<meta property="og:url" content="${url}" />
			<meta property="og:image" content="${image}" />
			<!-- component styles -->
			${componentStyles(components)}
			<!-- links -->
			${createTags(links, 'link')}
			<!-- scripts -->
			${createTags(scripts, 'script')}
		</head>
		<body>
			${nav({ links: navLinks })}
			<main>${children}</main>
			${footer({ links: navLinks })}
		</body>
	</html>
`
