import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';
import { Box } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginPage from './login';
import RegisterPage from './register';
import { useAppDispatch } from '../../hooks';
import { APP_ERRORS } from '../../common/errors';
import { FormValues } from '../../common/types/auth';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { loginUser, registerUser } from '../../store/thunks/auth';

const AuthRootComponent: FC = () => {
	const dispatch = useAppDispatch();

	const location = useLocation();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<FormValues>({
		mode: 'all',
		resolver: yupResolver(
			location.pathname === '/login' ? LoginSchema : RegisterSchema
		)
	});

	const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
		if (location.pathname === '/login') {
			try {
				await dispatch(loginUser(data));
				navigate('/');
			} catch (err) {
				throw new Error(APP_ERRORS.SERVER_NOT_WORK);
			}
		} else if (location.pathname === '/register') {
			if (data.password === data.confirmPassword) {
				try {
					await dispatch(registerUser(data));
					navigate('/');
				} catch (err) {
					throw new Error(APP_ERRORS.SERVER_NOT_WORK);
				}
			} else {
				throw new Error(APP_ERRORS.PASSWORD_DO_NOT_MATCH);
			}
		}
	};

	return (
		<div className='root'>
			<form className='form' onSubmit={handleSubmit(handleSubmitForm)}>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					minWidth={370}
					margin='auto'
					padding={5}
					borderRadius={5}
					boxShadow='-3px -2px 20px 1px #202020'
				>
					{location.pathname === '/login' ? (
						<LoginPage
							navigate={navigate}
							register={register}
							errors={errors}
						/>
					) : location.pathname === '/register' ? (
						<RegisterPage
							navigate={navigate}
							register={register}
							errors={errors}
						/>
					) : null}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;
