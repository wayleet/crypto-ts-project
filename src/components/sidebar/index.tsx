import React, { FC, useEffect, useState } from 'react';
import {
	Box,
	Drawer,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme
} from '@mui/material';
import {
	HomeOutlined,
	ChevronLeftOutlined,
	ChevronRightOutlined,
	AutoGraphOutlined,
	BookOutlined,
	SettingsOutlined,
	LogoutOutlined
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISidebarProps } from '../../common/types/sidebar';
import FlexBetween from '../flex-between';

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
	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);
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
					<Box width='100%'>
						<Box>
							<FlexBetween>
								<Box
									display='flex'
									alignItems='center'
									gap='10px'
								>
									<Typography>Demo</Typography>
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
					</Box>
				</Drawer>
			)}
		</Box>
	);
};

export default Sidebar;
