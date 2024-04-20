export const card = ({ img, title, description }) => html`
	<div class="card">
		${when(img, html`<img src="${img}" />`)}
		${when(title, html`<h3>${title}</h3>`)}
		${when(description, html`<p>${description}</p>`)}
	</div>
`
