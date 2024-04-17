import { css, html } from 'cuirk'

export const grid = (children) => html`
	<div class="grid">${children.join('')}</div>
`

export const gridStyles = css`
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(
			auto-fill,
			minmax(var(--grid-size, 20ch), 1fr)
		);
	}
`
