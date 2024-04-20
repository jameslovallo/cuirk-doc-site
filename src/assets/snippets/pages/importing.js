export const body = md`

# ${meta.title}

${meta.description}

## Features

- Write pages with Markdown in JS
- Noob-friendly project structure
- 1 config file for all global settings
- Dynamic page templates
- 100% HTML output, no JS
  ${lighthouse()}

## Get Started

${grid(loop(linkCards, card))}

`
