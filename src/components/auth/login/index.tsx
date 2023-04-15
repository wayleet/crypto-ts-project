import React, { FC } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: FC<IPropsLogin> = ({ setPassword, setEmail, navigate }) => {
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
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Введите ваш пароль'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button
				type='submit'
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
				<span
					className='additionalText'
					onClick={() => navigate('/register')}
					aria-hidden
				>
					Регистрация
				</span>
			</Typography>
		</>
	);
};

export default LoginPage;
