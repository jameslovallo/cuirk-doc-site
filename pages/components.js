import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Components',
	description: 'Reusable 100% static UI components.',
	image: 'image',
}

export const body = md`

# ${meta.title}

${meta.description}

## Creating a Component

A component is simply a function that returns markup, and can be used in templates, pages, or other components. The \`html\` tag is used to render the markup returned by the component. Several [helper functions](/helpers) are provided to make writing components easier.

### Styles

Each component can export a stylesheet by assigning it to the \`style\` property of the component (see footer example below). For more information how to include component styles in the generated template, see the [Layouts](/layouts) page.

${embedCode('src/components/footer.js')}

`
