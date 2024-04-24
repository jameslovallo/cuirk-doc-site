import { componentStyles, html } from 'cuirk'
import * as components from '../components/index.js'

export default html`
	<head>
		<style>
			${componentStyles(components)}
		</style>
	</head>
`
