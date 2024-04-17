import { css, html } from 'cuirk'

export const grid = (children) => html` <div class="grid">${children}</div> `

export const gridStyles = css`
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(
			auto-fill,
			minmax(var(--grid-size, 30ch), 1fr)
		);
	}
`
