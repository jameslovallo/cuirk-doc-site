import { md } from 'cuirk'
import { card, grid, lighthouse } from '../src/components/index.js'
import { meta } from '../src/config.js'

export const body = md`
# ${meta.title}

${meta.description}

## Features

- Write pages in Javascript with Markdown
- Dynamic templates
- Super simple project structure
- 1 config file for all global settings
- 100% HTML output, no JS
	${lighthouse()}

## Get Started

${grid([
	card({
		title: 'Quick Start',
		description: 'Scaffold your project cuickly!',
		link: '/starters',
		linkLabel: 'Starter Gallery',
	}),
	card({
		title: 'Pages',
		description: 'Write static pages with MD in JS',
		link: '/docs#pages',
		linkLabel: 'Page Docs',
	}),
	card({
		title: 'Components',
		description: 'Reusable content layouts, no JS',
		link: '/docs#components',
		linkLabel: 'Component Docs',
	}),
])}
`
