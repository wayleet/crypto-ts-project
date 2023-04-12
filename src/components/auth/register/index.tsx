import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const RegisterPage = () => {
	return (
		<>
			<Typography variant='h3' fontFamily='Golos Text' textAlign='center'>
				Регистрация
			</Typography>
			<Typography
				variant='body1'
				marginBottom={1}
				fontFamily='Golos Text'
				textAlign='center'
			>
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth
				margin='normal'
				label='Имя'
				variant='outlined'
				placeholder='Введите ваше имя'
			/>
			<TextField
				fullWidth
				margin='normal'
				label='Почта'
				variant='outlined'
				placeholder='Введите вашу почту'
			/>
			<TextField
				fullWidth
				margin='normal'
				label='Логин'
				variant='outlined'
				placeholder='Придумайте ваш username'
			/>
			<TextField
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Введите ваш пароль'
			/>
			<TextField
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Повторите ваш пароль'
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
				Регистрация
			</Button>
			<Typography
				variant='body1'
				fontFamily='Golos Text'
				textAlign='center'
			>
				У вас есть аккаунт?
				<span className='registerText'>Авторизация</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
