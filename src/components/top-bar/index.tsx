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
import { ColorModeContext } from '../../context';
import { createStyles } from './styles';
import { ITopBarProps } from '../../common/types/top-bar';
import FlexBetween from '../flex-between';

const TopBar: FC<ITopBarProps> = ({ setIsOpen, isOpen }) => {
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);
	const { toggleColorMode } = useContext(ColorModeContext);

	return (
		<AppBar sx={styles.root}>
			<Toolbar sx={styles.toolbar}>
				<FlexBetween>
					<MenuOutlined
						sx={styles.menuIcon}
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Typography variant='h6'>
						Welcome {sessionStorage.getItem('name')}
					</Typography>
				</FlexBetween>
				<Box display='flex'>
					<Grid sx={styles.iconBlock}>
						<IconButton onClick={toggleColorMode}>
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
