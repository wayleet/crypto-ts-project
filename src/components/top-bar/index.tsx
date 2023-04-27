import React, { FC, useContext } from 'react';
import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme
} from '@mui/material';
import {
	DarkMode,
	LightMode,
	Search,
	NotificationsNone,
	MenuOutlined
} from '@mui/icons-material';
import { useAppSelector } from '../../hooks';
import { ColorModeContext } from '../../context';
import { createStyles } from './styles';
import { ITopBarProps } from '../../common/types/top-bar';
import FlexBetween from '../flex-between';

const TopBar: FC<ITopBarProps> = ({ setIsOpen, isOpen }) => {
	const { firstName } = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<AppBar sx={styles.root}>
			<Toolbar sx={styles.toolbar}>
				<FlexBetween>
					<MenuOutlined
						sx={styles.menuIcon}
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Typography variant='h6'>Welcome Alex</Typography>
				</FlexBetween>
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
						<InputBase
							sx={styles.searchInput}
							placeholder='Поиск'
						/>
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
