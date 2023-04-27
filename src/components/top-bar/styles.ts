import { getDesignTokens } from '../../utils/theme';

export const createStyles = (mode: 'dark' | 'light') => {
	const colors = getDesignTokens(mode);
	return {
		root: {
			position: 'static',
			background: colors.palette.primary.main,
			borderBottom: `1px solid ${colors.palette.borderColor}`,
			boxShadow: 'none'
		},
		toolbar: {
			justifyContent: 'space-between',
			padding: '25px 45px'
		},
		searchBlock: {
			display: 'flex',
			maxHeight: '48px',
			borderRadius: '8px',
			ml: '30px',
			backgroundColor: `${colors.palette.primary[600]}`
		},
		searchInput: { px: '18px', py: '12px', width: '389px' },
		searchButton: { '&:hover': { background: 'transparent' } },
		menuIcon: {
			mr: '10px',
			cursor: 'pointer'
		},
		iconBlock: {
			pr: '15px',
			pt: '6px',
			borderRight: `1px solid ${colors.palette.borderColor}`
		}
	};
};
