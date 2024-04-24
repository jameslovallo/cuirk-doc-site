import { embedCode, md } from 'cuirk'

export const meta = {
	title: 'Islands',
	description:
		'Create islands of interactive content using Cuick custom elements.',
	image: 'image',
	scripts: [
		{
			type: 'module',
			src: 'https://unpkg.com/cuick-dev/components/badge.js',
		},
		{
			type: 'module',
			src: 'https://unpkg.com/cuick-dev@1.0.17/components/story.js',
		},
		{
			type: 'module',
			src: '/src/snippets/islands/counter.js',
		},
	],
}

export const body = md`

# ${meta.title}

${meta.description}

## Creating an Island

Cuirk's philosophy is that everything that can be static should be static. However, client-side Javascript is often necessary to create dynamic content, and custom elements are a fantastic way to create \`islands\` of interactive content within your pages. You can use custom elements from anywhere, of course, but we encourage you to try our first-party solution, called [Cuick](/cuick).

### About Cuick

Cuick has a dirt-simple API that makes it easy to create interactive components that work on any site and with any framework.

<c-counter></c-counter>

${embedCode('src/snippets/islands/counter.js')}

### Self-Documenting Components

Cuick components are _self-documenting_. If you nest a Cuick component inside of the provided \`<c-story>\` component, the following interactive playground is automatically generated. This is an incredible way to document your components, create stories, or configure a component to use in your site or application.

<c-story><c-badge></c-badge></c-story>

`
