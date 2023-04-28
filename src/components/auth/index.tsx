import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';
import { Box } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginPage from './login';
import RegisterPage from './register';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { FormValues } from '../../common/types/auth';

const AuthRootComponent: FC = () => {
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [username, setUsername] = useState('');

	const location = useLocation();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<FormValues>();
	console.log('errors', errors);

	const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
		console.log('data', data);
		if (location.pathname === '/login') {
			try {
				const userData = {
					email: data.email,
					password: data.password
				};
				const user = await instance.post('auth/login', userData);
				await dispatch(login(user.data));
				navigate('/');
			} catch (err) {
				throw new Error(AppErrors.ServerNotWork);
			}
		} else if (location.pathname === '/register') {
			if (password === repeatPassword) {
				try {
					const userData = {
						firstName,
						username,
						email,
						password
					};
					const newUser = await instance.post(
						'auth/register',
						userData
					);
					dispatch(login(newUser.data));
					navigate('/');
				} catch (err) {
					throw new Error(AppErrors.ServerNotWork);
				}
			} else {
				throw new Error(AppErrors.PasswordDoNotMatch);
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
					boxShadow='5px 5px 10px #ccc'
				>
					{location.pathname === '/login' ? (
						<LoginPage
							navigate={navigate}
							register={register}
							errors={errors}
						/>
					) : location.pathname === '/register' ? (
						<RegisterPage
							setEmail={setEmail}
							setRepeatPassword={setRepeatPassword}
							setPassword={setPassword}
							setFirstName={setFirstName}
							setUsername={setUsername}
							navigate={navigate}
						/>
					) : null}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;
