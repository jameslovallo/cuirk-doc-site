import { html } from 'cuirk'

export const link = ({ title, link, target = '_self' }) =>
	html`<a href="${link}" target="${target}">${title}</a>`
