import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Layouts',
	description: 'How to create layouts and assign them to pages.',
}

export const body = md`

# ${meta.title}

${meta.description}

## Creating a Layout

Layouts are the HTML template for your pages. They consume data from \`src/config.js\` and from each page's exported metadata. Page metadata overrides global data. The \`componentStyles\` function is used to import styles from components, and the \`createTags\` function is used to create HTML tags from imported data.

### Default Layout

The default layout is \`default.js\` in the \`layouts\` directory.

${embedCode('src/layouts/default.js')}

`
