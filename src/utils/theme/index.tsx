import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => {
	return {
		palette: {
			mode,
			...(mode === 'dark'
				? {
						primary: {
							main: '#000000',
							600: '#232323'
						},
						secondary: {
							main: '#7C7C7C'
						},
						neutral: {
							dark: '#0F0E0E',
							light: '#F7F7F7'
						},
						black: {
							DEFAULT: '#000000'
						},
						white: {
							DEFAULT: '#FFFFFF'
						},
						borderColor: '#3C3C3C'
				  }
				: {
						white: {
							DEFAULT: '#FFFFFF',
							100: '#F7F7F7',
							200: '#D1D1D1'
						},
						primary: {
							main: '#FFFFFF',
							600: '#F7F7F7'
						},
						secondary: {
							main: '#7C7C7C'
						},
						neutral: {
							dark: '#000000',
							light: '#F7F7F7'
						},
						black: {
							DEFAULT: '#000000'
						},
						borderColor: '#D1D1D1'
				  })
		},
		typography: {
			fontFamily: ['Golos Text', 'sans-serif'].join(','),
			fontSize: 14,
			h1: {
				fontFamily: ['Golos Text', 'sans-serif'].join(','),
				fontSize: 40,
				fontWeight: 600
			},
			h2: {
				fontFamily: ['Golos Text', 'sans-serif'].join(','),
				fontSize: 35,
				fontWeight: 600
			},
			h3: {
				fontFamily: ['Golos Text', 'sans-serif'].join(','),
				fontSize: 30,
				fontWeight: 500
			},
			h4: {
				fontFamily: ['Golos Text', 'sans-serif'].join(','),
				fontSize: 25,
				fontWeight: 500
			}
		}
	};
};
