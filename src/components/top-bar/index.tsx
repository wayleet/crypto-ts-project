import React, { FC, useContext } from 'react';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import {
	DarkMode,
	LightMode,
	Search,
	NotificationsNone
} from '@mui/icons-material';
import { useAppSelector } from '../../hooks';
import { getDesignTokens } from '../../utils/theme';
import { ColorModeContext } from '../../context';
import { useStyles } from './styles';

const TopBar: FC = () => {
	const { firstName } = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const colors = getDesignTokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const classes = useStyles();

	return (
		<Box display='flex' justifyContent='space-between' px='32px' py='24px'>
			<Grid />
			<Box display='flex'>
				<Grid
					sx={{
						pr: '37px',
						borderRight: `1px solid ${colors.palette.primary[600]}`
					}}
				>
					<IconButton
						sx={{ mr: '45px' }}
						onClick={colorMode.toggleColorMode}
					>
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
				<Grid
					sx={{
						display: 'flex',
						backgroundColor: `${colors.palette.primary[600]}`,
						borderRadius: '8px',
						ml: '28px'
					}}
				>
					<IconButton
						sx={{ '&:hover': { background: 'transparent' } }}
					>
						<Search />
					</IconButton>
					<InputBase
						sx={{ px: '18px', py: '12px', width: '389px' }}
						placeholder='Поиск'
					/>
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBar;
