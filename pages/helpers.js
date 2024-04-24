import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Helpers',
	description:
		'Helper functions can be imported from `cuirk` and make writing templates easier.',
	image: 'image',
}

export const body = md`

# ${meta.title}

${meta.description}

## Template Tags

Tagged template literals provide syntax highlighting in your editor and ease the transition from Lit or similar frameworks. Lit provides functions for tagging template literals as \`html\`, \`css\`, and \`md\`.

## loop

The \`loop\` function makes it easy to render a list of items in a template.

| argument | accepts |
| --- | --- |
| items | An array of items or a number |
| template | A component or markup to render form each item |

${embedCode('src/snippets/components/loop.js')}

## when

The \`when\` function can be used to conditionally render a template.

| argument | accepts |
| --- | --- |
| condition | A boolean or an expression that evaluates to a boolean |
| template | A component or markup to render if the condition is true |

${embedCode('src/snippets/components/when.js')}

## embedCode

The \`embedCode\` function can be used to embed code from other files in your templates. It uses PrismJS for syntax highlighting during the build.

${embedCode('src/snippets/components/embed.js')}

## createTags

The \`createTags\` function is used to create HTML tags from imported data.

${embedCode('src/snippets/helpers/createTags.js')}

## componentStyles

The \`componentStyles\` function is used to include component styles in your layouts. See the [Layouts](/layouts) page for an example.

${embedCode('src/snippets/helpers/componentStyles.js')}

`
