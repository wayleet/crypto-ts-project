import React, { FC } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { createStyles } from './styles';
import { useGetFavouriteAssetsQuery } from '../../services/coingecko';

interface FavoriteCryptocurrencyProps {
	assetName: string;
}

const FavoriteCryptocurrency: FC<FavoriteCryptocurrencyProps> = ({
	assetName
}) => {
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);
	const { data } = useGetFavouriteAssetsQuery(assetName);
	const currentPrice = data?.prices[0];
	const currentCap = data?.market_caps[0];
	return (
		<Grid item xs={12} lg={6} sm={6}>
			<Grid container sx={styles.topCardItem}>
				<Grid item xs={12} sm={6} lg={6}>
					<Typography variant='h3' sx={styles.assetName}>
						{assetName}
					</Typography>
					<Box sx={styles.itemDetails}>
						<Typography variant='h3' sx={styles.cardPrice}>
							{currentPrice && `$${currentPrice[1].toFixed(2)}`}
						</Typography>
						<Typography variant='body1' sx={styles.cardCapitalize}>
							${currentCap && currentCap[1].toFixed(0)}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} lg={6}>
					<h5>Chart</h5>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FavoriteCryptocurrency;
