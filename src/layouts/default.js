import { componentStyles, html } from 'cuirk'
import * as components from '../components/index.js'
import links from '../data/nav.js'

const { footer, pageMeta, nav } = components

export default ({ meta, children }) => {
	return html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<!-- page meta -->
				${pageMeta(meta)}
				<!-- component styles -->
				${componentStyles(components)}
			</head>
			<body>
				${nav({ links: links })}
				<main>${children}</main>
				${footer({ links: links })}
			</body>
		</html>
	`
}
