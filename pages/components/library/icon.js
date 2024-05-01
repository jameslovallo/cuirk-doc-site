import { embedCode, md } from 'cuirk'
import { icon } from 'cuirk/components/index.js'

export const meta = {
	title: 'Icon',
	description: 'Load icons from the MDI library',
}

export const body = md`
# ${meta.title}

${meta.description}

## Props

| Name | Description |
| --- | --- |
| name | The name of the icon |
| size | The size of the icon |
| color | The color of the icon |

## Demo

<div style="display: flex; gap: 1rem; align-items: center;">
	${icon({ name: 'Home', size: 48, color: 'dodgerblue' })}
	${icon({ name: 'Cat', size: 32, color: 'goldenrod' })}
	${icon({ name: 'Jellyfish', size: 24, color: 'purple' })}
</div>

## Source

${embedCode('node_modules/cuirk/components/icon.js')}
`
