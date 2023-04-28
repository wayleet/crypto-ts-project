import React, { FC } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: FC<IPropsLogin> = ({ navigate, register, errors }) => {
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
				error={!!errors.email}
				helperText={errors.email ? `${errors.email.message}` : ''}
				fullWidth
				margin='normal'
				label='Почта'
				variant='outlined'
				placeholder='Введите вашу почту'
				{...register('email', {
					required: 'Это обязательное поле'
				})}
			/>
			<TextField
				error={!!errors.password}
				helperText={errors.password ? `${errors.password.message}` : ''}
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Введите ваш пароль'
				{...register('password', {
					required: 'Это обязательное поле',
					minLength: 3
				})}
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
