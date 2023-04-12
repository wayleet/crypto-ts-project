import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const LoginPage = () => {
	return (
		<>
			<Typography variant='h3' fontFamily='Golos Text' textAlign='center'>
				Авторизация
			</Typography>
			<Typography
				variant='body1'
				marginBottom={1}
				fontFamily='Golos Text'
				textAlign='center'
			>
				Введите ваш логин и пароль
			</Typography>
			<TextField
				fullWidth
				margin='normal'
				label='Почта'
				variant='outlined'
				placeholder='Введите вашу почту'
			/>
			<TextField
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Введите ваш пароль'
			/>
			<Button
				sx={{
					fontFamily: 'Golos Text',
					marginTop: 2,
					marginBottom: 1,
					width: '60%',
					alignContent: 'center'
				}}
				variant='contained'
			>
				Войти
			</Button>
			<Typography
				variant='body1'
				fontFamily='Golos Text'
				textAlign='center'
			>
				У вас нет аккаунта?
				<span className='registerText'>Регистрация</span>
			</Typography>
		</>
	);
};

export default LoginPage;
