import { embedCode, md } from 'cuirk'
import { linkList } from 'cuirk/components/index.js'

export const meta = {
	title: 'Link List',
	description: 'An attractive list of links with icons and descriptions.',
}

export const body = md`
# ${meta.title}

${meta.description} (Accepts an array of child props.)

## Child Props

| Name | Description |
| --- | --- |
| title | The title of the link |
| description | A description of the link |
| icon | An icon of the link |
| href | A url for the link |

## Demo

${linkList([
	{
		title: 'Home',
		description: 'Description',
		icon: 'Home',
		href: '#',
	},
	{
		title: 'About',
		description: 'Description',
		icon: 'Information',
		href: '#',
	},
	{
		title: 'Contact Us',
		description: 'Description',
		icon: 'EmailFast',
		href: '#',
	},
])}

## Source

${embedCode('node_modules/cuirk/components/link-list.js')}
`
