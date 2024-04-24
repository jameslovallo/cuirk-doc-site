import { loop, md } from 'cuirk'
import { card, grid, lighthouse } from '../src/components/index.js'
import meta from '../src/data/meta.js'
import links from '../src/data/nav.js'

const linkCards = links.filter((link) => link.position === 'end')

export const body = md`

# ${meta.title}

${meta.description}

\`\`\`shell
npm i cuirk
\`\`\`

## Features

- Write pages with MD in JS
- Noob-friendly project structure
- 100% HTML output, no JS
	${lighthouse()}

## Get Started

${grid(loop(linkCards, card))}

`
