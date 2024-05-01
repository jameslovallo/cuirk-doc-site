import { html, scss, when } from 'cuirk'

export const card = ({ img, title, description, link, linkLabel }) => html`
	<a href="${link}" class="card">
		${when(img, html`<img src="${img}" />`)}
		${when(title, html`<h3>${title}</h3>`)}
		${when(description, html`<small>${description}</small>`)}
		${when(link && linkLabel, html`<small>${linkLabel}</small>`)}
	</a>
`

card.style = scss`
		.card {
		background: var(--c-surface);
		border: var(--c-border);
		border-radius: 1rem;
		color: var(--c-surface-color);
		display: grid;
		gap: .5rem;
		padding: 1rem;
		text-decoration: none;

		&:hover {
			background: var(--c-primary-hover);
			border-color: var(--c-primary-active);
		}
		&:active {
			background: var(--c-primary-active);
		}

		* {
			margin: 0;
		}

		small:last-of-type {
			display: inline-block;
			margin-top: .5rem;
		}
	}
`
