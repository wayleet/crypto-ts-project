import React, { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { createStyles } from './styles';
import AppLoadingButton from '../../../components/loading-button';
import { useAppSelector } from '../../../hooks';
import { useGetFavouriteAssetsQuery } from '../../../services/coingecko';

const LoginPage: FC<IPropsLogin> = ({ navigate, register, errors }) => {
	const styles = createStyles();
	const loading = useAppSelector((state) => state.auth.isLoading);

	return (
		<>
			<Typography variant='h3' textAlign='center'>
				Авторизация
			</Typography>
			<Typography variant='body1' margin='normal' textAlign='center'>
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
				{...register('email')}
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
				{...register('password')}
			/>
			<AppLoadingButton
				loading={loading}
				type='submit'
				sx={styles.button}
				variant='contained'
			>
				Войти
			</AppLoadingButton>
			<Typography variant='body1' textAlign='center'>
				У вас нет аккаунта?
				<Typography
					sx={styles.additionalText}
					onClick={() => navigate('/register')}
				>
					Регистрация
				</Typography>
			</Typography>
		</>
	);
};

export default LoginPage;
