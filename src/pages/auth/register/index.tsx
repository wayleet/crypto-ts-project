import React, { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';
import AppButton from '../../../components/app-button';
import { createStyles } from './styles';

const RegisterPage: FC<IPropsRegister> = (props) => {
	const { navigate, register, errors } = props;
	const styles = createStyles();
	return (
		<>
			<Typography variant='h3' textAlign='center'>
				Регистрация
			</Typography>
			<Typography variant='body1' marginBottom={1} textAlign='center'>
				Введите данные для регистрации
			</Typography>
			<TextField
				error={!!errors.name}
				fullWidth
				margin='normal'
				label='Имя'
				variant='outlined'
				placeholder='Введите ваше имя'
				helperText={errors.name ? `${errors.name.message}` : ''}
				{...register('name')}
			/>
			<TextField
				error={!!errors.username}
				fullWidth
				margin='normal'
				label='Логин'
				variant='outlined'
				placeholder='Придумайте ваш username'
				{...register('username')}
				helperText={errors.username ? `${errors.username.message}` : ''}
			/>
			<TextField
				error={!!errors.email}
				fullWidth
				margin='normal'
				label='Почта'
				variant='outlined'
				placeholder='Введите вашу почту'
				helperText={errors.email ? `${errors.email.message}` : ''}
				{...register('email')}
			/>
			<TextField
				error={!!errors.password}
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Введите ваш пароль'
				helperText={errors.password ? `${errors.password.message}` : ''}
				{...register('password')}
			/>
			<TextField
				error={!!errors.confirmPassword}
				type='password'
				fullWidth
				margin='normal'
				label='Пароль'
				variant='outlined'
				placeholder='Повторите ваш пароль'
				helperText={
					errors.confirmPassword
						? `${errors.confirmPassword.message}`
						: ''
				}
				{...register('confirmPassword')}
			/>
			<AppButton type='submit' sx={styles.button} variant='contained'>
				Регистрация
			</AppButton>
			<Typography
				variant='body1'
				fontFamily='Golos Text'
				textAlign='center'
			>
				У вас есть аккаунт?
				<Typography
					sx={styles.additionalText}
					className='additionalText'
					onClick={() => navigate('/login')}
				>
					Авторизация
				</Typography>
			</Typography>
		</>
	);
};

export default RegisterPage;
