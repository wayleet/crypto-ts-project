import React, { FC } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: FC<IPropsRegister> = (props) => {
	const {
		setEmail,
		setRepeatPassword,
		setPassword,
		setFirstName,
		setUsername,
		navigate
	} = props;
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
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth
				margin='normal'
				label='Логин'
				variant='outlined'
				placeholder='Придумайте ваш username'
				onChange={(e) => setUsername(e.target.value)}
			/>
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
			<TextField
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Повторите ваш пароль'
				onChange={(e) => setRepeatPassword(e.target.value)}
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
				Регистрация
			</Button>
			<Typography
				variant='body1'
				fontFamily='Golos Text'
				textAlign='center'
			>
				У вас есть аккаунт?
				<span
					className='additionalText'
					onClick={() => navigate('/login')}
					aria-hidden
				>
					Авторизация
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
