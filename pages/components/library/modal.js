import { embedCode, html, md } from 'cuirk'
import { modal } from 'cuirk/components/index.js'

export const meta = {
	title: 'Modal',
	description: 'A clean, simple modal with _almost_ no JS.',
}

export const body = md`
# ${meta.title}

${meta.description}

## Child Props

| Name | Description |
| --- | --- |
| id | The modal's id, must be unique |
| trigger | Content that will open the modal |
| children | Content that will be shown in the modal |

## Demo

${modal({
	children: html`
		<h1>Modal Children</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
			lorem aliquam tellus malesuada, ut rhoncus lectus varius. Mauris mollis
			dapibus lacus sed hendrerit. Suspendisse risus enim, lobortis in rhoncus
			in, tincidunt eu enim. Donec sed porttitor velit. Cras pulvinar vel velit
			eu fringilla. Sed feugiat suscipit sem, et tempus libero maximus sed.
			Morbi eu vestibulum velit, eu porta sapien. Fusce non accumsan lacus. Ut
			aliquet metus quis fermentum interdum. Quisque quis ligula porttitor,
			luctus lacus id, interdum arcu. Sed et posuere metus.
		</p>
	`,
})}

## Source

${embedCode('node_modules/cuirk/components/modal.js')}
`
