import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';
import { loginUser, registerUser } from '../../thunks/auth';

const initialState: IAuthState = {
	user: {
		id: null,
		firstName: '',
		username: '',
		email: '',
		createdAt: '',
		updatedAt: '',
		watchList: [
			{
				id: null,
				name: '',
				assetId: '',
				createdAt: '',
				updatedAt: '',
				user: null
			}
		]
	},
	isLogged: false,
	isLoading: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		});
		builder.addCase(loginUser.pending, (state) => {
			state.isLogged = false;
			state.isLoading = true;
		});
		builder.addCase(loginUser.rejected, (state) => {
			state.isLogged = false;
			state.isLoading = false;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		});
		builder.addCase(registerUser.pending, (state) => {
			state.isLogged = false;
			state.isLoading = true;
		});
		builder.addCase(registerUser.rejected, (state) => {
			state.isLogged = false;
			state.isLoading = false;
		});
	}
});

export default authSlice.reducer;
