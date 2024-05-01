import { loop, md } from 'cuirk'
import { grid, iconTile } from '../../src/components/index.js'
import components from '../../src/data/components.js'

export const meta = {
	title: 'Component Library',
	description: 'Prebuilt, production ready components.',
}

export const body = md`
# ${meta.title}

${grid({ children: loop(components, iconTile), size: '20ch' })}
`
