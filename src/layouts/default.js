import { componentScripts, componentStyles, html } from 'cuirk'
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
				<!-- page content -->
				${nav({ links: links })}
				<main>${children}</main>
				${footer({ links: links })}
				<!-- component scripts -->
				${componentScripts(components)}
			</body>
		</html>
	`
}
