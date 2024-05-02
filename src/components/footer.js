import { html, loop, scss } from 'cuirk'
import { link } from './link.js'

export const footer = (links) => html` <footer>${loop(links, link)}</footer> `

footer.style = scss`
	footer {
		background: var(--footer-bg, black);
		color: var(--footer-color, white);
		display: flex;
		gap: 1rem;
		justify-content: center;
		padding: 2rem 1rem;
		position: sticky;
		top: 100vh;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
`
