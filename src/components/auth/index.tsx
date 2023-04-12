import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import { Box } from '@mui/material';
import LoginPage from './login';
import RegisterPage from './register';

const AuthRootComponent = () => {
	const location = useLocation();
	return (
		<div className='root'>
			<div className='form'>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					minWidth={370}
					margin='auto'
					padding={5}
					borderRadius={5}
					boxShadow='5px 5px 10px #ccc'
				>
					{location.pathname === '/login' ? (
						<LoginPage />
					) : location.pathname === '/register' ? (
						<RegisterPage />
					) : null}
				</Box>
			</div>
		</div>
	);
};

export default AuthRootComponent;
