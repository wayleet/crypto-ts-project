import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import { ILayout } from '../../common/types/layout';
import TopBar from '../top-bar';
import Sidebar from '../sidebar';
import { useStyles } from './styles';

const Layout: FC<ILayout> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px');
	const classes = useStyles();
	return location.pathname === '/login' ||
		location.pathname === '/register' ? (
		<>{children}</>
	) : (
		<Box
			display={isNonMobile ? 'flex' : 'block'}
			justifyContent='space-between'
			width='100%'
			height='100%'
		>
			<Sidebar
				isNonMobile={isNonMobile}
				drawerWidth='250'
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<Box className={classes.mainSection}>
				<TopBar />
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
