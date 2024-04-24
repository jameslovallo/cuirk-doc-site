import { html, loop, scss } from 'cuirk'
import { link } from './link.js'

export const nav = ({ links }) => {
	const left = links.filter(({ position }) => position === 'start')
	const center = links.filter(({ position }) => position === 'center')
	const right = links.filter(({ position }) => position === 'end')
	return html`
		<nav>
			<div>${loop(left, link)}</div>
			<div>${loop(center, link)}</div>
			<div>${loop(right, link)}</div>
		</nav>
	`
}

nav.style = scss`
	nav {
		background: var(--nav-bg, black);
		color: var(--nav-color, white);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: 0 .5rem;

		> div {
			display: flex;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;
			}

			a {
				color: inherit;
				padding: 1rem .5rem;
				text-decoration: none;

				&:hover {
					background: #111;
				}
			}
		}
	}
`
