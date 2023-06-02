/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{tsx,ts}', './index.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'var(--primary-50)',
					900: 'var(--primary-900)',
					950: 'var(--primary-950)',
				},
				'primary-a': {
					100: 'var(--primary-a-100)',
					200: 'var(--primary-a-200)',
					300: 'var(--primary-a-300)',
					600: 'var(--primary-a-600)',
					700: 'var(--primary-a-700)',
					800: 'var(--primary-a-800)',
				},
				white: {
					100: 'rgba(255, 255,255, 0.15)',
					200: 'rgba(255, 255,255, 0.24)',
				},
				black: {
					100: 'rgba(0, 0,0, 0.15)',
					200: 'rgba(0, 0,0, 0.24)',
				},
			},
			boxShadow: {
				modal: '0px 5.5px 16px 0px rgba(0, 0, 0, 0.19), 0px 1px 6px 0px rgba(0, 0, 0, 0.039)',
			},
			fontSize: {
				sm: '12px',
				md: '16px',
				lg: '24px',
				timer: '256px',
			},
			fontFamily: {
				serif: ['Roboto Flex'],
			},
			borderRadius: {
				sm: '8px',
				md: '24px',
				lg: '32px',
			},
			screens: {
				xs: '400px',
			},
		},
	},
	plugins: [],
}
