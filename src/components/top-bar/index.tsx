import React, { FC, useContext } from 'react';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import {
	DarkMode,
	LightMode,
	Search,
	NotificationsNone
} from '@mui/icons-material';
import { useAppSelector } from '../../hooks';
import { ColorModeContext } from '../../context';
import { createStyles } from './styles';

const TopBar: FC = () => {
	const { firstName } = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box sx={styles.root}>
			<Grid>Welcome Alex</Grid>
			<Box display='flex'>
				<Grid sx={styles.iconBlock}>
					<IconButton onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === 'dark' ? (
							<DarkMode />
						) : (
							<LightMode />
						)}
					</IconButton>
					<IconButton>
						<NotificationsNone />
					</IconButton>
				</Grid>
				<Grid sx={styles.searchBlock}>
					<IconButton sx={styles.searchButton}>
						<Search />
					</IconButton>
					<InputBase sx={styles.searchInput} placeholder='Поиск' />
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBar;
