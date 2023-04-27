import { getDesignTokens } from '../../utils/theme';

export const createStyles = (mode: 'dark' | 'light') => {
	const colors = getDesignTokens(mode);
	return {
		root: {
			display: 'flex',
			justifyContent: 'space-between',
			px: '32px',
			py: '24px',
			backgroundColor: colors.palette.primary.main,
			maxHeight: '95px',
			borderBottom: `1px solid ${colors.palette.borderColor}`
		},
		searchBlock: {
			display: 'flex',
			borderRadius: '8px',
			ml: '30px',
			backgroundColor: `${colors.palette.primary[600]}`
		},
		searchInput: { px: '18px', py: '12px', width: '389px' },
		searchButton: { '&:hover': { background: 'transparent' } },
		iconBlock: {
			pr: '15px',
			pt: '6px',
			borderRight: `1px solid ${colors.palette.borderColor}`
		}
	};
};
