import * as yup from 'yup';
import { APP_ERRORS } from '../../common/errors';

export const LoginSchema = yup.object().shape({
	email: yup
		.string()
		.email(APP_ERRORS.INVALID_EMAIL)
		.required(APP_ERRORS.REQUIRED_FIELD),
	password: yup
		.string()
		.min(3, APP_ERRORS.MIN_LENGTH)
		.required(APP_ERRORS.REQUIRED_FIELD)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{3,20}$/,
			APP_ERRORS.INVALID_PASSWORD
		)
});

export const RegisterSchema = yup.object().shape({
	email: yup
		.string()
		.email(APP_ERRORS.INVALID_EMAIL)
		.required(APP_ERRORS.REQUIRED_FIELD),
	password: yup
		.string()
		.min(3, APP_ERRORS.MIN_LENGTH)
		.required(APP_ERRORS.REQUIRED_FIELD)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{3,20}$/,
			APP_ERRORS.INVALID_PASSWORD
		),
	confirmPassword: yup
		.string()
		.min(3, APP_ERRORS.MIN_LENGTH)
		.required(APP_ERRORS.REQUIRED_FIELD)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			APP_ERRORS.INVALID_PASSWORD
		),
	name: yup.string().required(APP_ERRORS.REQUIRED_FIELD),
	username: yup.string().required(APP_ERRORS.REQUIRED_FIELD)
});
