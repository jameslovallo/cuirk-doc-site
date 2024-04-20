import { create, html } from '//unpkg.com/cuick'

create('counter', {
	count: 0,
	template({ count }) {
		const add = () => this.count++
		return html`<button @click=${add}>${count}</button>`
	},
})
