import { createTags, html } from 'cuirk'

export default html`
	<head>
		<!-- links -->
		${createTags(links, 'link')}
		<!-- scripts -->
		${createTags(scripts, 'script')}
	</head>
`
