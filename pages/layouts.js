import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Layouts',
	description: 'How to create layouts and assign them to pages.',
}

export const body = md`

# ${meta.title}

${meta.description}

## Creating a Layout

Layouts are the HTML template for your pages. They can import any data, for example from \`src/data/meta.js\`, and each page's exported metadata is injected during the build. Page metadata overrides global metadata. The \`componentStyles\` function is used to import styles from components, and the \`createTags\` function is used to create HTML tags from imported script or link tags defined in metadata, or from any other source.

### Default Layout

The default layout is \`layouts/default.js\`.

${embedCode('src/layouts/default.js')}

`
