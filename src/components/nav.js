import { css, html, loop } from 'cuirk'
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

export const navStyles = css`
	nav {
		background: var(--nav-bg, black);
		color: var(--nav-color, white);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: 1rem;

		> div {
			display: flex;
			gap: 1rem;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;
			}

			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
`
