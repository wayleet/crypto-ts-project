export interface IPropsLogin {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	navigate: (to: string) => void;
}

export interface IPropsRegister {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setRepeatPassword: (value: string) => void;
	setFirstName: (value: string) => void;
	setUsername: (value: string) => void;
	navigate: (to: string) => void;
}

export interface IAuthState {
	user: IPublicUser;
	isLogged: boolean;
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
