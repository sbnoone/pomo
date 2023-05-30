/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{tsx,ts}', './index.html'],
	theme: {
		extend: {
			colors: {
				green: {
					50: '#F2FFF5',
					900: '#14401D',
				},
				'green-a': {
					100: 'rgba(77, 218, 110, 0.15)',
					600: 'rgba(77, 218, 110, 0.62)',
				},
				red: {
					50: '#FFF2F2',
					900: '#14401D',
				},
				'red-a': {
					100: 'rgba(255, 76, 76, 0.15)',
					700: 'rgba(255, 76, 76, 0.71)',
				},
				blue: {
					50: '#F2F9FF',
					900: 'rgba(21, 48, 71, 1)',
					950: 'rgba(4, 9, 13, 1)',
				},
				'blue-a': {
					100: 'rgba(76, 172, 255, 0.15)',
					200: 'rgba(76, 172, 255, 0.24)',
					300: 'rgba(76, 172, 255, 0.33)',
					600: 'rgba(76, 172, 255, 0.62)',
					700: 'rgba(76, 172, 255, 0.71)',
					800: 'rgba(76, 172, 255, 0.81)',
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
