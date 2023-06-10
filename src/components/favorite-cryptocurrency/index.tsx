import React, { FC } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { createStyles } from './styles';
import {
	useGetFavouriteAssetsQuery,
	useGetSingleAssetQuery
} from '../../services/coingecko';
import AreaChart from '../charts/area-chart';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';

interface FavoriteCryptocurrencyProps {
	assetName: string;
}

const FavoriteCryptocurrency: FC<FavoriteCryptocurrencyProps> = ({
	assetName
}) => {
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);
	const { data: prices } = useGetFavouriteAssetsQuery(assetName);
	const { data: singleAsset } = useGetSingleAssetQuery(assetName);
	const currentPrice = singleAsset?.map((elem) => elem.current_price);
	const changePrice = singleAsset?.map(
		(elem) => elem.price_change_percentage_24h
	);
	return (
		<Grid item xs={12} lg={6} sm={6}>
			<Grid container sx={styles.topCardItem}>
				<Grid item xs={12} sm={6} lg={6}>
					<Typography variant='h3' sx={styles.assetName}>
						{assetName}
					</Typography>
					<Box sx={styles.itemDetails}>
						<Typography variant='h3' sx={styles.cardPrice}>
							${currentPrice}
						</Typography>
						<Typography
							variant='body1'
							sx={
								changePrice && changePrice[0] > 0
									? [styles.priceTrend, styles.trendUp]
									: [styles.priceTrend, styles.trendDown]
							}
						>
							{changePrice && changePrice[0] > 0 ? (
								<img src={TrendUp} alt='TrendUp' />
							) : (
								<img src={TrendDown} alt='TrendDown' />
							)}
							<span>
								{changePrice && changePrice[0].toFixed(2)}%
							</span>
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} lg={6}>
					<AreaChart chartData={prices} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FavoriteCryptocurrency;
