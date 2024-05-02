import { html, scss, when } from 'cuirk'

export const card = ({ title, description, href, linkLabel }) => html`
	<a href="${href}" class="card">
		<div class="text">
			${when(title, html`<h3>${title}</h3>`)}
			${when(description, html`<small>${description}</small>`)}
		</div>
		<div class="link">
			${when(href && linkLabel, html`<small>${linkLabel}</small>`)}
		</div>
	</a>
`

card.style = scss`
	.card {
		background: var(--c-surface);
		border: var(--c-border);
		border-radius: 1rem;
		color: var(--c-surface-color);
		display: grid;
		overflow: hidden;
		text-decoration: none;

		&:hover {
			border-color: var(--c-primary-active);

			> .link {
				background: linear-gradient(to bottom, transparent 0%, var(--c-primary-hover) 100%);
				border-color: var(--c-primary-hover);
			}
		}
		&:active {
			> .link {
				background: linear-gradient(to bottom, transparent 0%, var(--c-primary-active) 100%);
				border-color: var(--c-primary-active);
			}
		}

		* {
			margin: 0;
		}

		> .text {
			display: grid;
			gap: .75rem;
			padding: 1rem;
		}

		> .link {
			border-top: var(--c-border);
			color: dodgerblue;
			padding: 1rem;
		}
	}
`
