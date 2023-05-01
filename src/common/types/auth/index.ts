import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLogin<
	TFieldValues extends FieldValues = FormValues,
	TContext = any
> {
	navigate: (to: string) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegister<
	TFieldValues extends FieldValues = FormValues,
	TContext = any
> {
	navigate: (to: string) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}

export interface IAuthState {
	user: IPublicUser;
	isLogged: boolean;
	isLoading: boolean;
}

export interface IPublicUser {
	id: number | null;
	firstName: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	watchList: IWatchlist[];
}

interface IWatchlist {
	id: number | null;
	name: string;
	assetId: string;
	createdAt: string;
	updatedAt: string;
	user: number | null;
}

export interface ILoginData {
	email: string;
	password: string;
}

export interface IRegisterData {
	name: string;
	username: string;
	email: string;
	password: string;
}

export type FormValues = {
	email: string;
	password: string;
	name: string;
	username: string;
	confirmPassword: string;
};
