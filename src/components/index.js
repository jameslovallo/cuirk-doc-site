import { card, cardStyles } from './card.js'
import { footer, footerStyles } from './footer.js'
import { grid, gridStyles } from './grid.js'
import { lighthouse, lighthouseStyles } from './lighthouse.js'
import { link } from './link.js'
import { nav, navStyles } from './nav.js'

const componentCss = [
	cardStyles,
	footerStyles,
	gridStyles,
	lighthouseStyles,
	navStyles,
].join('\n')

export { card, componentCss, footer, grid, lighthouse, link, nav }
