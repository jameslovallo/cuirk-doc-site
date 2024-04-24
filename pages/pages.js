import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Pages',
	description: 'Write pages in Cuirk using Javascript and Markdown.',
	image: 'image',
}

export const body = md`

# ${meta.title}

${meta.description}

## Creating a Page

To add a new page, create a Javascript file in the \`pages\` directory. This page will export two constants:

| name | value |
| ----- | ----- |
| meta | object |
| body | tagged template literal |

### Metadata

To customize the page's metadata, export an array called \`meta\`. Metadata can be anything included in your site's layout. Page metadata overrides the global metadata configured in \`src/config.js\`.

${embedCode('src/snippets/pages/metadata.js')}

### Content

Markdown is the recommended way to write page content. Optionally, the \`md\` function can be used to highlight tagged template literals using the [es6-string-markdown](https://marketplace.visualstudio.com/items?itemName=jeoht.es6-string-markdown) extension for VSCode.

${embedCode('src/snippets/pages/content.js')}

### Importing Content

You can import data from any other file in your project, without restriction. In this example from this site's home page:

- The page's \`meta\` is referenced inside the page body.
- A component called \`lighthouse\` is used to display the lighthouse score.
- The cards at the end of the page are rendered inside a \`grid\` component. The \`loop\` function is used to render the data from the \`links\` array using the \`card\` component.

${embedCode('pages/home.js')}

`
