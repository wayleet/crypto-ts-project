import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import LoginPage from './components/auth/login';
import PrivateRoute from './utils/router/private-route';

const App = () => {
	return (
		<div>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<LoginPage />} />
			</Routes>
		</div>
	);
};

export default App;
