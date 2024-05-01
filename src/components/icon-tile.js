import { html, scss, when } from 'cuirk'
import { icon } from 'cuirk/components/index.js'

export const iconTile = ({ href, icon: mdiIconName, title }) => html`
	<div class="icon-tile">
		<a href="${href}">
			<span class="icon">${icon({ name: mdiIconName })}</span>
			<span class="text">${when(title, html`<span>${title}</span>`)}</span>
		</a>
	</div>
`

iconTile.style = scss`
	.icon-tile {
		background: var(--c-surface);
		border-radius: 1rem;
		color: var(--c-surface-color);

		> a {
			align-items: center;
			border: var(--c-border);
			border-radius: 1rem;
			display: flex;
			flex-direction: column;
			gap: .75rem;
			overflow: hidden;
			padding: .75rem;
			position: relative;
			text-decoration: none;

			&:hover {
				background: var(--c-primary-hover);
				border-color: var(--c-primary-active);
			}
			&:active {
				background: var(--c-primary-active);
			}

			> .icon {
				background: var(--c-primary);
				border-radius: 100%;
				color: var(--c-surface-color);
				padding: .5rem;
			}
		}
	}
`
