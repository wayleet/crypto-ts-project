import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { createStyles } from './styles';
import FavoriteCryptocurrency from '../../components/favorite-cryptocurrency';
import { favoriteAssets } from '../../data/assets';

const Home: FC = () => {
	const styles = createStyles();

	return (
		<Grid sx={styles.root}>
			<h1>this is home component</h1>
			<Grid container spacing={2}>
				{favoriteAssets.map((assetName) => {
					return (
						<FavoriteCryptocurrency
							key={assetName}
							assetName={assetName}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default Home;
