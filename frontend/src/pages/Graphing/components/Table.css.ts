import { style } from '@vanilla-extract/css'

export const tableWrapper = style({
	marginLeft: -8,
	marginRight: -8,
})

export const fullHeight = style({
	height: 'calc(100% - 50px)',
})

export const scrollableBody = style({
	overflowY: 'scroll',
	selectors: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
})
