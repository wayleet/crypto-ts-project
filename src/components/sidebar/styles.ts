import { getDesignTokens } from '../../utils/theme';

export const createStyles = (mode: 'dark' | 'light') => {
	const colors = getDesignTokens(mode);
	return {
		brand: {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '30px 15px',
			cursor: 'pointer'
		},
		navItem: {
			'&:hover': {
				backgroundColor: '#1900D5',
				color: '#fff',
				borderRadius: '4px',
				'.MuiSvgIcon-root': {
					color: colors.palette.white.DEFAULT
				}
			}
		},
		navBlock: {
			borderBottom: `1px solid ${colors.palette.borderColor}`,
			width: '100%'
		},
		navList: { marginBottom: '55px' },
		brandTitle: {
			color:
				mode === 'dark'
					? colors.palette.white.DEFAULT
					: colors.palette.black.DEFAULT
		},
		navItemActive: {
			'&:hover': {
				backgroundColor: '#1900D5',
				color: '#fff',
				borderRadius: '4px',
				'.MuiSvgIcon-root': {
					color: colors.palette.white.DEFAULT
				}
			},
			backgroundColor: '#1900D5',
			color: '#fff',
			borderRadius: '4px'
		}
	};
};
