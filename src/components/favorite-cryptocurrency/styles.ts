import { getDesignTokens } from '../../utils/theme';

export const createStyles = (mode: 'dark' | 'light') => {
	const colors = getDesignTokens(mode);
	return {
		topCardItem: {
			backgroundColor: `${
				mode === 'light'
					? colors.palette.primary.main
					: colors.palette.primary[600]
			}`,
			padding: '20px 16px',
			minHeight: '185px',
			border: `1px solid ${colors.palette.borderColor}`,
			borderRadius: '12px'
		},
		assetName: {
			fontSize: '25px',
			fontWeight: '600',
			lineHeight: '30px',
			textTransform: 'capitalize'
		},
		itemDetails: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			paddingBottom: '20px'
		},
		cardPrice: {
			fontSize: '32px',
			fontWeight: '700',
			lineHeight: '48px'
		},
		cardCapitalize: {
			color: `${colors.palette.secondary.main}`,
			fontWeight: '400',
			fontSize: '18px',
			lineHeight: '21px'
		}
	};
};
