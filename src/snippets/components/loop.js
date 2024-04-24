export const footer = ({ links }) => html`
	<footer>${loop(links, link)}</footer>
`
