import { md } from 'cuirk'

export const meta = {
	title: 'Pages',
	description: 'How to write pages in Cuirk using Javascript and Markdown.',
	image: 'image',
}

export const body = md`
# ${meta.title}

${meta.description}

## Creating a pages

To add a new page, create a Javascript file in the \`pages\` directory. This page will export two functions: \`meta\` and \`body\`.

- \`meta\` is the page metadata.
- \`body\` is the page content.

### Page metadata

To customize the page's metadata, export an array called \`meta\`. Metadata can be anything included in your site's layout. Page metadata overrides the global metadata configured in \`src/config.js\`.

\`\`\`js
export const meta = {
  title: 'Page Title',
  description: 'Page description',
  image: 'image',
}
\`\`\`

### Page content

Markdown is the recommended way to write page content. Optionally, the \`md\` function can be used to highlight tagged template literals using the [es6-string-markdown](https://marketplace.visualstudio.com/items?itemName=jeoht.es6-string-markdown) extension for VSCode.

\`\`\`js
import { md } from 'cuirk'

export const body = md\`

This is the page content

\`
\`\`\`

### Importing data

You can import data from any other file in your project, without restriction. In this example from this site's home page:

- The page's \`meta\` is referenced inside the page body.
- A component called \`lighthouse\` is used to display the lighthouse score.
- The cards at the end of the page are rendered inside a \`grid\` component. The \`loop\` function is used to render the data from the \`navLinks\` array using the \`card\` component.

\`\`\`js
export const body = md\`

# \${meta.title}

\${meta.description}

## Features

- Write pages with Markdown in JS
- Noob-friendly project structure
- 1 config file for all global settings
- Dynamic page templates
- 100% HTML output, no JS
  \${lighthouse()}

## Get Started

\${grid(loop(linkCards, card))}

\`

\`\`\`
`
