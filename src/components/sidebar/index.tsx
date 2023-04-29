import React, { FC, useEffect, useState } from 'react';
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme
} from '@mui/material';
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISidebarProps } from '../../common/types/sidebar';
import FlexBetween from '../flex-between';
import { navigateMenu } from '../../common/mocks/navigate-menu';
import logo from '../../assets/images/sidebar/logo.svg';
import { createStyles } from './styles';

const Sidebar: FC<ISidebarProps> = ({
	isNonMobile,
	drawerWidth,
	isOpen,
	setIsOpen
}) => {
	const [active, setActive] = useState('');
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const theme = useTheme();
	const styles = createStyles(theme.palette.mode);

	useEffect(() => {
		setActive(pathname);
	}, [pathname]);

	const renderNavMenu = navigateMenu.map((element) => {
		return (
			<ListItem key={element.id}>
				<ListItemButton
					onClick={() => navigate(`${element.path}`)}
					sx={
						active === element.path
							? styles.navItemActive
							: styles.navItem
					}
				>
					<ListItemIcon>{element.icon}</ListItemIcon>
					<ListItemText>
						<Typography variant='body1'>{element.name}</Typography>
					</ListItemText>
				</ListItemButton>
			</ListItem>
		);
	});

	return (
		<Box component='nav'>
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant='persistent'
					anchor='left'
					sx={{
						width: drawerWidth,
						'&	.MuiDrawer-paper': {
							color: theme.palette.secondary.main,
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drawerWidth
						}
					}}
				>
					<Box sx={styles.navBlock}>
						<Box>
							<FlexBetween>
								<Box sx={styles.brand}>
									<img src={logo} alt='' />
									<Typography
										variant='h1'
										sx={styles.brandTitle}
									>
										Demo
									</Typography>
								</Box>
								{!isNonMobile && (
									<IconButton
										onClick={() => setIsOpen(!isOpen)}
									>
										<ChevronLeftOutlined />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List sx={styles.navList}>{renderNavMenu}</List>
					</Box>
					<Box>
						<List>
							<ListItem>
								<ListItemButton sx={styles.navItem}>
									<ListItemIcon>
										<LogoutOutlined />
									</ListItemIcon>
									<ListItemText>
										<Typography>Logout</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
};

export default Sidebar;
