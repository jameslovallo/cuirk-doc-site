import { css, html, loop } from 'cuirk'

export const lighthouse = () => html`
	<div class="lighthouse">
		${loop([...Array(4)], () => html`<div>100</div>`)}
	</div>
`

export const lighthouseStyles = css`
	.lighthouse {
		--green: rgb(0, 204, 102);
		display: flex;
		gap: 0.5rem;
		margin-top: 0.25rem;

		> div {
			align-items: center;
			background: rgba(0, 204, 102, 0.1);
			border-radius: 50%;
			border: 3px solid var(--green);
			box-sizing: border-box;
			color: var(--green);
			display: flex;
			font-family: monospace;
			font-size: 14px;
			height: 2.5rem;
			justify-content: center;
			width: 2.5rem;
		}
	}
`
