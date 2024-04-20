import { loop, md } from 'cuirk'
import { card, grid, lighthouse } from '../src/components/index.js'
import { meta, navLinks } from '../src/config.js'

const linkCards = navLinks.filter((link) => link.position === 'end')

export const body = md`

# ${meta.title}

${meta.description}

\`\`\`shell
npm i cuirk
\`\`\`

## Features

- Write pages with MD in JS
- Noob-friendly project structure
- 1 config file for all global settings
- Dynamic page templates
- 100% HTML output, no JS
	${lighthouse()}

## Get Started

${grid(loop(linkCards, card))}

`
