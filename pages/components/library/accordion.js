import { embedCode, loop, md } from 'cuirk'
import { accordion } from 'cuirk/components/index.js'

export const meta = {
	title: 'Accordion',
	description: 'A CSS-only accordion component.',
}

export const body = md`
# ${meta.title}

${meta.description}

## Props

| Name | Description |
| --- | --- |
| title | The title of the accordion |
| children | The content of the accordion |

## Demo

${loop(
	Array(3).fill({
		title: 'Accordion Title',
		children: 'Accordion content',
	}),
	accordion
)}

## Source

${embedCode('node_modules/cuirk/components/accordion.js')}
`
