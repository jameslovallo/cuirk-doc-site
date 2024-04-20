import { css, html, loop } from 'cuirk'

export const lighthouse = () => html`
	<div class="lighthouse">${loop(4, html`<div>100</div>`)}</div>
`

lighthouse.style = css`
	.lighthouse {
		--green: 0, 204, 102;
		display: flex;
		gap: 0.5rem;
		margin-top: 0.25rem;

		> div {
			align-items: center;
			background: rgba(var(--green), 0.1);
			border-radius: 50%;
			border: 3px solid rgb(var(--green));
			box-sizing: border-box;
			color: rgb(var(--green));
			display: flex;
			font-family: monospace;
			font-size: 14px;
			height: 2.5rem;
			justify-content: center;
			width: 2.5rem;
		}
	}
`
