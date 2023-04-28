import React, { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import TopBar from '../top-bar';
import Sidebar from '../sidebar';
import { createStyles } from './styles';

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px');
	const styles = createStyles();
	return location.pathname === '/login' ||
		location.pathname === '/register' ? (
		<Outlet />
	) : (
		<Box
			display={isNonMobile ? 'flex' : 'block'}
			justifyContent='space-between'
			width='100%'
			height='100%'
		>
			<Sidebar
				isNonMobile={isNonMobile}
				drawerWidth='250px'
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<Box sx={styles.mainSection}>
				<TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;
