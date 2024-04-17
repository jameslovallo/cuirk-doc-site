import { css, html, when } from 'cuirk'

export const card = ({ img, title, description, link, linkLabel }) => html`
	<div class="card">
		${when(img, html`<img src="${img}" />`)}
		${when(title, html`<h3>${title}</h3>`)}
		${when(description, html`<p>${description}</p>`)}
		${when(link && linkLabel, html`<a href="${link}">${linkLabel}</a>`)}
	</div>
`

export const cardStyles = css`
	.card {
		--card-padding: 0.75rem;
		border: var(--card-border, 1px solid rgba(155, 155, 155, 0.5));
		border-radius: var(--card-br, 0.25rem);
		display: grid;
		grid-template-rows: auto 1fr;
		padding-bottom: var(--card-padding);

		> * {
			margin: var(--card-padding) var(--card-padding) 0;
		}

		> a {
			font-size: 14px;
			text-decoration: none;
		}
	}
`
